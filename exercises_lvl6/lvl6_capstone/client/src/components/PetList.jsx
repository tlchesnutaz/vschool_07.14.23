import  React, { useContext, useEffect } from "react"
import { AxiosContext } from "../context/AxiosContext.jsx"
import PetCard from "./PetCard"


export default function PetList() {
	const { pets, getPets, user: { username } } = useContext(AxiosContext)

    const petsList = pets.map(pet => {

		return (
			
			<PetCard
			key = {pet._id} 
			pet = {pet}
			/>         
			)
		})
		
		useEffect(() => {
			getPets()
		}, [])
		console.log(pets)

	return (
		<div className="container-petcard">
			<h1>Welcome @{username}!</h1>
			<h3> Your Pets </h3>

			<div className="pet-list">
				{ petsList }
			</div>
		</div>
	)
}
