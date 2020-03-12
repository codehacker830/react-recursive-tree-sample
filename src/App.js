import React from 'react';
// import logo from './logo.svg'; import './App.css';
import Comment from './Comment';

const defaultState = {
    author: "Some user",
    body: "Great work",
    replies: [
        {
            author: "A user replying",
            body: "Yes it was great work"
        }, {
            author: "Another user replying",
            body: "It really was great work!",
            replies: [
                {
                    author: "A user replying",
                    body: "Yes it was great work",
                    replies: [
                        {
                            author: "Last replying",
                            body: "Ow great work!"
                        }
                    ]
                }
            ]
        }, {
            author: "Another user replying",
            body: "It really was great work!"
        }
    ]
};

function App() {
    return (
        <div>
            <Comment {...defaultState}/>
        </div>
    );
}

export default App;
