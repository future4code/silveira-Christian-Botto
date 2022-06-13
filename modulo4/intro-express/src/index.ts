import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


// 1-
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

// 2-
type user = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

// 3-

const users: user[] = [
    {
        id: 11111111,
        name: "Fulano",
        email: "jfulano@hotmail.com",
        phone: "1111111",
        website: "www.fulano.com"
    },
    {
        id: 11111112,
        name: "Ciclano",
        email: "ciclano@hotmail.com",
        phone: "222222222",
        website: "www.ciclano.com"
    }
]

// 4 - 

app.post("/users", (req, res) => {
    const getUsers = parseInt(req.body)
    res.send(getUsers)
})

// 5 -

type post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// 6 - 

const posts: post[] = [
    {
        id: 1,
        title: "1",
        body: "Post 1",
        userId: 11111111
    },
    {
        id: 2,
        title: "2",
        body: "Post 2t",
        userId: 11111112
    }
]

// 7 -

app.post("/posts/:id", (req, res) => {
const getPost = posts.map(post => post.id === parseInt(req.params.id))
res.send(getPost)
})

// 8 -

app.post("/users/:id", (req, res) => {
    const getUsers = users.map(user => user.id === parseInt(req.params.id))
    res.send(getUsers)
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});