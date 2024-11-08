import asyncHandler from 'express-async-handler'
import User from "../model/UserModel"

// Display list of all Users.
exports.UsersControllers = asyncHandler(async (req, res, next) => {
  try {
      const users = await User.find();
      if (users.length ===0) {
          return res.status(404).json({message: "User Not Found."});
      }
      res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: "Internal Server error."});
  }
});
// Display list of all Authors.
exports.CreateControllers = asyncHandler(async (req, res, next) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;
        // Email exist
        const userExist = await User.findOne({email});
        if(userExist){
          return res.status(400).json({message: "User already exists."})
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    } catch (error) {
       res.status(500).json({error: "Internal Server error"});
    }
  });

  // Display list of all Update.
exports.UpdateControllers = asyncHandler(async (req, res, next) => {
  try {
     const id = req.params.id;
     const userExist = await User.findOne({_id:id})
     if (!userExist){
       return res.status(404).json({message: "User Not Found."})
     }
     const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true})
     res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({error: "Internal Server error."});
  }
});

// Display list of all Delete.
exports.DeleteControllers = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({_id:id})
    if (!userExist){
      return res.status(404).json({message: "User Not Found."})
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({message: "User deleted successfully."})
  } catch (error) {
    res.status(500).json({error: "Internal Server error."});
  }

});