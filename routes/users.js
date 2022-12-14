import express from 'express';
import { v4 as uuidv4}  from 'uuid';

const router = express.Router();

let users = [
    // {
    //     "firstName": "John",
    //     "lastName" : "Doe",
    //     "age": 25
    // },
    // {
    //     firstName : "Ashish",
    //     lastName : 'Rajput',
    //     age : 22
    // }
]

// Route for get /user route
router.get('/', (req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
   const user = req.body;
//    const userId = uuidv4();

//    const userWithId = {...user, id: uuidv4()};

    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database!`);

});

router.get('/:id',(req,res)=>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send('The get user by id route' + foundUser);
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;


    users = users.filter((user)=> user.id !== id);

    res.send('User with id '+ id + 'deleted from database');

});

router.patch('/:id',(req,res)=>{
    const id = req.params.id;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`The user with ${id} has been Updated`);
})

export default router;