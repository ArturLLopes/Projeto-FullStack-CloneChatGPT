import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

/**
 * Componente principal da aplicação, gerencia a lógica do chat e exibe a interface.
 *
 * @returns {JSX.Element} - A interface do aplicativo.
 */
function App() {
  // Estado para o texto de entrada do usuário
  const [input, setInput] = useState("");

  // Estado para o histórico do chat
  const [chatlog, setChatlog] = useState([
    {
      user: 'gpt',
      message: 'Como posso te ajudar hoje?',
    },
  ]);

  /**
   * Lida com o envio do formulário de entrada do chat.
   *
   * @param {Event} e - Evento de submissão do formulário.
   */
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Faz a solicitação à API com o texto do usuário
      const response = await makeRequest({ prompt: input });

      // Processa a resposta da API em múltiplas linhas de texto
      const formattedResponse = response.data.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ));

      // Atualiza o histórico do chat com a entrada do usuário e a resposta da API
      setChatlog([
        ...chatlog,
        { user: 'me', message: input },
        { user: 'gpt', message: formattedResponse },
      ]);

      // Limpa o campo de entrada
      setInput("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error.message);
    }
  }

  return (
    <div className="App">
      {/* Menu lateral */}
      <SideMenu />

      {/* Área principal do chat */}
      <section className="chatbox">
        {/* Exibe o histórico do chat */}
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        {/* Campo de entrada para enviar mensagens */}
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;



// import { useState } from 'react';

// import './styles/App.css';
// import './styles/reset.css';

// import { makeRequest } from './api/api';
// import { SideMenu } from './components/SideMenu/SideMenu';

// import { ChatMessage } from './components/ChatMessage/ChatMessage';



// function App() {

//   const [input, setInput] = useState("")
//   const [chatlog, setChatlog] = useState([{
//     user: 'gpt',
//     message: 'Como posso te ajudar hoje?'
//   }])

//   async function handleSubmit(e) {
//     e.preventDefault()

//     let response = await makeRequest({prompt: input})

//     response = response.data.split('\n')
//       .map(line => <p>{line}</p>)

//     setChatlog([...chatlog, {
//       user: 'me',
//       message: `${input}`
//     },
//     {
//       user: 'gpt',
//       message: response
//     }
//     ])
//     setInput("")
//   }


//   return (
//     <div className="App">
//       <SideMenu></SideMenu>
//       <section className="chatbox">
//         <div className="chat-log">
//           {chatlog.map((message, index) => (
//             <ChatMessage
//               key={index}
//               message={message}
//             />

//           ))}
//         </div>

//         <div className="chat-input-holder">
//           <form onSubmit={handleSubmit}>
//             <input
//               rows='1'
//               className='chat-input-textarea'
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
