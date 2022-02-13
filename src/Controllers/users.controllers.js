const User = require("../Models/user");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(
      {},
      { id: 1, name: 1, address: 1, dob: 1, state: 1, createdAt: 1, _id: 0 }
    ).exec();
    return res.status(200).json({
      users,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

const getSpecificUser = async (req, res, next) => {
  try {
    const user = await User.findOne(
      { id: req.params.id },
      { id: 1, name: 1, address: 1, dob: 1, state: 1, createdAt: 1, _id: 0 }
    ).exec();
    if (user) {
      return res.status(200).json({
        user,
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

const addNewUsers = async (req, res, next) => {
  try {
    const { name, address, dob, state } = req.body;
    if (name && address && dob && state) {
      const lastUser = await User.findOne({}, { id: 1, _id: 0 }).sort({
        id: -1,
      });
      const id = lastUser ? lastUser.id + 1 : 1;
      const user = await User.create({
        id,
        name,
        address,
        dob,
        state,
      });
      return res.status(201).json({
        user,
      });
    } else {
      return res.status(400).json({
        message: "Please enter valid data!",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

const updateUserInfo = async (req, res, next) => {
  try {
    const { name, address, dob, state } = req.body;
    const user = await User.findOne(
      { id: req.params.id },
      { id: 1, name: 1, address: 1, dob: 1, state: 1, createdAt: 1 }
    ).exec();
    if (user) {
      if (name) user.name = name;
      if (address) user.address = address;
      if (dob) user.dob = dob;
      if (state) user.state = state;
      await user.save();
      return res.status(200).json({ user });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { deletedCount } = await User.deleteOne({ id: req.params.id }).exec();
    if (deletedCount) {
      return res.status(200).json({
        message: `Successfully deleted user with id: ${req.params.id}`,
      });
    }
    return res.status(404).json({
      message: "User not found",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

module.exports = {
  getAllUsers,
  getSpecificUser,
  addNewUsers,
  updateUserInfo,
  deleteUser,
};
