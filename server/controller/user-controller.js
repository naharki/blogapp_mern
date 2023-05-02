import User from '../model/user.js';
import bcrypt from 'bcrypt';

export const signupUser = async (request, response) => {
  try {
    //append random character before hash password as, 
//    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(request.body.password, 10);
    const user = {username: request.body.username, name: request.body.name, password: hashPassword}
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "Signup Successfull"});
  } catch (error) {
    return response.status(500).json({msg: "Error while signup the user"});
  }
};
