import { useEffect, useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [newQuestion, setNewQuestion] = useState('');
    const [button, setButton] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(newQuestion!=''){
            setButton(true)
        }
        else{
        setButton(false)
        setButtonClicked(false)
        setError(false)
        }
    }, [newQuestion])
    

    const handelClick = () =>{
        if(newQuestion==''){
            setError(true)
        }
        else{
        setError(false)
        generateResponse(newQuestion, setNewQuestion) 
        setButtonClicked(true)
        }
    }

    return (
        <div className="form-section">
            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask me anything..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>
            <div className='form-box'>
            <button className="custom-btn btn-2" onClick={() => handelClick()}>
                <span>{!buttonClicked?`Generate Response`:`Now Wait`}</span>
            </button>
            {error?
            <span>
                Please Ask Somthing!!!
            </span>
            :
            <></>
}
            </div>
        </div>
    )
}

export default FormSection;