import './signup.css'
import axios from 'axios';

function saveTeacherData(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const usern = document.getElementById("username").value;
    const passw = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    axios.post('http://localhost:8081/teacher/signup', {
        name, usern, passw, age
    }).then((response) => {
        alert(response.data);
    });
}

const TechSignup = () => (
    <div>
        <nav>
            <h3>Online Exam System</h3>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/login">LOGIN</a></li>
                <li><a href="/signup">SIGNUP</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        </nav>

        <div className="con">
            <form onSubmit={saveTeacherData}>
                <h2>Create Your Teacher Account</h2>
                <label>Enter Teacher Name:</label>
                <input type="text" id="name" placeholder="Name" />
                <label>Enter Username:</label>
                <input type="text" id="username" placeholder="Username" />
                <label>Enter Password:</label>
                <input type="password" id="password" placeholder="Password" />
                <label>Enter Age:</label>
                <input type="number" id="age" placeholder="Age" />
                <button type="submit">Signup</button>
                <h3>Already have an account?</h3>
                <button type="button" onClick={() => window.location.href = '/tech_login'}>Login</button>
            </form>
        </div>
    </div>
);

export default TechSignup;
