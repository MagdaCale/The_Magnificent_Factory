import { useState } from "react"

const AddWorker = () => {

    const date = new Date()
    const [worker, setWorker] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')


    const add = async () => {

        const worker = {
            firstname : firstname,
            lastname: lastname
        }

        const response = await fetch('http://localhost:9090/admin/addworker', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                Authentication: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(worker)
        })

        const data = await response.json()

        if(data.state) {
            setFirstname('')
            setLastname('')
        }
    }

    return(
        <div className="AddWorker">
            <input type="text" placeholder='Vorname' onChange={(e) => {setFirstname(e.target.value)}}/>

            <input type="text" placeholder='Nachname' onChange={(e) => {setLastname(e.target.value)}}/>

            <button onClick={add}> Mitarbeiter hinzufügen</button>
        </div>
    )
}

export default AddWorker