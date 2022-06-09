const { faker } = require("@faker-js/faker");

function createRandomUser(page, num) {
  // faker.setLocale("ge");
  const numUser = parseInt(page + num);
  faker.seed(numUser);
  return {
    numUser: numUser,
    userId: faker.database.mongodbObjectId(),
    userName: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    address: {
      city: faker.address.cityName(),
      street: faker.address.streetAddress(true),
    },
  };
}

const getUsers = (req, res, next) => {
  const { page } = req.query;
  try {
    let users = [];
    if (page == 1) {
      for (let i = 0; i < 20; i++) {
        users.push(createRandomUser(page, i));
      }
    } else {
      for (let i = 0; i < 10; i++) {
        users.push(createRandomUser(page, i));
      }
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};

module.exports = { getUsers };
