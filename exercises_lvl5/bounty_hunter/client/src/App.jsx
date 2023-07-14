import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.jsx'
import AddBountyForm from './components/AddBountyForm.jsx'


// axios.get("/api/bounties") - my/local server
// axios.get("http://swapi.dev") - to get data from outside server

export default function App() {
  const [bounties, setBounties] = useState([])

  function getBounties(){
    axios.get("/api/bounties")
    //.then(res => console.log(res))
    .then(res => setBounties(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addBounty(newBounty){
    axios.post("/api/bounties", newBounty)
    //.then(res => console.log(res))
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/api/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/api/bounties/${bountyId}`, updates)
    //.then(res => {console.log(res)}) // this is where it will update setBounties
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])
  

  return (
      <div>
        <h2 className='title'>BOUNTY TRACKER</h2>

        <AddBountyForm 
          addBounty={addBounty} 
          edit={editBounty}
          btnText="Add Bounty"
        />

        {bounties.map(bounty => 
          <Bounty 
            {...bounty} 
            key={bounty._id}
            edit={editBounty}
            deleteBounty={deleteBounty}
          />
        )} 

      </div>
  )
}

