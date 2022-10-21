import { Link } from "react-router-dom";
import Data from './DataCard'
console.log(Data[0])
const Cards = () => {
    return (
        <>
          <div className="card" style={{width: "18rem"}}>
        <img src='https://www.1training.org/wp-content/uploads/2017/10/6.png' className="card-img-top"  alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='' className="btn btn-primary">Go somewhere</Link>
          </div>
          
      </div>
     
        
        </>
    );
};
export default Cards;