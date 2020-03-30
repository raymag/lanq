import React, { useState, useEffect } from 'react';

import './styles.css';

export default function Game({questionsList = []}){
    const [score, setScore] = useState(0);
    const [messages, setMessages] = useState([]);
    const [questions] = useState(questionsList);
    const [currentIndex, setCurrentIndex] = useState();
    const [availableIndexes, setAvailableIndexes] = useState([...questionsList.keys()]);
    const [messagesEnd, setMessagesEnd] = useState();
    
    const msgMax = 15;

    useEffect(() => {
        if(currentIndex === undefined && questions.length > 0){
            const randIndex = Math.floor(Math.random() * questions.length);
            setCurrentIndex(randIndex);
            let tempAvailableIndexes = [...questions.keys()];
            tempAvailableIndexes.splice(randIndex, 1);
            setAvailableIndexes(tempAvailableIndexes);
        }
        if(messagesEnd !== undefined){
            messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentIndex, messagesEnd, questions]);

    function nextQuestion(){
        if(availableIndexes.length === 0){
            setAvailableIndexes([...questions.keys()]);
        }
        let randIndex = Math.floor(Math.random() * availableIndexes.length);
        let tempAvailableIndexes = [...availableIndexes];
        tempAvailableIndexes.splice(randIndex, 1);
        setAvailableIndexes(tempAvailableIndexes);
        setCurrentIndex(availableIndexes[randIndex]);
    }

    function correctAnswer(e){
        let tempMessages = [...messages];
        if(messages.length === msgMax){
            tempMessages.splice(0, 1);
        }
        const message = {text: e.target.value, isCorrect: true};
        setMessages([...tempMessages, message]);
        e.target.value = '';
        setScore(score+10);
        nextQuestion();
    }
    function wrongAnswer(e){
        let tempMessages = [...messages];
        if(messages.length === msgMax){
            tempMessages.splice(0, 1);
        }
        const message = {text: e.target.value, isCorrect: false};
        setMessages([...tempMessages, message]);
        e.target.value = '';
    }

    function send(e){
        if(e.keyCode === 13 && e.target.value.replace(/ /ig, '') !== ''){
            if(questions.length !== 0){
                if(e.target.value.toLowerCase()  === questions[currentIndex].answer){
                    correctAnswer(e);
                }else{
                    wrongAnswer(e);
                }
            }else{
                console.log("[Game]: questionsList must not be null.");
            }
        }
    }

    return (
        <div id="game">
            <div id="game-sidebar">
                <span><b>YOU</b>: {score} pts </span>
            </div>
            <div id="game-holder">
                <div id="game-show">
                    {currentIndex !== undefined? 
                    <>
                    <span><b>What is this?</b></span><br/>
                    <img src={questions[currentIndex].thumbnail} alt="thumbnail" />
                    </>: ''
                    }
                </div>
                <div id="game-chat">
                    <div id="game-chat-messages">
                        {messages.map( (msg, index) => 
                            msg.isCorrect ?
                            <span key={index} className="correct-answer"><b>YOU:</b> {msg.text}<br/></span>
                            :<span key={index}><b>YOU:</b> {msg.text}<br/></span>
                        )}
                        <div style={{ opacity: 0 }} ref={(e) => setMessagesEnd(e)}>END</div>
                    </div> 
                    <div id="game-chat-writer">
                        <input type="text" autoFocus onKeyDown={send}/>
                    </div>
                </div>
            </div>
        </div>
    )
}