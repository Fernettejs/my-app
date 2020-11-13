import React from 'react';
import '../CSS/Widgets.css';
import {
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterTimelineEmbed,
}   from "react-twitter-embed";


function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055041"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JoeFernette"
                    options={{height:400}}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/joe.fernette"}
                    options={{text: "#I want to hire Joe Fernette now!", via: "Me"}}
                />
            </div>
        </div>
    )
}

export default Widgets
