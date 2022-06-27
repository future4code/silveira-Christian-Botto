import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });