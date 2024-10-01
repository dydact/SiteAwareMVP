import React from 'react'
import { User } from '../types'

interface ChatProps {
  user: User | null
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  // Existing component logic
  return (
    <div>
      <h1>Chat</h1>
      {/* Rest of the component JSX */}
    </div>
  )
}

export default Chat