import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let result = await axios.get('https://Minesweeeper.danielchicchon.repl.co/api/scores')
        res.status(200).json(result.data)

    } else {
        let data = JSON.parse(req.body)
        let result = await axios.post('https://Minesweeeper.danielchicchon.repl.co/api/scores', data)
        console.log("Post Result")
        res.status(200).json(result.data)
    }
}