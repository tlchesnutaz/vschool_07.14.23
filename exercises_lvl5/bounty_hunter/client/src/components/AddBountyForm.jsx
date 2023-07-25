import React, { useState } from 'react'


export default function AddBountyForm(props){

    const initInputs = { 
        firstName: props.firstName || '', 
        lastName: props.lastName || '', 
        bounty_flan: props.bounty_flan || '', 
        type: props.type || '',
        living: props.living || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked : value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        if (props.toggleEdit === true){
            props.edit(inputs, props._id)
            props.setToggleEdit(prevToggle => !prevToggle)
        } else {
            props.addBounty(inputs, props._id)
        }
        
        //props.submit(inputs)
        setInputs(initInputs)
    }

    return (
       
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name"
                value={inputs.firstName} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name"
                value={inputs.lastName} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="bounty_flan" 
                placeholder="Bounty, in flan:"
                value={inputs.bounty_flan} 
                onChange={handleChange} 
            />
            <fieldset>
                <legend>Last Known Side:</legend>
                <input 
                    type="radio"
                    id="jedi" 
                    name="type" 
                    value="jedi"
                    checked={inputs.type === "jedi"} 
                    onChange={handleChange}
                />
                <label htmlFor="jedi">Jedi</label>
                <input 
                    type="radio"
                    id="sith"
                    name="type"
                    value="sith"
                    checked={inputs.type === "sith"}
                    onChange={handleChange}
                />
                <label htmlFor="sith">Sith</label>
                <input 
                    type="radio"
                    id="unknown"
                    name="type"
                    value="unknown"
                    checked={inputs.type === "unknown"}
                    onChange={handleChange}
                />
                <label htmlFor="unknown">Unknown</label>        
            </fieldset>
            <fieldset>
                <legend>Living Status:</legend>
                <input 
                    type="radio"
                    id="alive" 
                    name="living" 
                    value="alive"
                    checked={inputs.living === "alive"} 
                    onChange={handleChange}
                />
                <label htmlFor="alive">Alive</label>
                <input 
                    type="radio"
                    id="deceased"
                    name="living"
                    value="deceased"
                    checked={inputs.living === "deceased"}
                    onChange={handleChange}
                />
                <label htmlFor="deceased">Deceased</label>
                <input 
                    type="radio"
                    id="unknown"
                    name="living"
                    value="unknown"
                    checked={inputs.living === "unknown"}
                    onChange={handleChange}
                />
                <label htmlFor="unknown">Unknown</label>       
            </fieldset>
            <button> {props.btnText} </button>
        </form>   
        
    )
}