import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar.js";

/**
 * Componente que exibe uma mensagem de chat, estilizada de acordo com o usuário (GPT ou outro).
 *
 * @param {Object} props - As propriedades recebidas pelo componente.
 * @param {Object} props.message - A mensagem a ser exibida, contendo o texto e o usuário.
 * @param {string} props.message.user - O identificador do usuário (ex.: 'gpt').
 * @param {string} props.message.message - O conteúdo da mensagem.
 */
export const ChatMessage = ({ message }) => {
  const isGptUser = message.user === 'gpt'; // Determina se a mensagem é do GPT

  return (
    <div className={`chat-message ${isGptUser ? "chatgpt" : ""}`}>
      <div className="chat-message-center">
        {/* Avatar, exibido apenas para mensagens do GPT */}
        <div className={`avatar ${isGptUser ? "chatgpt" : ""}`}>
          {isGptUser && <Avatar />}
        </div>

        {/* Texto da mensagem */}
        <div className="message">
          {message.message}
        </div>
      </div>
    </div>
  );
};


// import React from "react";
// import './ChatMessage.css';
// import Avatar from "../../assets/avatar.js";


// export const ChatMessage = ({ message }) => {
//   return( 
//     <div className={
//         `chat-message ${message.user === 'gpt'} && "chatgpt"`}>

//         <div className="chat-message-center">

//             <div className={
//                 `avatar ${message.user === 'gpt' && "chatgpt"}`}>
//                 {message.user === 'gpt' && (<Avatar />)}
//             </div>

//             <div className="message">
//                 {message.message}
//             </div>

//         </div>

//     </div>
//   )  
// }