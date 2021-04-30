importar  MessageForm  from  './MessageForm' ;
importar  MyMessage  from  './MyMessage' ;
importar  TheirMessage  from  './TheirMessage' ;

const  ChatFeed  =  ( props )  =>  {
    const  { chats , activeChat , userName , messages }  =  props ;
  
    const  chat  =  chats  &&  chats[ activeChat ] ;

const renderMessages = () => {
    const keys = object.keys(messages);

    return keys.map((key, index) => {

    })
}

return (
    <div>
        ChatFeed
    </div>
);
}
export default ChatFeed;


