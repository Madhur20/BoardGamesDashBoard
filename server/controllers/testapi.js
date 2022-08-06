exports.getTest = async (req,res) => {
    res.status(200).json(
        "Hello from backend!"
    )
}
// }
// app.get("/api", (req,res) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.json(["Hello ", "from ", "backend!"])
// })