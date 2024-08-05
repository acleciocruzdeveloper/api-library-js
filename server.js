import "dotenv/config"
import app from "./src/app.js";

const PORT = 3000

const rotas = {
    "/": "Curos de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Rota autores"
}
app.listen(PORT, () => {
    console.log("servidor escutando!")
});