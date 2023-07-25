import {React, useState, useContext} from 'react'
import { AxiosContext } from '../context/AxiosContext'
 

export default function EditForm(props) {

    const {pet, handleToggle} = props
    const {updatePet} = useContext(AxiosContext)
 
    console.log(pet)

    const [edits, setEdits] = useState({
		petName: pet.petName,
		species: pet.species,
		specific: pet.specific,
		dob: pet.dob,
		acquired: pet.acquired,
		gender: pet.gender,
		neutered: pet.neutered,
		chipNum: pet.chipNum,
		lastVac: pet.lastVac,
		vetName: pet.vetName,
		vetPhone: pet.vetPhone,
		notes: pet.notes,
		owner: pet.owner
	})

	function handleEditChange(e) {
		const { name, value, type, checked } = e.target
		setEdits((prevEdits) => {
			return {
				...prevEdits,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

    function handleEditSave(e) {
		e.preventDefault()
		handleToggle()
        updatePet(pet._id, edits)
	}

	return (
		<>
			<input
				type="text"
				name="petName"
				value={edits.petName}
				onChange={handleEditChange}
			/>
			<br />
			<input
				type="text"
				name="species"
				placeholder="Species"
				value={edits.species}
				onChange={handleEditChange}
			/>
			<br />
			<input
				type="text"
				name="specific"
				placeholder="Type or Breed"
				value={edits.specific}
				onChange={handleEditChange}
			/>
			<br />
			<input
				type="date"
				name="dob"
				id="dob"
				placeholder="DOB"
				value={edits.dob}
				onChange={handleEditChange}
			/>
			<label htmlFor="dob"> DOB (if known) </label>
			<br />
			<input
				type="date"
				name="acquired"
				id="acquired"
				placeholder="Date Acquired"
				value={edits.acquired}
				onChange={handleEditChange}
			/>
			<label htmlFor="acquired"> Date Acquired </label>
			<br />
			<fieldset>
				<legend> Gender: </legend>
				<input
					type="radio"
					id="male"
					name="gender"
					value="male"
					checked={edits.gender === 'male'}
					onChange={handleEditChange}
				/>
				<label htmlFor="male"> Male </label>
				<input
					type="radio"
					id="female"
					name="gender"
					value="female"
					checked={edits.gender === 'female'}
					onChange={handleEditChange}
				/>
				<label htmlFor="female"> Female </label>
			</fieldset>
			<fieldset>
				<legend> Spayed/Neutered: </legend>
				<input
					type="radio"
					id="yes"
					name="neutered"
					value="yes"
					checked={edits.neutered === 'yes'}
					onChange={handleEditChange}
				/>
				<label htmlFor="yes"> Yes </label>
				<input
					type="radio"
					id="no"
					name="neutered"
					value="no"
					checked={edits.neutered === 'no'}
					onChange={handleEditChange}
				/>
				<label htmlFor="no"> No </label>
			</fieldset>
			<input
				type="text"
				name="chipNum"
				placeholder="Microchip #"
				value={edits.chipNum}
				onChange={handleEditChange}
			/>
			<br />
			<label htmlFor="lastvac"> Date of last vaccinations: </label>
			<input
				type="date"
				name="lastVac"
				id="lastvac"
				placeholder="Date"
				value={edits.lastVac}
				onChange={handleEditChange}
			/>
			<br />
			<label htmlFor="vetname"> Vet Name: </label>
			<input
				type="text"
				name="vetName"
				id="vetname"
				placeholder="Vet"
				value={edits.vetName}
				onChange={handleEditChange}
			/>
			<br />
			<label htmlFor="vetphone"> Vet Phone #: </label>
			<input
				type="number"
				name="vetPhone"
				id="vetphone"
				placeholder="Format 1234567890"
				value={edits.vetPhone}
				onChange={handleEditChange}
			/>
			<br />
			<label htmlFor="notes"> Notes: </label>
			<textarea
				name="notes"
				id="notes"
				rows={2}
				cols={40}
				placeholder="Other inportant information, such as surgeries, chronic conditions, etc."
				value={edits.notes}
				onChange={handleEditChange}
			/>
			<input
				type="text"
				name="owner"
				placeholder="Owner ID"
				value={edits.owner}
				onChange={handleEditChange}
			/>
			<button onClick={handleEditSave}>Save</button>
            <button onClick={handleToggle}>Cancel</button>
			<br />
		</>
	)
}
