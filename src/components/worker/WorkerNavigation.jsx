import AddWorker from "./AddWorker"
import WorkerList from "./WorkerList"

const WorkerNavigation = (props) => {

    const navigate = (e) => {

        switch(e.target.innerText) {
            case 'Liste': props.setcomponent(<WorkerList />)
                break
            case 'Adden': props.setcomponent(<AddWorker />)
                break
            default : props.setcomponent(<WorkerList />)
        }
    }

    return(
        <nav onClick={navigate}>
            <p className="NavigationM">Liste</p>
            <p className="NavigationM">Adden</p>
        </nav>
    )
}

export default WorkerNavigation
