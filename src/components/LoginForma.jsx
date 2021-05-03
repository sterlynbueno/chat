import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

  return(
      <div className ="wrapper">
          <div className="form">
          <h1 className= "title"> chat application </h1>
          <form onSubmit={handleSubmit}>
              <imput type="text" value= {username} onChange={(e) => setUsername(e.target.value)} className="imput" placeholder="Username" required />
              <imput type="password" value= {password} onChange={(e) => setPassword(e.target.value)} className="imput" placeholder="password" required />
              </form>
              </div>
              </div>
  );  

}