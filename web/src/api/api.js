import axios from 'axios';

// URL base da API
const URL_API = "http://localhost:5555/api/prompt";

/**
 * Faz uma requisição POST para a API com a mensagem fornecida.
 *
 * @param {Object} message - O objeto contendo a mensagem a ser enviada.
 * @returns {Promise<Object>} - A resposta da API.
 * @throws {Error} - Lança um erro caso a requisição falhe.
 */
export const makeRequest = async (message) => {
  try {
    // Faz a requisição POST e desestrutura os dados da resposta
    const { data } = await axios.post(URL_API, message);
    return data; // Retorna os dados da resposta
  } catch (error) {
    // Lida com erros, exibindo informações no console
    console.error("Erro ao fazer a requisição:", error.message);
    throw error; // Repassa o erro para o chamador lidar
  }
};



// import axios from 'axios';
// const URL_API = "http://localhost:5555/api/prompt"

// export const makeRequest = async (message) =>{
//     const {data} = await axios.post(URL_API, message)
//     return data
// }