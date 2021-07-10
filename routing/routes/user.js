const express = require('express');

const router = express.Router();


//path : '/user'
router.get('/', (req, res)=>{
    res.send("<h2>get request for user<h2>");
});

//path : '/user/user-create'
router.post('/user-create', (req, res) => {
    res.send("post request for user");
});

//path : '/user/user-update'
router.put('/user-update', (req, res) => {
    res.send("put request for user");
});

//path : '/user/user-delete'
router.delete('/user-delete', (req, res) => {
    res.send("delete request for user");
});

module.exports = router;