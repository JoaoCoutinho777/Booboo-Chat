import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'

const Chat = () => {
    const chatProps = useMultiChatLogic(import.meta.env.VITE_PROJECT_ID,"testuser","123")
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow 
            {...chatProps} 
            style={{height: "100vh"}}
            renderChatHeader={(chat) => <Header chat={chat}/>} />
    </div>
  )
}

export default Chat