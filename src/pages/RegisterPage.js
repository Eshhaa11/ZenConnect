import HeaderComponent from "../components/headerComponent";
import "./RegistrationForm.css";

const RegisterPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="password" placeholder="Confirm your password" required />
              </div>
            </div>
            <div className="gender-details">
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <input type="radio" name="gender" id="dot-1" />
                  <span className="dot one"></span>
                  Male
                </label>
                <label htmlFor="dot-2">
                  <input type="radio" name="gender" id="dot-2" />
                  <span className="dot two"></span>
                  Female
                </label>
                <label htmlFor="dot-3">
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="dot three"></span>
                  Prefer not to say
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
