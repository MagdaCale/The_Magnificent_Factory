

const Dashboard = ({worker}) => {

    return (
        <section>
            
            <p>Name: {worker.firstname} {worker.lastname} | Age: {worker.age}</p>
        </section>
    )
}

export default Dashboard