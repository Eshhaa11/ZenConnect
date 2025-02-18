import HeaderComponent from "../components/headerComponent"

const LoginPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Login</h1>
            <form>
              <input type="email" name="email" placeholder="Email" required/>
              <input type="tel" name="phone" placeholder="Phone Number" required/>
              <input type="password" name="password" placeholder="Password" required/>
              <button type="submit">Login</button>
           </form>
        </div>
    )
}

export default LoginPage;