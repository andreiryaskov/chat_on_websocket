import React from 'react';

const TextArea = () => {

    // const [message, setMessage] = React.useState("");
    //
    // const [webSocket, setWebSocket] = React.useState(null);
    //
    // let socket
    //
    // React.useEffect(() => {
    //     // Create WebSocket connection.
    //      socket = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    //
    //     // Listen for messages
    //     socket.onmessage = (messageEvent) => {
    //         console.log(messageEvent)
    //     }
    //
    //     setWebSocket(socket)
    //
    // }, [])
    //
    // const onChangeMessage = (e) => {
    //     setMessage(e.currentTarget.value)
    // }

    return (
        <>
            <textarea
                // onChange={onChangeMessage}
            >
                {/*{message}*/}
            </textarea>
        </>
    );
};

export default TextArea;
