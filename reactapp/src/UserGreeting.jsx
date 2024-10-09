

function UserGreeting(props){
  
        // <div><p>Username: {props.username}</p>
        // <p>IsLogged: {props.islogged ? 'Yes' : 'No'}</p></div>

        return (props.isLogged ? <h2 className="welcome">Welcome {props.username}</h2> :
            <h2 className="alert" >Please log in to continue</h2>
        );
    
}

export default UserGreeting;