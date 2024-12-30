import React, { useState } from "react";
import { Groq } from "groq-sdk";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";

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
    <div>
      <Header />
      <div className="min-h-screen bg-white  flex flex-col items-center py-8 px-4">
        {/* Chatbot Header */}
        <div className="bg-teal-800 rounded-lg shadow-lg p-8 w-full max-w-3xl mb-6 flex items-center">
          <img
            src="/chatbot.png"
            alt="SoulMate Chatbot"
            className="rounded-lg mr-8 max-w-sm"
          />
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              SoulMate
            </h1>
            <p className="text-lg text-teal-200 mb-6">
              A safe space to share your thoughts and feelings without judgment, whenever you need it most.
            </p>
          </div>
        </div>

        {/* Chat History */}
        <div className="bg-teal-50 p-4 rounded-lg h-96 overflow-y-scroll mb-6 shadow-md w-full max-w-3xl">
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg shadow-sm animate-fade-in ${
                  message.role === "user"
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message here..."
            rows="4"
            className="w-full p-4 bg-teal-50 border border-teal-400 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-all disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>

        {/* Encouraging Message */}
        <div className="mt-6 bg-teal-100 border border-teal-300 p-4 rounded-lg text-center shadow-sm">
          <p className="text-teal-700 font-semibold">
            Remember, every small step counts. SoulMate is here to help you navigate life's challenges. 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
