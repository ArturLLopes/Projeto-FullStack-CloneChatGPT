// Importa o modelo de entrada e a configuração do OpenAI
const InputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  // Método assíncrono para enviar o texto para o OpenAI e obter a resposta
  async sendText(req, res) {
    // Obtém a configuração da API OpenAI
    const openaiAPI = openai.configuration();

    // Cria uma instância do modelo de entrada com os dados da requisição
    const inputModel = new InputPrompt(req.body);

    try {
      // Chama a API OpenAI para criar uma completude de texto com base no modelo de entrada
    //   const response = await openaiAPI.createCompletion(openai.textCompletion(inputModel));
    const response = await openaiAPI.createCompletion(openai.textCompletion({ prompt: inputModel.prompt }));


      // Retorna uma resposta de sucesso com o texto gerado
      return res.status(200).json({
        success: true, 
        data: response.data.choices[0].text, // O texto gerado pela API
      });
    } catch (error) {
      // Em caso de erro, retorna uma resposta de erro com a mensagem adequada
      return res.status(400).json({
        success: false, 
        error: error.response ? error.response.data : "There was an issue on the server", // Mensagem de erro padrão
      });
    }
  },
};



// const InputPrompt = require("../models/input-prompt");
// const openai = require("../config/openai");

// module.exports = {
//     async sendText(req, res) {
//         const openaiAPI = openai.confguration();
//         const inputModel = new InputPrompt(req.body);

//         try {
//             const response = await openaiAPI.createCompletion(openai.textCompletion(inputModel)
//         );
//             return res.status(200).jason({
//                 sucess: true,
//                 data: response.data.choices[0].text
//             })
            
//         } catch (error) {
//             return res.status(400).jason({
//                 sucess: false,
//                 error: error.response ? error.response.data : "there was an inssue on the server"
                
//             })
//         }
//     }
// }