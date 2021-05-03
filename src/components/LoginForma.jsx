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
              <imput type="text" value= {username} onChange={} />
              </form>
              </div>
              </div>
  );  

}