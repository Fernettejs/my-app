import React from 'react'
import '../CSS/FrontPage.css';


function FrontPage() {

    return (

    <div className="frontPage">
        <div className="text">
            <div className="mainText">
                <h1>Hi, I'm Joe Fernette.</h1>
                <h3>Look at these <span className="words1">words</span> I like!</h3>
            </div>
            <div className="words">
                <h2 className="word1">Family</h2>
                <h2 className="word2">Web Development</h2>
                <h2 className="word3">Coffee</h2>
                <h2 className="word4">VS Code</h2>
                <h2 className="word5">Health</h2>
                <h2 className="word6">Creative</h2>
            </div>
            <h6>Keep scrolling if you also like any of these words.</h6>
        </div>
    </div>
    );
  
}

export default FrontPage
