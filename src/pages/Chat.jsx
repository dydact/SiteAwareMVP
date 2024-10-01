import React, { useState, useEffect } from 'react';
import TopBanner from '@/components/TopBanner';
import ChatUserList from '@/components/ChatUserList';
import ChatWindow from '@/components/ChatWindow';
import { chatApi } from '@/services/api';

function Chat() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetchMessages(selectedUser.id);
    }
  }, [selectedUser]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await chatApi.getUsers();
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (userId) => {
    try {
      setLoading(true);
      const response = await chatApi.getMessages(userId);
      setMessages(response.data);
    } catch (err) {
      setError('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message) => {
    try {
      await chatApi.sendMessage(selectedUser.id, message);
      fetchMessages(selectedUser.id);
    } catch (err) {
      setError('Failed to send message');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBanner />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Chat</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex space-x-6">
          <ChatUserList 
            users={users} 
            onSelectUser={setSelectedUser} 
            loading={loading}
          />
          {selectedUser && (
            <ChatWindow 
              user={selectedUser} 
              messages={messages} 
              onSendMessage={sendMessage}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Chat;