import WorkerList from "./WorkerList"
import WorkerNavigation from "./WorkerNavigation"
import { useState } from "react"

const Worker = () => {

    const [component, setComponent] = useState(< WorkerList/>)


    return(
        <div>
            <h1 className="Header">Arbeiter</h1>

            <WorkerNavigation setcomponent={setComponent}/>
            {component}

        </div>
    )
}

export default Worker