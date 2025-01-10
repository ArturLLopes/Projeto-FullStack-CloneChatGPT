import React from "react";
import './SideMenu.css';

/**
 * Componente que exibe o menu lateral com a opção de iniciar um novo chat.
 *
 * @returns {JSX.Element} - O menu lateral renderizado.
 */
export const SideMenu = () => {
  return (
    <aside className="sidemenu">
      {/* Botão para criar um novo chat */}
      <div className="sidemenu-button">
        <span>+</span>
        Novo chat
      </div>
    </aside>
  );
};


// import React from "react";
// import './SideMenu.css';

// export const SideMenu = () => {
//     return (
//         <aside className="sidemenu">
//             <div className="sidemenu-button">
//                 <span>+</span>
//                 Novo chat
//             </div>    
//         </aside>
//     );
// }