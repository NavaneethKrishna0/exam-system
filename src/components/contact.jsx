import { Link } from 'react-router-dom';
import './home1.css';

const Contact = () => (
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
            <h2>Contact Us</h2>
            <h3>If you have any questions, feel free to reach out to us:</h3>
            <ul><h3>
                <li>Email: contact@examportal.com</li>
                <li>Phone: +91-12345-67890</li>
                <li>Address: KL University, Vijayawada, India</li>
                </h3>
            </ul>
        </div>
    </div>
);

export default Contact;
