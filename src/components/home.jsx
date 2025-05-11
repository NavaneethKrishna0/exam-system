import { Link } from 'react-router-dom';
import './home1.css';

const HomeRouter = () => (
    <div>
        <nav>
            <h3>Online Exam System</h3>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/signup">SIGNUP</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>

        <div className="content">
            <h2>Welcome to the Online Exam System. Your gateway to efficient and effective online assessments.</h2>
            <Link to="/login">
                <button id="log">Student Login</button>
            </Link>
            <br/><br/>
            <Link to="/tech_login">
                <button id="log">Teacher Login</button>
            </Link>
            <br/><br/>
            <Link to="/signup">
                <button id="log">Student Signup</button>
            </Link>
            < br/><br/>
            
            <Link to="/tech_signup">
                <button id="t_sign" >Teacher Signup</button>
            </Link>
            
        </div>
    </div>
);

export default HomeRouter;