import React, { useState } from "react";
import OpenAI from "openai";
import './Chatbot.css';
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ 
  apiKey: apiKey, 
  dangerouslyAllowBrowser: true 
});

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const systemMessage = {
    role: "system",
    content: "You are a super friendly historian, passionate about history, eager to share knowledge, and always speaking like a true historian. Your responses should be enthusiastic, engaging, and relatively concise unless instructed otherwise. Be funny and congenial but most of all accurate."
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [systemMessage, ...messages, userMessage],
      });

      const botMessage = completion.choices[0].message;
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
        <img src="history-bot.gif" />
        <p>Question? Ask HistoBot</p>
      </div>

    <div className="chat-contents">
        <div className="chat-header">
          <h2>HistoBot</h2>
          <img src="/history-bot.gif" />
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
