import React, { useState } from 'react'
import AddUserForm from './AddUserForm.jsx'



export default function User(props){

   const { firstName, lastName, state, age, _id } = props
   const [editToggle, setEditToggle] = useState(false)
   
    return(

        <div className='user-container'>

            { !editToggle ?
            <>
            <h3>{firstName} {lastName}</h3>
            <h4>{state}</h4>
            <p>{age}</p>
            <button 
                onClick={() => props.deleteUser(_id)}>
                Delete
            </button>
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
            </>
            :
            <>
            <AddUserForm    
                firstName={firstName}
                lastName={lastName}
                state={state}
                age={age}
                _id={_id}
                btnText="Submit Edit"
                editToggle={editToggle}
                edit={props.edit}
                setEditToggle={setEditToggle}
            />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Cancel
            </button>
            </>
            }

        </div>
    )
}