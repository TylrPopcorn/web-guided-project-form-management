import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValue, setFormValues] = useState({
    petName: "",
    petType: ""
  })

  const change = function (val) {
    console.log(val.target.name, val.target.value)
    setFormValues({ ...formValue, [val.target.name]: val.target.value })
  }

  const submit = (val) => {
    val.preventDefault();
    const newPet = {
      petName: formValue.petName.trim(),
      petType: formValue.petType.trim(),
    }

    setPets(pets.concat(newPet))
    setFormValues({ petName: "", petType: "" })
  }

  return (
    <div className="container">
      {
        petsList.map(pet => {
          petsList.map(pet, idx =>
            <p key={idx}>PetName: {pet.petName} petType: {pet.petType} </p>)
        })
      }

      <form onSubmit={submit}>
        <input type="text" name='petName'
          onChange={change}
          value={formValue.petName}
        />

        <input type="text" name='petType'
          onChange={change}
          value={formValue.petType}
        />

        <input type='submit' value="HAVE A PET" />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
