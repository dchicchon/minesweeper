import axios from "axios";

export default async function handler(req, res) {
    let { command } = JSON.parse(req.body)
    let result = await axios.post('https://Minesweeeper.danielchicchon.repl.co/api/commands', { command })
    console.log("Post Result")
    res.status(200).json(result.data)
}