const Blogs = () => {
    return(
        <>
    <center>
        <h1 className="text-success ">BLOG</h1>
        <h2>
        Knowledge is as far from information as wisdom is from knowledge.
        </h2>
        <p style={{margin:'0px 200px'}}>
        Take an AI system trained to spot a parrot in a set of bird photos. It does not "understand" what a parrot is. It can learn to spot identifying features, such as the colorful feathers and curved beak, but a system's knowledge is constrained by the kind of information it is given to learn from.
        </p>
        <video controls={false}  muted loop autoPlay > 
                <source type="video/webm" src="https://storage.googleapis.com/gweb-aiaz.appspot.com/animations/J.webm" />
            </video>
    </center>
        </>
    );
  };
  
  export default Blogs;