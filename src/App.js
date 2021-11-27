
import { useState } from 'react';
import './App.css';

const App = () => {

  const [users, setUser] = useState([]);

  const loadUsers = async () => {
    console.log('before ')
    const responce = await fetch("https://reqres.in/api/users?page=1");

    const jasonResponce = await responce.json();

    console.log(jasonResponce);

    setUser(jasonResponce.data);

  }

  const loadUsersa = async () => {
    console.log('Another Responce');
    const responce1 = await fetch("https://reqres.in/api/users?page=1");
    const jasonResponce1 = await responce1.json();
    console.log(jasonResponce1);
    setUser(jasonResponce1.data);
  }



  return (
    <div className="App">
      <header>
       
          <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
           
          </div>
          <h1>Task 2: Create React App</h1>
       
        <h2>Click On Button For Get The User Data</h2>
        <button type="button" className="btn" onClick={loadUsers}>GET USERS</button>


        </header>
      
      <div className="container">
        {users.map(({ avatar, email, first_name, id, last_name }) => (
          <div className="img">
          <ul className="uli">
            <li id="key">{id}</li>
            <img src={avatar}></img>
            <li id="name">{first_name}{last_name}</li>
            <li >{email}</li>
          </ul>
          </div>

        )

        )}
      </div>
      

    </div >

  );
}

export default App;
