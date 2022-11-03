import { useState } from "react"
import ProductionList from "./ProductionList"
import ProductionNavigation from "./ProductionNavigation"


const Production = () => {

    const [component, setComponent] = useState(< ProductionList/>)

    return(
        <div>
            <h1 className="Header">Prudoktion</h1>

            <ProductionNavigation setcomponent={setComponent}/>
            {component}

        </div>
    )
}

export default Production