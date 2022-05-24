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
  const [formValues, setFormValues] = useState({ petName: "", petType: "" });
  const [pets, setPets] = useState(petsList);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues,  [name]: value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newPet = {
      petName: formValues.petName,
      petType: formValues.petType
    }
    setPets(pets.concat(newPet));
    setFormValues({ petName: "", petType: "" });
  }

  return (
    <div className="container">
      {
        // I want to see a list of all my pets!
        pets.map((pet, idx) => <p key={idx}>{pet.petName} is a {pet.petType}</p>)
      }
      <form onSubmit={submit}>
        <input 
          name="petName" 
          value={formValues.petName} 
          type="text" 
          onChange={change} 
        />
        <input
          name="petType"
          value={formValues.petType}
          type="text"
          onChange={change}
        />
        <input type="submit" value="Create Ya Pet!" />
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
