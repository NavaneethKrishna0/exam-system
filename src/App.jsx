import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeRouter from './components/home.jsx'; 
import Logins from './components/login.jsx'; 
import Signs from './components/sign.jsx';
import Teach_login from './components/tech_login.jsx';
import Teach_signup from './components/tech_signup.jsx';
import Help from './components/about.jsx';
import Contact from './components/contact.jsx';
import Student from './components/student_portal.jsx';
import Teacher from './components/Teacher_portal.jsx';
import Createexam from './components/createexam.jsx';
import TakeExam from './components/TakeExam.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/signup" element={<Signs />}
         />
         <Route path="/tech_login" element={<Teach_login />}/>
          <Route path="/tech_signup" element={<Teach_signup />}/>
          <Route path="/about" element={<Help />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/student-portal" element={<Student />}/>
          <Route path="/teacher-portal" element={<Teacher />}/>
          <Route path="/create-exam" element={<Createexam />}/>
          <Route path="/take-exam/:examName" element={<TakeExam />} />

      </Routes>
    </Router>
  );
};

export default App;
