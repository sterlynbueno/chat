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
    })
}

return (
    <div>
        ChatFeed
    </div>
);
}
export default ChatFeed;


