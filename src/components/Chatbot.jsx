import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState([]);
  const [typing, setTyping] = useState(false);
///////////////////////////////////////////////////////////////////////////
  function handleBotResponse(input, botChoices) {
    const newMessages = [
      { message: { role: 'user', content: input } }, 
    ];

    for (const choice of botChoices) {
      newMessages.push({
        message: { role: 'assistant', content: choice.message.content },
      });
    }

    return newMessages;
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////
  async function botData(input) {
    const api = 'https://api.openai.com/v1/chat/completions';
    const apiKey = import.meta.env.VITE_API_KEY; 
    setTyping(true);

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          "role": "system",
          "content": "You are a dermatologist specializing in skin health. Please provide expert answers to questions related to skin conditions, skincare routines, common dermatological concerns, and any other topics directly related to skin health. Avoid answering questions unrelated to dermatology or general medical advice. Always prioritize the safety and well-being of the users by recommending a professional medical consultation when necessary. You may ask for additional details to provide more accurate and personalized responses. Use clear and concise language in your explanations to ensure user understanding. Begin each response with a friendly greeting, such as 'Hello' and end with a closing remark, like 'I hope this helps!' or 'Take care!', if a question doesn't have these keywords: skin, acne, pimple, Sunscreen, Hyperpigmentation, Dry Skin, oily skin, Skin Types, face, Dark Circles, pores, don't answer it, and respond that you can only answer questions on skin health. Questions to avoid answering include keywords: hair, Psoriasis, food, sports."
        }
        ,
        {
          role: 'user',
          content: input,
        },
      ],
      max_tokens: 300, 
      temperature: 0.1, 
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    };
    
    const response = await fetch(api, requestOptions);
    const bot = await response.json();
    console.log(bot);

    const newMessages = handleBotResponse(input, bot.choices);
    setMsg((prevMessages) => [...prevMessages, ...newMessages]);
    setTyping(false);

  }

  ////////////////////////////////////////////////////////handlechange//////////////////////////////////////////////////
  function handlechange(e){
    setInput(e.target.value)
    
  }

  ///////////////////////////////////////////////////////handleSubmit//////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    botData(input);
    setInput(''); 
  };
  

///////////////////////////////////////////////////mapping,input & button///////////////////////////////////////////////////////

  return (
    
    <div className="con">
      <header className="bot">ChatBot</header>
      <div className="message-container">
      {msg.map((item, i) => (
        <div className="resp" key={i}>
        {item.message.role === 'assistant' ? (
      <p> <span style={{ color: 'red' }}>Assistant:</span> {item.message.content}</p>
      ) : (
      <p><span style={{ color: 'green' }}>User:</span> {item.message.content}</p>
      )}
      
    </div>
      ))}
      <div></div>
        {typing && <p><span style={{ color: 'red' }}>Assitant:</span> Typing...</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            value={input}
            onChange={handlechange}
            placeholder="Enter your message"
            type="text"
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
      }














// return (
//   <div className="con">
//     <header className="bot">ChatBot</header>
//     <div>
//     {msg.map((item, i) => (
//     <div key={i}>
//         {item.message.role === 'assistant' && <p>{item.message.content}</p>}
//         {item.message.role === 'user' && <p>User: {item.message.content}</p>}
//     </div>
//     ))}
//     </div>
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <input
//           value={input}
//           onChange={handlechange}
//           placeholder="Enter your message"
//           type="text"
//         />
//         <button type="submit">Send</button>
//       </div>
//     </form>
//   </div>
// );


