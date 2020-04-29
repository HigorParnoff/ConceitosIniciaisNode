const User = require('../models/User');
const { userData } = require('../data');

module.exports.getUsers = (req, res) =>{
    res.json(userData);
} ;

module.exports.create = (req, res) =>{
    let data = req.body;
    const newUser = new User(data.name, data.age, data.email);
    userData.push(newUser);
    res.status(201).json(newUser);
}

module.exports.findById = (req, res) =>{
    const {id} = req.params;

    if(userData.length > id){
        res.json(userData[id]);
    }else{
        res.status(400).json({error: "Id not exist"});
    }

}

module.exports.update = (req, res) =>{
    const {userid} = req.params;
    
    if(userData > userid){
        let updateData = req.body;
        let attrs = Object.getOwnPropertyNames(updateData);
    
        for(const attr of attrs){
            userData[userid][attr] = updateData[attr];
        }

        res.status(200).json({userData})
    }else{
        res.status(400).json({error: "Id not exist!"})
    }
}

module.exports.delete =(req, res) =>{
    const {id} = req.params;

    if(userData.length > id){
        userData.splice(id, 1);
        res.json({Log: `UserId ${id} was deleted`})
    }else{
        res.status(400).json({error: "Id not exist"});
    }
}