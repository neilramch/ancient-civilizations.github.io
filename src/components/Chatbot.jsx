import React, { useState } from "react";
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const systemMessage = {
    role: "system",
    content: "You are a super friendly historian named HistoBot, passionate about history, eager to share knowledge, and always speaking like a true historian. Your responses should be enthusiastic, engaging, and relatively concise unless instructed otherwise. Be funny and congenial but most of all accurate."
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://histopedia-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [systemMessage, ...messages, userMessage] }),
      });

      const botMessage = await response.json();
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-menu">
        <img src="/history-bot.gif" alt="HistoBot" />
        <p>Question? Ask HistoBot</p>
      </div>

      <div className="chat-contents">
        <div className="chat-header">
          <h2>HistoBot</h2>
          <img src="/history-bot.gif" alt="HistoBot" />
        </div>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role === "user" ? "user-message" : "bot-message"}`}>
              <b>{msg.role === "user" ? "You" : "Historian GPT"}:</b> {msg.content}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            className="input-box"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about history..."
          />
          <button className="send-button" onClick={handleSendMessage} disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
