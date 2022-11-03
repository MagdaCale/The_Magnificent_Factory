import MachineList from "./MachineList"
import AddMachines from "./AddMachines"

const MachineNavigation = (props) => {

    const navigate = (e) => {

        switch(e.target.innerText) {
            case 'Liste': props.setcomponent(<MachineList />)
                break
            case 'Adden': props.setcomponent(<AddMachines />)
                break
            default : props.setcomponent(<MachineList />)
        }
    }

    return(
        <nav onClick={navigate}>
            <p className="NavigationM">Liste</p>
            <p className="NavigationM">Adden</p>
        </nav>
    )
}

export default MachineNavigation
