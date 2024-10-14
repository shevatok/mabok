const { user } = require("../models");
const { decrypt, encrypt } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

const signIn = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const usr = await user.findOne({
      where: {
        username: usernameOrEmail,
      },
    });

    if (!usr) {
      return res.status(404).json({
        success: false,
        message: "Username tidak terdaftar!",
      });
    }

    const decryptedPassword = decrypt(password, usr.password);

    if (!decryptedPassword) {
      return res.status(401).json({
        success: false,
        message: "Password salah!",
      });
    }

    const token = generateToken(usr);

    res.status(200).json({
      success: true,
      accessToken: token,
    });
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { nama_peternak, email, username, password, role } = req.body;

    const encryptedPassword = encrypt(password);

    const newPtr = await user.create({
      name: nama_peternak,
      email,
      username,
      password: encryptedPassword,
      role,
      created_at: new Date(),
    });

    res.status(200).json(newPtr);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
