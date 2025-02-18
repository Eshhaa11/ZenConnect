import HeaderComponent from "../components/headerComponent"
import './RegistrationForm.css';

const RegisterPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Register</h1>
            <form>
  <div class="form-group">
    <label>Full Name</label>
    <input type="text" class="form-control" placeholder="Enter full name"/>
  </div>
  <div class="form-group">
    <label>Phone Number</label>
    <input type="tel" class="form-control" placeholder="Enter phone number"/>
  </div>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label>Confirm Password</label>
    <input type="password" class="form-control" placeholder="Confirm password"/>
  </div>
  <div class="form-group">
    <label>Gender</label>
    <select id="cars">
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="other">Other</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     </div>
    )
}

export default RegisterPage