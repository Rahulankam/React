import Koala from "./assets/images/koala.jpg";

function Profile(){
    const koala = "./assets/images/koala.jpg";

    const handleClick = (e) => {
        e.target.style.display = "none"
    }

    return (<img src={Koala} onClick={(e) => handleClick(e)}></img>);
}

export default Profile;