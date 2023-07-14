import React, {useContext, useEffect} from "react"
//import axios from "axios"
import Card from "./Card"
import { AxiosContext } from "../context/AxiosContext"


export default function Form() {
    const [uglyForm, setUglyForm] = React.useState({
       title: "",
       description: "",
       imgUrl: "", // if wanted a default image you could put that here
    })

    const {getAll, handleSubmit, ugliesList} = useContext(AxiosContext)

    // set another state for array of uglies (default []) 
    // fetch and map over data {mappedUglies} -  
    // do I need to use useEffect here?  
    // yes bc we need to update based on dependency of when new things are added and stop infinite loop
    // what to use for dependency? set a variable for when uglies are added? 
    // no, just [] to run on page load - rest of rerenders will happen with API calls
    // set the display of the array of uglies objects 

    useEffect(() => {
        getAll()
    }, []) 
    // console.log(ugliesList)

    // map over array of saved uglies and display
    let mappedUglies = ugliesList.map((data, index) => {
        return (
            <Card {...data}
                //key={data.id}
                key={index}
                id={data.id}
                data={ugliesList}
                imgUrl={data.imgUrl}
            />    
        )
    })       

    // keep form inputs 'controlled' by state
    function handleChange(event) {
        const {name, value} = event.target
        setUglyForm(prevUglyForm => ({
            ...prevUglyForm,
            [name]:value
        }))
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(uglyForm) 
    }

    return(
        <main>
            <form className="form">

                <input
                    type="text"
                    className="form-input"
                    placeholder="Title"
                    name="title"
                    value={uglyForm.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    className="form-input"
                    placeholder="Description"
                    name="description"
                    value={uglyForm.description}
                    onChange={handleChange}  
                />
                <br />

                <input
                    type="text"
                    className="form-input-img"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={uglyForm.imgUrl}
                    onChange={handleChange}  
                />
                <br />

                <button onClick={submit} className="submit">Submit Ugly Thing</button>       
                
            </form>
            
            {/* don't really need this...
                but could put back if they want a preview of what they are submitting
                if not, delete styling from .css
            <div className="ugly-thing">
                <h2 className="ut-title">{uglyForm.title}</h2>
                <h3 className="ut-desc">{uglyForm.description}</h3>
                <img src={uglyForm.imgUrl} alt="ugly thing" className="ut-img" />
            </div> */}

            <ul>{mappedUglies}</ul> 

        </main>
    )
    
}
