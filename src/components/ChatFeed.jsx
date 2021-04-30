import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

importar  MessageForm  from  './MessageForm' ;
importar  MyMessage  from  './MyMessage' ;
importar  TheirMessage  from  './TheirMessage' ;

const  ChatFeed  =  ( props )  =>  {
    const  { chats , activeChat , userName , messages }  =  props ;
  
    const  chat  =  chats  &&  chats[ activeChat ] ;

const renderMessages = () => {
    const keys = object.keys(messages);

    return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message.sender.username;
    
        return (
            <div key={`msg_${index}`} style={{ width: '100%' }}>
              <div className="message-block">
                {
                    isMyMessage
                  ? <MyMessage/>
                  : <TheirMessage/>
                }
                
                 </div>
                  </div>
    })
}

return (
    <div>
        ChatFeed
    </div>
);
}
export default ChatFeed;


