import Koala from "./assets/images/koala.jpg";


function Card(){
    const koala  = "./assets/images/koala.jpg";
    return(
        <div className="card">
            <img className = 'card-image' src={Koala} alt="profile picture"></img>
            <h2 className="card-header">Kabs</h2>
            <p>I am sitting and watching bro code</p>

        </div>
    );
}

export default Card;