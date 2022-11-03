import ProductionList from "./ProductionList"
import AddProduction from "./AddProduction"

const ProductionNavigation = (props) => {

    const navigate = (e) => {

        switch(e.target.innerText) {
            case 'Liste': props.setcomponent(<ProductionList />)
                break
            case 'Adden': props.setcomponent(<AddProduction />)
                break
            default : props.setcomponent(<ProductionList />)
        }
    }

    return(
        <nav onClick={navigate}>
            <p className="NavigationM">Liste</p>
            <p className="NavigationM">Adden</p>
        </nav>
    )
}

export default ProductionNavigation
