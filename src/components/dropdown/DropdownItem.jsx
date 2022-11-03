const DropdownItem = ({worker}) => {
    return(
        <option>{worker.firstname} {worker.lastname}</option>
    )
}

export default DropdownItem