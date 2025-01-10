// Importa a instância da aplicação Express do arquivo 'app'
const app = require("./app");
// Define a porta do servidor, utilizando a variável de ambiente PORT ou 5555 como padrão
const port = process.env.PORT || 5555;

// Inicia o servidor na porta definida e exibe uma mensagem de sucesso no console
app.listen(port, () => {
  // Mensagem que será exibida no console quando o servidor começar a rodar
  console.log(`Server is running on port ${port}`);
});
