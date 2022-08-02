import React from 'react';
import s from "./components/User/User.module.css";
import './App.css';

const App = () => {
    console.log('rerender')

    let messageBlockRef = React.useRef();
    const [messageText, setMessageText] = React.useState("");
    const [ws, setWS] = React.useState(null);
    const [users, setUsers] = React.useState([]);

    if (ws) {
        ws.onmessage = (messageEvent) => {
            let messages = JSON.parse(messageEvent.data)
            console.log(messages)
            setUsers([...users, ...messages])
            messageBlockRef.current.scrollTo(0, messageBlockRef.current.scrollHeight)
        }
    }


    React.useEffect(() => {
        console.log('Use effect')
        let localWS = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

        setWS(localWS)

    }, [])

    const onChangeMessage = (e) => {
        setMessageText(e.currentTarget.value)
    }

    const sendMessage = () => {
        ws.send(messageText)
        setMessageText("")
    }


    return (
        <>
            <div ref={messageBlockRef} className="App">
                {
                    users.map((u, i) => {
                        return (
                            <div className={s.user_wrapper} key={i}>
                                <div className={s.user_img}>
                                    <img src={u.photo}
                                         alt={"user"}/>
                                </div>
                                <b>{u.name}</b>
                                <span>{u.message}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <textarea onChange={onChangeMessage} value={messageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default App;
