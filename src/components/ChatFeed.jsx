importar  MessageForm  from  './MessageForm' ;
importar  MyMessage  from  './MyMessage' ;
importar  TheirMessage  from  './TheirMessage' ;

const  ChatFeed  =  ( props )  =>  {
    const  { chats , activeChat , userName , messages }  =  props ;
  
    const  chat  =  chats  &&  chats [ activeChat ] ;

return (
    <div>
        ChatFeed
    </div>
);
}
export default ChatFeed;


