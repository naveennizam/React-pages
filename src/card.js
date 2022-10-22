
function Cards (props)  {
    return (
        <>
          <div className="card" style={{width: "200px"}}>
        <img src={props.pic} className="card-img-top"  alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.naam}</h5>
            <p className="card-text">{props.paragraph}</p>
            <a href="https://github.com/naveennizam" target='blank'>
            <button className="btn btn-primary">{props.press}</button>

            </a>
          </div>
          
      </div>
     
        
        </>
    );
};
export default Cards;