import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './student_portal.css';

const CreateExam = () => {
    const [examName, setExamName] = useState(''); // State for exam name
    const [questions, setQuestions] = useState([
        { questionText: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: '' }
    ]);

    const handleChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { questionText: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Attach exam name to each question
        const questionsWithExamName = questions.map((question) => ({
            ...question,
            examName: examName // Add the exam name to each question
        }));

        // Send data to the backend
        axios.post('http://localhost:8081/teacher/add', questionsWithExamName)
            .then(response => {
                alert('Exam saved successfully!');
                setExamName(''); // Clear exam name field
                setQuestions([{ questionText: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: '' }]); // Clear question fields
            })
            .catch(error => {
                alert('Failed to save exam.');
            });
    };

    return (
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
                <h2>Create Exam</h2>
                <form onSubmit={handleSubmit}>
                    <label>Exam Name:</label>
                    <input
                        type="text"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        required
                    />
                    {questions.map((q, index) => (
                        <div key={index} className="question-block">
                            <h3>Question {index + 1}</h3>
                            <label>Question:</label>
                            <input
                                type="text"
                                value={q.questionText}
                                onChange={(e) => handleChange(index, 'questionText', e.target.value)}
                                required
                            />
                            <label>Option A:</label>
                            <input
                                type="text"
                                value={q.optionA}
                                onChange={(e) => handleChange(index, 'optionA', e.target.value)}
                                required
                            />
                            <label>Option B:</label>
                            <input
                                type="text"
                                value={q.optionB}
                                onChange={(e) => handleChange(index, 'optionB', e.target.value)}
                                required
                            />
                            <label>Option C:</label>
                            <input
                                type="text"
                                value={q.optionC}
                                onChange={(e) => handleChange(index, 'optionC', e.target.value)}
                                required
                            />
                            <label>Option D:</label>
                            <input
                                type="text"
                                value={q.optionD}
                                onChange={(e) => handleChange(index, 'optionD', e.target.value)}
                                required
                            />
                            <label>Answer:</label>
                            <input
                                type="text"
                                value={q.correctAnswer}
                                onChange={(e) => handleChange(index, 'correctAnswer', e.target.value)}
                                required
                            />
                            <hr />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddQuestion}>
                        Add Question
                    </button>
                    <button type="submit">Save Exam</button>
                </form>
            </div>
        </div>
    );
};

export default CreateExam;
