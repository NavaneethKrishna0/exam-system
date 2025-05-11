import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './take_exam.css';

const TakeExam = () => {
    const { examName } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8081/teacher/questions-by-exam/${encodeURIComponent(examName)}`)
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error("Failed to fetch questions", error);
            });
    }, [examName]);

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        questions.forEach(q => {
            if (answers[q.id] && answers[q.id] === q.correctAnswer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setSubmitted(true);
    };

    return (
        <div className="take-exam-container">
            <h2>Exam: {examName}</h2>

            {questions.map((question, index) => (
                <div key={question.id} className="question-block">
                    <p><strong>{index + 1}. {question.questionText}</strong></p>
                    {['A', 'B', 'C', 'D'].map(option => {
                        const optionKey = `option${option}`;
                        return (
                            <label key={optionKey} className="option-label">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={question[optionKey]}
                                    onChange={() => handleOptionChange(question.id, question[optionKey])}
                                    checked={answers[question.id] === question[optionKey]}
                                    disabled={submitted} // Disable inputs after submission
                                />
                                {question[optionKey]}
                            </label>
                        );
                    })}
                </div>
            ))}

            {!submitted && questions.length > 0 && (
                <button className="submit-btn" onClick={handleSubmit}>Submit Exam</button>
            )}

            {submitted && (
                <div className="result-section">
                    <h3>Result</h3>
                    <p>You scored: <strong>{score}</strong> out of {questions.length}</p>
                </div>
            )}
        </div>
    );
};

export default TakeExam;
