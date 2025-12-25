import express from 'express'
import cors from 'cors'
// import myDBConnection from './db/db.js'
import myUserRouters from './routes/user.routes.js';

const myApp = express();
myApp.use(express.json())
myApp.use(cors({
  origin : 'http://localhost:5173/',
  methods : ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true
}))
import myDBConnection from './db/db.js'
// myDBConnection()
myDBConnection()
myApp.use("/user", myUserRouters)


myApp.listen(3400, ()=>{
  console.log('myApp is listening at port 3400.');
  
})