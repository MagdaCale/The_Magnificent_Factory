
import Dashboard from "../../pages/Dashboard"
import Machine from "../machine/Machine"
import Worker from "../worker/Worker"
import Production from "../production/Production"


const Navigation = (props) => {

    const navigate = (e) => {

        switch (e.target.innerText) {
            case "Dashboard": props.setcomponent(<Dashboard/>)
                break
            case "Maschinen": props.setcomponent(<Machine />)
                break
            case "Mitarbeiter": props.setcomponent(<Worker />)
                break
            case "Produktion": props.setcomponent(<Production />)
                break
        }

    }

    return(
        <nav onClick={navigate} className="Navigation">
            <p>Dashboard</p>
            <p>Maschinen</p>
            <p>Mitarbeiter</p>
            <p>Produktion</p>
        </nav>
    )
}

export default Navigation
