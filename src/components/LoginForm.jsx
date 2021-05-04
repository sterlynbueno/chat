import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "6419cb30-a0fe-4603-988b-8ca547f207ce", 'User-Name': username, 'Use-Secret': password };

try {

await axios.get('https://api.chatengine.io/chats', { headers:authObject });

localStorage.setItem('username', username);
localStorage.setItem('password', password);


window.location.reload();
} catch (error){
    setError('Oops, los datos son incorrectos')
}



    }

  return(
      <div className ="wrapper">
          <div className="form">
          <h1 className= "title"> chat application </h1>
          <form onSubmit={handleSubmit}>
              <imput type="text" value= {username} onChange={(e) => setUsername(e.target.value)} className="imput" placeholder="Username" required />
              <imput type="password" value= {password} onChange={(e) => setPassword(e.target.value)} className="imput" placeholder="password" required />
              
<div align="center">
    <button type="submit" className="button">
        <span>Start Chatting</span>
        </button>
    </div>
<h2  className="error">{error}</h2>
              </form>
              </div>
              </div>
  );  

}

export default LoginForm; // Ojo con el punto y coma