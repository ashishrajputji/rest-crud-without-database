import express from 'express';
import bodyParser  from 'body-parser';

import Userrouter from './routes/users.js';

const app = express();

app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     res.send('Hello There ');
// })
app.use('/users', Userrouter);

app.listen(5000, ()=> console.log('Server is running on port 5000'));
