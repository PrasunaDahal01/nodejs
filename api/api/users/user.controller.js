const { create } = require("./user.service"); //importing user.service
const { genSaltSync, hashSync } = require("bcrypt"); // for encrypting the passwords
module.exports = {
  createUser: (req, res) => {
    //create one controller called create user
    const body = req.body; //using req.body, whatever user pass will be on body
    const salt = genSaltSync(10); //encrypting the password of users
    body.password = hashSync(body.password, salt); //hash encryption is done in password which is saved on body password
    create(body, (err, result) => {
      //call create service
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
