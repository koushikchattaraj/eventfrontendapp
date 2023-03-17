// import logo from "./logo.svg";
// import { Landing } from "./component/Base/Landing/Landing.js";
// import { useSelector } from "react-redux";
// import { Main } from "./component/Base/Main/Main";
// import { useEffect } from "react";
// import { Event } from "./component/Base/Event/Event";
// import card from "./asset/card.jpg"
// import FormSection from "./component/FormSection";
// import AnswerSection from "./component/AnswerSection";

// function App() {
//   const landingPageStatus = useSelector((state) => state.ladndingPageStatus);

//   const src={card}

//   return (
//     // <div className="App">{landingPageStatus ? <Landing /> : <Main />}</div>
//     // <div>
//     //   {/* <Event src  ={src}/> */}
//     //   <FormSection />
//     //   <AnswerSection />
//     // </div>

//     <div>
//     <div className="header-section">
//         <h1>ChatGPT CLONE 🤖</h1>
//         <p>
//             I am an automated question and answer system, designed to assist you
//             in finding relevant information. You are welcome to ask me any queries
//             you may have, and I will do my utmost to offer you a reliable
//             response. Kindly keep in mind that I am a machine and operate solely
//             based on programmed algorithms.
//         </p>
//     </div>

//     <FormSection />
//     <AnswerSection />
// </div>

//   );
// }

// export default App;

import { Configuration, OpenAIApi } from 'openai';
import FormSection from "./component/FormSection";
import AnswerSection from "./component/AnswerSection";
import { useState } from 'react';
import "./App.css";


const App = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });


    const openai = new OpenAIApi(configuration);

    const [storedValues, setStoredValues] = useState([]);

    const generateResponse = async (newQuestion, setNewQuestion) => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };

        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };

        const response = await openai.createCompletion(completeOptions);

        if (response.data.choices) {
            setStoredValues([
                {
                    question: newQuestion,
                    answer: response.data.choices[0].text,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        }
    };

    return (
        <div className='ChatGpt'>
            <div className="header-section">
                <span className='h1Text'>AI by Koushik 🤖</span>
                    <p>
                        I am an automated question and answer system, designed to assist you
                        in finding relevant information. You are welcome to ask me any
                        queries you may have, and I will do my utmost to offer you a
                        reliable response. Kindly keep in mind that I am a machine and
                        operate solely based on programmed algorithms.
                    </p>
            </div>

            <FormSection generateResponse={generateResponse} />

            <AnswerSection storedValues={storedValues} />
        </div>
    );
};

export default App;
