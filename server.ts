import express from "express"
import dotenv from "dotenv"

dotenv.config()



const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
   res.send("CIRCLE APP - API");
});

app.listen(PORT, ()=>{
    console.log("server running in PORT "+ PORT)
})