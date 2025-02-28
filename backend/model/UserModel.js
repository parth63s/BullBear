const { model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const { userSchema } = require("../schemas/UserSchema");

userSchema.plugin(passportLocalMongoose);

const  UserModel  = new model("User", userSchema);

module.exports =  UserModel;