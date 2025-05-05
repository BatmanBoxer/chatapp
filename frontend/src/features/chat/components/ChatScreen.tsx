import { useState, useEffect, useRef, useCallback } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import { chat } from "../../../proto/chat";
import { useGetChats } from "../hooks/useGetChats";

interface MainChatScreenProps {
  chatRoomId: string;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function MainChatScreen({ chatRoomId }: MainChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const { isSuccess, data: chats = [] } = useGetChats(chatRoomId)

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isSuccess && chats.length > 0) {
      const storedMessages: Message[] = chats.map((chat) => ({
        id: parseInt(chat.id),
        text: chat.message,
        isUser: false
      }));
      setMessages(storedMessages.reverse());
    }
  }, [isSuccess]);

  //this should be in protobuf . fix that darwin
  const handleIncomingMessage = useCallback((message: chat.ChatMessage) => {
    const newMessage: Message = {
      id: Date.now(),
      text: message.content,
      isUser: false
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);


  const { sendMessage: sendSocketMessage } = useWebSocket(chatRoomId, handleIncomingMessage);

  const sendMessage = () => {
    if (inputMessage.trim() === '') {
      return;
    }
    console.log("reacher here")
    const message = new chat.ChatMessage({
      type: chat.MessageType.TEXT,
      content: inputMessage.trim(),
      user_id: "Darwin",
      timestamp: Date.now(),
    })
    sendSocketMessage(message);

    setInputMessage("")
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, [messages]);

  return (
    <div className="flex-10/12 flex flex-col bg-gray-900 max-h-screen">
      {/* Header */}
      <div className="p-4 bg-gray-800 text-white text-lg font-semibold">
        Chatting with: {chatRoomId}
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 max-h-[calc(100vh-150px)]">
        {messages.map((message) => {
          console.log(message)
          return (<div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`${message.isUser ? 'bg-blue-700' : 'bg-gray-700'
                } text-white p-2 rounded-lg max-w-xs`}            >
              {message.text}
            </div>
            <div ref={messagesEndRef}></div>
          </div>)
        })}
      </div>

      {/* Message Input */}
      <div className="p-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full"
        ><div ref={messagesEndRef} />
          Send
        </button>
      </div>

    </div>
  );
}
