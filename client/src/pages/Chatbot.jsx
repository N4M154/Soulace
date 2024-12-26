import React, { useState } from "react";
import { Groq } from "groq-sdk";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [inputText, setInputText] = useState(""); // Store user input
  const [conversation, setConversation] = useState([]); // Store chat history
  const [loading, setLoading] = useState(false); // Manage loading state

  // Initialize Groq SDK
  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY, // Replace with your actual API key
    dangerouslyAllowBrowser: true,
  });

  // Handle form submission for chatbot
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputText.trim()) return; // Prevent empty submissions

    setLoading(true);

    // Append user's message to the conversation
    const updatedConversation = [
      ...conversation,
      { role: "user", content: inputText },
    ];

    try {
      // Send message to Groq
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", // Specify the Groq model
        temperature: 0.7,
        max_tokens: 512,
        messages: [
          {
            role: "system",
            content:
              "You are Grok, a helpful chatbot focused on mental health and well-being. Provide complete, thoughtful responses.If the user asks anything outside the bounds of mental health politely reject.",
          },
          ...updatedConversation,
        ],
      });

      // Extract AI response
      const aiResponse =
        chatCompletion.choices[0]?.message?.content || "No response from AI.";

      // Update conversation with AI response
      setConversation([
        ...updatedConversation,
        { role: "assistant", content: aiResponse },
      ]);

      // Clear input field
      setInputText("");
    } catch (error) {
      console.error("Error fetching from Groq:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center py-8 px-4">
      {/* Chatbot Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mb-4">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
          🌱 Chat with Grok
        </h1>

        {/* Chat History */}
        <div
          className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-scroll mb-4"
          style={{ maxHeight: "400px" }}
        >
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg shadow-sm ${
                  message.role === "user"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Form */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message here..."
            rows="4"
            className="w-full p-4 border border-yellow-400 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
