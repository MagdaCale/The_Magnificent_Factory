import { useState, useEffect } from "react"
import DropdownItem from "react-dropdown"

const AddProduction = () => {

    const date = new Date()
/*     const [production, setProduction] = useState('') */
    const [worker, setWorker] = useState('')

    /* const add = async () => {

        const production = {
            production : production,
        }

        const response = await fetch('http://localhost:9090/admin/addmachine', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                Authentication: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(production)
        })

        const data = await response.json()

        if(data.state) {
            setProduction('')
        }
    }  */

    useEffect(() => {
        
        const loadWorker = async () => {

            const response = await fetch('http//:localhost:9090/admin/availableworkers', {
                headers: {
                    'content-type': 'application/json',
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })

            if(response.status === 200){
                const data = await response.json()

                setWorker(data)
            }
        }
        loadWorker()
    },[])


    return(
        <div className="AddMachine">
            <select className="selectfield">
                {worker && worker.map((worker)=>
                    <DropdownItem worker={worker}/>
                )}
            </select>
        
            {/* <button onClick={add}> START </button> */}
        </div>
    )
}

export default AddProduction