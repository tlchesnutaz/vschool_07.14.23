import React from "react"

export default function Form() {

    //const [firstName, setFirstName] = React.useState("")
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    //console.log(formData)

    function handleChange(event) {
        
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //[event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value

            }
        })
        

    }

    function handleSubmit(event) {
        event.preventDefault()
        //submitToAPI(formData)
        console.log(formData)

    }
    

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="First Name" //what shows in input
                onChange={handleChange}
                name="firstName" //this is name part of event.target.name - 
                //has to match property of state object so handleChange knows 
                //which 'target' is receiving the event 
                value={formData.firstName} //this is value part of event.target.value -
                //makes it a controlled component
                //sets it so react (state) is driving what is shown in the input
                //not the other way around 
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email" 
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <br />

            <input 
                className="friendly"
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly} 
                onChange={handleChange}
                name="isFriendly"  
            />
            <label className="label" htmlFor="isFriendly">Are you friendly?</label>
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed" 
                    name="employment" //as in html need all radio buttons to have same so 
                    //only on can be checked at a time
                    value="unemployed"
                    checked={formData.employment === "unemployed"} //has to be set to 'value' prop
                    //so that it is a boolean value (to be a controled component) and react can 
                    //control input and set state
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
            
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>

           

        </form>
            //as in html if button is found in a form it defaults to type submit
            //if you didn't want it to, you would have to set type="button"
    )


}
