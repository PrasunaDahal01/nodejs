const pool = require("../../config/database");

// to import in other files like controller
module.exports = {
  create: (data, callBack) => {
    //receive data from controller
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)`, //registration in table name
      [
        data.first_name, //these values replaces the questionmark above
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
