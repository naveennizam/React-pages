import React from 'react'


const Home = () => {
    return (
        <>
        <center>
            <h1>Making sense
                of artificial intelligence</h1>

            <p style={{margin:"0px 250px"}}>The last decade has seen major progress, sparked by increasing computer speeds and the introduction of techniques such as machine learning. As a result, AI is now becoming increasingly woven into the way we live, work and make sense of the world.</p>
            <video controls={false}   muted loop autoPlay > 
                <source type="video/webm" src="https://storage.googleapis.com/gweb-aiaz.appspot.com/animations/Masthead.webm" />
            </video>
            </center>
       
        </>
    );
};

export default Home;