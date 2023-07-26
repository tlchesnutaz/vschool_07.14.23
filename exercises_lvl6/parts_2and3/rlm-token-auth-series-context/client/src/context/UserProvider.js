import React, { useState } from 'react'
import axios from 'axios'


export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        todos: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post('/auth/signup', credentials)
            // .then(res => console.log(res)) res.data has user info and token
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
            // .catch(err => console.dir(err)) will log the err as an object so can see all the properties of it
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
            // .then(res => console.log(res))
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserTodos()
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
            // .catch(err => console.dir(err))
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    function getUserTodos(){
        userAxios.get("/api/todo/user")
        // .then(res => console.log(res))
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                // this is initial get so set todos to full arr of data (the todos)
                todos: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addTodo(newTodo){
        userAxios.post("/api/todo", newTodo)
        // .then(res => console.log(res))
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                todos: [...prevUserState.todos, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addTodo,
                resetAuthErr
            }}>
            { props.children }
        </UserContext.Provider>
    )
}