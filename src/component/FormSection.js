import { useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div className="form-section">
            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask me anything..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>
            <button className="custom-btn btn-12" onClick={() => generateResponse(newQuestion, setNewQuestion)} disabled={!newQuestion}>
                <span>
                Wait Now
                </span>
                <span>Generate Response</span>
            </button>
        </div>
    )
}

export default FormSection;