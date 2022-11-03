const WorkerItem = ({worker}) => {

    return(
        <div className="MachineItem">
            <p>{worker.firstname} {worker.lastname} | Kosten: geld</p>

            <p>Mitarbeiter 1</p>
            <p>Mitarbeiter 2</p>

            <p>Eigeställt am</p>
        </div>
    )
}

export default WorkerItem
