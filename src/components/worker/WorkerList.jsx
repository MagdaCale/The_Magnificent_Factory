import { useEffect, useState } from "react"
import WorkerItem from "./WorkerItem"

const WorkerList = () => {
    const [worker, setWorker] = useState([])

    useEffect (() => {

        const fetchdata = async () => {

            const response = await fetch('http://localhost:9090/admin/allworkers',
                { headers: {
                    'content-type': 'application/json',
                    Authentication : 'Bearer ' + localStorage.getItem('token')
                }})

                if(response.status === 200){
                    const data = await response.json()

                    setWorker(data)
                }
        }

        fetchdata()
    },[])

    return(
        <div className="MachineList">
            {worker.map((worker, key) => <WorkerItem key={key} worker={worker}/>)}
        </div>
    )
}

export default WorkerList
