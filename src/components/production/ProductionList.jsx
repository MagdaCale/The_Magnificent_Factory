import { useEffect, useState } from "react"
import ProductionItem from './ProductionItem'

const ProductionList = () => {

    const [worker, setWorker] = useState([])

    useEffect (() => {

        const fetchdata = async () => {

            const response = await fetch('http://localhost:9090/admin/allworkers',
                { headers: {
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
        <div className="List">

            {worker && worker.map((worker, key) =>
                <ProductionItem key={key} worker={worker}
                />
                )}
        </div>
    )
}

export default ProductionList
