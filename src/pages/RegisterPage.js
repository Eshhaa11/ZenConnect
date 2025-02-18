import HeaderComponent from "../components/headerComponent"
import './RegistrationForm.css';

const RegisterPage = () => {
    return (
        <div class = "container">
            <HeaderComponent/>
           <div class="title">Registration Form</div>
            <form action = "#">
              <div class="user-details">
                <div class = "input-box">
                  <span class="details">Full Name</span>
                  <input type="text" placeholder="Enter your full name" required/>
                </div>
                <div class = "input-box">
                  <span class="details">User Name</span>
                  <input type="text" placeholder="Enter your user name" required/>
                </div>
                <div class = "input-box">
                  <span class="details">Phone Number</span>
                  <input type="number" placeholder="Enter your phone number" required/>
                </div>
                <div class = "input-box">
                  <span class="details">Email</span>
                  <input type="email" placeholder="Enter your email" required/>
                </div>
                <div class = "input-box">
                  <span class="details">Password</span>
                  <input type="password" placeholder="Enter your password" required/>
                </div>
                <div class = "input-box">
                  <span class="details">Password</span>
                  <input type="password" placeholder="Enter your password once more" required/>
                </div>
                <div class = "gender-details">
                  <input type ="radio" name="gender" id="dot-1"/>
                  <input type ="radio" name="gender" id="dot-2"/>
                  <input type ="radio" name="gender" id="dot-3"/>

                  <span class="gender-title">Gender</span>
                  <div class="category">
                    <label for ="dot-1">
                      <span class= "dot one"></span>
                      <span class= "gender">Female</span>
                      </label>
                      <label for ="dot-2">
                      <span class= "dot two"></span>
                      <span class= "gender">Male</span>
                      </label>
                      <label for ="dot-3">
                      <span class= "dot three"></span>
                      <span class= "gender">Other</span>
                      </label>
                </div>
              </div>
              <div class = "button">
                <input type="submit" value="Register"/>
              </div>
            </div>
  
            </form>
        </div>
    )
}

export default RegisterPage