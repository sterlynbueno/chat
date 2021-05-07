import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './src/components/ChatFeed';
import LoginForm from './src/components/LoginForm';
import './App.css';

const projectID = 'c2c0514f-07f1-497c-acc4-a77b945731ad';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
      