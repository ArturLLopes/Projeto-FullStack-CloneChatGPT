// Importa as bibliotecas necessárias
const { Configuration, OpenAIApi } = require('openai');
require("dotenv").config();

// Classe responsável pela integração com a API OpenAI
module.exports = class OpenAI {
  
  // Método para configurar e retornar a instância da API
  static configuration() {
    // Configura a chave da API a partir do ambiente
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY, // A chave da API é obtida das variáveis de ambiente
    });

    // Retorna a instância da API OpenAI configurada
    return new OpenAIApi(configuration);
  }



  // Método para configurar a requisição de geração de texto
  static textCompletion({ prompt }) {
    // Retorna a configuração para a requisição de texto completado
    return {
      model: "gpt-4o", // Modelo de linguagem a ser utilizado
      prompt:`${prompt}`, // O prompt de entrada é passado diretamente
      temperature: 0, // Define a criatividade da resposta (0 para respostas mais previsíveis)
      max_tokens: 3500, // Limita o número de tokens na resposta
      top_p: 1, // Controla a diversidade do modelo
      frequency_penalty: 0.5, // Penaliza repetições de palavras ou frases
      presence_penalty: 0, // Penaliza a presença de palavras já vistas no texto
    };
  }
};






// const { Configuration, OpenAIApi } = require('openai')
// require("dotenv").config()

// module.exports = class openai{

// 	static configuration(){
// 		const configuration = new Configuration({
// 			apiKey: process.env.OPENAI_API_KEY,
// 		})

// 		return new OpenAIApi(configuration)
// 	}

// 	static textCompletion ({prompt}) {
//     return 	{
// 			model:"gpt-4o-mini",
// 			prompt:`${prompt}`,
// 			temperature:0,
// 			max_tokens: 3500,
// 			top_p:1,
// 			frequency_penalty: 0.5,
// 			presence_penalty: 0
// 		}
//   }
// }



// import { Configuration, OpenAIApi } from "openai";


// module.exports = class openai {
//     static confguration(){
//         const configuration = new Configuration({
//             apiKey: process.env.OPENAI_API_KEY,
//         })
//         return new OpenAIApi(configuration);
//     }

//     static textCompletion({prompt}){
//         return{
// model: "gpt-4o-mini",
// prompt: `${prompt}`,
// temperature: 0,
// max_completion_tokens: 3500,
// top_p: 1,
// frequency_penalty: 0.5,
// presence_penalty: 0
//         }
//     }
// }


// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const response = await openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   messages: [],
//   response_format: {
//     "type": "text"
//   },
//   temperature: 0.9,
//   max_completion_tokens: 2048,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0
// });