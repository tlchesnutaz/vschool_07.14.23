import React, {useState, useContext} from "react"
import { AxiosContext } from "../context/AxiosContext"

export default function Card (props) {

    const {handleDelete, updateUgly} = useContext(AxiosContext) 

    const [uglyCard, setUglyCard] = React.useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl,
        //"https://cdn.shopify.com/s/files/1/0582/2844/1225/files/ugly_word.png?height=628&pad_color=ffffff&v=1651954240&width=1200" //"https://images.unsplash.com/photo-1545006360-b2a8d6fb91df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
    })
    
    const [toggleEdit, setToggleEdit] = useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setUglyCard(prevUglyCard => ({
            ...prevUglyCard,
            [name]:value
        }))
    }

    return (
        <li> 
            <img src={uglyCard.imgUrl} className="mapped-img"/>
            {toggleEdit ? 
            <>
            <form className="form">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Title"
                    name="title"
                    value={uglyCard.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Description"
                    name="description"
                    value={uglyCard.description}
                    onChange={handleChange}  
                />
            </form>

            <button className="cancel" onClick={()=>setToggleEdit(!toggleEdit)}>Cancel</button>
            <button className="update" onClick={()=>{
                updateUgly(props._id, uglyCard)
                setToggleEdit(!toggleEdit)
                }}>Update Ugly</button>
            </>
            : 
            <>
            <p>{uglyCard.title}</p>
            <p>{uglyCard.description}</p>
            <button className="edit" onClick={()=>setToggleEdit(!toggleEdit)}>Edit</button>
            <button className="delete" onClick={()=>handleDelete(props._id)}>Delete</button>
            </>
            }
            <hr className="line" />          
        </li>
    )

}
