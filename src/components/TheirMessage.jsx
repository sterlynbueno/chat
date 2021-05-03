const TheirMessage = ({ lastMessage, message }) => {
const isFirstMessaByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className="message-row">
            {isFirstMessageByUser && (

<div
className="message-avatar"
style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
/>
            )}
        </div>
    );
}

export default TheirMessage;