import { useState } from "react"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"


export default function HeartButton(props) {

    const {area, savedFaves, removeFave, testFill} = props
    const [saved, setSaved] = useState(false)

    function save(e) {
        e.preventDefault()
        setSaved(prevSaved => !prevSaved)
        savedFaves(area)  
    }

    function unsave(e) {
        e.preventDefault()
        setSaved(prevSaved => !prevSaved)
        removeFave(area.RecAreaID)
    }
    console.log(testFill)

    return(
        <div className="heart">
            {/* {!saved && <></>} {saved && <></>} */}
            {testFill || saved ? <MdFavorite className="fav" onClick={unsave}/> : <MdFavoriteBorder className="fav" onClick={save}/>}
        </div>
    )
}