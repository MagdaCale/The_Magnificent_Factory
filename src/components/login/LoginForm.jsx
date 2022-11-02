
const LoginForm = (props) => {
    return(
        <section className="loginForm">
            <label htmlFor="username">Username</label>
            <input onChange={(e) => {props.setusername(e.target.value)}} type="text" placeholder="Username" />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => {props.setpassword(e.target.value)}} type="password" placeholder="Password" />
            
            <button onClick={props.login}>Login</button>

        </section>
    )
}

export default LoginForm