import HeaderComponent from "../components/headerComponent"

const LoginPage = () => {
    return (
        <div>
            <HeaderComponent />
            <h1>Login</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" clasNames="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;