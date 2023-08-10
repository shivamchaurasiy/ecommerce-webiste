import Header from "./Header"
import Footer from "./Footer"
import './css/Login.css'

const Login = () => {
    return (
        <>
            <Header />
            <div class="chatapp" id="userlogin">

                <div class="login-container">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                        <label for="pwd">Password</label>
                        <input type="password" id="pwd" />
                        <button type="button" id="login" className="btn btn-primary bg-primary mt-3">Login</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login