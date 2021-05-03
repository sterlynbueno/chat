import { ChatEngine } from 'react-chat-engine';


import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm /> //Return Login form in case that you are not registered
    
  return (
    <ChatEngine
      height="100vh"
      projectID="6419cb30-a0fe-4603-988b-8ca547f207ce"
      userName="javascriptmastery"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     
    />
  );
};


export default App;
      