import React, {useState, createContext} from "react"
import axios from "axios"


const AxiosContext = createContext()
const apikey = import.meta.env.VITE_USERNAME

function AxiosContextProvider(props) {

    // const recAreasUrl = "https://ridb.recreation.gov/api/v1/recareas?limit=500&offset=0&full=true&state="
    // console.log(apikey)
    const [recAreasList, setRecAreasList] = useState([])
    const [favePlaces, setFavePlaces] = useState([])

    function gSearchLink(query) {
        const encodedQuery = encodeURIComponent(query)
        return `https://www.google.com/search?q=${encodedQuery}`
    }
    
    function handleClick(selectState) {
        //console.log(`${recAreasUrl}${selectState}`, "test") 
        axios.get (`https://ridb.recreation.gov/api/v1/recareas?limit=500&offset=0&full=true&state=${selectState}&apikey=${apikey}`)       
        .then(res => setRecAreasList(res.data.RECDATA))
        .catch(err => console.log(err)) 
    }
    
    // console.log(recAreasList) //use this to see all recAreas/info
    console.log(favePlaces)

    function savedFaves (newFave) {
        setFavePlaces (prevPlaces => [...prevPlaces, newFave]) 
    }

    function removeFave (placeId) {
        setFavePlaces(prevPlaces => prevPlaces.filter(place => placeId !== place.RecAreaID))
    }

    return(
        <AxiosContext.Provider 
            value={{
             recAreasList,
             handleClick,
             gSearchLink,
             favePlaces,
             savedFaves,
             removeFave
            }}
        >

            {props.children}
        </AxiosContext.Provider>
    ) 
}

export {AxiosContext, AxiosContextProvider}


// create a variable that will hold/get chosen state value from dropdown add that to url 
// get request for recAreas in chosen state, map over to get orgName, elimiate duplicates
// populate second drop with those values? conditional render? too much inconsistency in data 
// navbar (home, search and saved), home page w/ hero section, info about app, call to action
// search page with faves button (save to array - display on faves page)
// faves page with array of liked pages displayed with toggle funtion to unsave

// const link = recAreasList?.map(area => area.LINK.map(url => url.URL))
// const org = recAreasList?.map(area => area.ORGANIZATION.map(name => console.log(name)))
// const orgNames = recAreasList?.map(area => area.ORGANIZATION.map(name => name.orgName))
// this pulls org name out of org obj 
// const orgList = Array.from(new Set(orgNames.map(JSON.stringify)), JSON.parse)
// this converts arrays to strings, maps over removing dups and converts back to arrays
// do I need to convert back to arrays? don't think so
// const orgList = [...new Set(orgNames.flat().map(String))]
// const recList = recAreasList?.map(area => area.RecAreaName + '\n')

// useEffect(() => { }) where and when?

// see vite/webpack.config.js, package.json, env folder/file, and this for apikey variable
// this is still front end and visible to anyone, docs say to only put in backend, hoping we learn this!

// go back to new lrr on scrimba 'project bootstrapping' and 'deploy to netlify'
// (in wds video - lots of great stuff) *code in a not found 404 page with router 
// <NavLink style={({isActive}) => {return isActive ? {color:"red"} : { }}} to="/"> Home </NavLink>
// will make the link of the home page red when you are on that page/component
// useNavigate - allows us to nav someone to the page they were trying to access before logging in
// can also be used to set a timeout to auto redirect somewhere if they are on a not found page
