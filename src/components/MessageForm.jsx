const MessageForm = ({ message }) => {
    if(message?.attachments?.length > 0){
return (
    <img
    src={message.attachments[0].file}
    alt="message-attachment"
    className="message-image"
    style={{float:'right'}}
    />
)

    }
    return(
        <div className="message" style={{float: 'right', marginRight: '128px', color: 'white' , backgroundColor: '#3B2A50' }}>
            {Message.text}
        </div>
    );
}

export default MessageForm;
