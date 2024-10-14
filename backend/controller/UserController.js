const { user } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const getUserInfo = async (req, res) => {
  try {
    const header = req.headers.authorization;

    const token = header.split(" ")[1];

    const id = verifyToken(token);

    const response = await user.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Not found!",
      });
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const usr = await user.findOne({
      where: {
        username,
      },
    });

    res.status(200).json(usr);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await user.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteUser,
  getUserByUsername,
  getUserInfo,
};
