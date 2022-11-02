import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"

const Home = () => {
    const [workers, setWorkers] = useState([])

    useEffect(() => {

        let result = null

        const fetchdata = async () => {
            result = await fetch('http://localhost:9090/admin/home', {
                headers: {
                    Authentication: 'Bearer ' +localStorage.getItem('token')
                }})

                if(result.status === 200){
                    const data = await result.json()
                    setWorkers(data)
                }
        }
        fetchdata()
    },[])

    return(
        <>
            <h1>This is Home</h1>
            <section>
                {workers.map((worker, key) => 
                    <Dashboard key={key} worker={worker}
                    />
                )}    
            </section>
        </>
    )
}

export default Home