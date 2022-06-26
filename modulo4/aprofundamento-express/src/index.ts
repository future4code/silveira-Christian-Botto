import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

// 1 - 

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

// 2 -
