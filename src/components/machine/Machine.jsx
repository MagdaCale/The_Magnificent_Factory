import { useState } from "react"
import MachineList from "./MachineList"
import MachineNavigation from "./MachineNavigation"


const Machine = () => {
    const [component, setComponent] = useState(< MachineList/>)

    return(
        <div>
            <h1 className="Header">Maschinen</h1>

            <MachineNavigation setcomponent={setComponent}/>
            {component}

        </div>
    )
}

export default Machine