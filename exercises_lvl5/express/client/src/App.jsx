import { useState, useEffect } from 'react'
import axios from 'axios'
import User from './components/User.jsx'
import AddUserForm from './components/AddUserForm.jsx'


export default function App(){
  const [users, setUsers] = useState([])

  function getUsers(){
    axios.get("/api/users")
      //.then(res => console.log(res))
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

// remember to not update state using .push, it mutates it directly - no go!
  function addUser(newUser){
    axios.post("/api/users", newUser)
      //.then(res => console.log(res))
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteUser(userId){
    axios.delete(`/api/users/${userId}`)
    .then(res => {
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
    })
    .catch(err => console.log(err))
  }

  function editUser(updates, userId){
    axios.put(`/api/users/${userId}`, updates)
      .then(res => {
        setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data))
      })
      .catch(err => console.log(err))
  }

  function handleFilter(e){ 
    //console.log(e.target.value)
    if(e.target.value === "reset"){
      getUsers()
    } else {
    axios.get(`/api/users/search/state?state=${e.target.value}`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
 
  return (
      <div className='container'>
      <h2>Connecting front-end and back-end...</h2>

      <AddUserForm 
        addUser={addUser} //submit was addUser
        edit={editUser}
        btnText="Add User"
      />

      <h4>Filter results:</h4>
      <select className="filter-form" onChange={handleFilter}>
        <option value="reset">All Users</option>
        <option value="MA">MA</option>
        <option value="UT">UT</option>
        <option value="OH">OH</option>
      </select>

      {users.map(user => 
        <User 
          {...user} 
          key={user._id}
          deleteUser={deleteUser}
          edit={editUser}
        />
      )}
      
      </div>
      
  )
}


