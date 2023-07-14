import React, { useState } from 'react'


export default function AddUserForm(props){

    const initInputs = { 
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        state: props.state || "",
        age: props.age || "" 
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        if (props.editToggle === true){
            props.edit(inputs, props._id) 
            props.setEditToggle(prevToggle => !prevToggle) 
        } else {
            props.addUser(inputs, props._id)}
       
        // props.submit(inputs, props._id) - was addUser and just inputs, change/add for edit functionality
        setInputs(initInputs)
    }

    return (

        <form className='form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name"
            />

            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
            />

            <input 
                type="text" 
                name="state" 
                value={inputs.state} 
                onChange={handleChange} 
                placeholder="State"
            />

            <input 
                type="text" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange} 
                placeholder="Age"
            />
            <button>{ props.btnText }</button>
        </form>

    )
}