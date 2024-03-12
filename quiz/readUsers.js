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

module.exports = router