const { PrismaClient } = require("@prisma/client");
const {
  hashPassword,
  checkPassword,
} = require("../passwordManager/hash&checkpassword");
const { getToken } = require("../passwordManager/tokengenerator");
const { errorHandler } = require("../middlewares/errorhandler");

const { user } = new PrismaClient();

const addUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashpass = await hashPassword(password);
    const data = await user.create({
      data: {
        username,
        email,
        password: hashpass,
        role,
      },
      select: {
        id: true,
        username: true,
        role: true,
        email: true,
      },
    });
    const token = getToken(data);
    res.json({
      user: data,
      token,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const checkuser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await user.findMany({
      where: { OR: [{ username }, { email: username }] },
    });
    if (!isUser || isUser.length == 0) {
      res.status(404).json({
        msg: "No user with Username Or Email",
      });
      return;
    }
    const checkpass = await checkPassword(password, isUser[0].password);
    if (!checkpass) {
      return res.status(404).json({
        msg: "Password Incorrect",
      });
    }

    delete isUser[0].password;
    const token = getToken(isUser[0]);

    res.json({
      status: true,
      user : isUser[0],
      token,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};


module.exports = { addUser, checkuser };
