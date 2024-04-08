const userRepository = require('../repositories/userRepository');

exports.createUser = async (req, res) => {
  try{
    const user = await userRepository.create(req.body);
    res.status(201).json(user);
  } catch(error){
    res.status(400).json({message: error.message});
  }
};


exports.getAllUsers = async (req, res) => {
  try{
    const users = await userRepository.findAll();
    res.json(users);
  } catch(error){
    res.status(400).json({message: error.message});
  }
};

exports.getUserById = async (req, res) => {
  try{
    const user = await userRepository.findById(req.params.id);
    res.json(user);
  } catch(error){
    res.status(400).json({message: error.message});
  }
};

exports.updateUser = async (req, res) => {
  try{
    const user = await userRepository.update(req.params.id, req.body);
    res.json(user);
  } catch(error){
    res.status(400).json({message: error.message});
  }
};

exports.deleteUser = async (req, res) => {
  try{
    const user = await userRepository.delete(req.params.id);
    res.json(user);
  } catch(error){
    res.status(400).json({message: error.message});
  }
};

