const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    let usernames = req.users;
    res.send(usernames);
  });

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    console.log("inside get");
    let username =req.params.name;
    let data=req.users.filter(function(user){
      return user.name === username;
    });
    console.log(data);
    if(data.length==0){
      res.status(404).send('User not found');
    } 
    else{
     res.json(data);
    }
  });

module.exports = router