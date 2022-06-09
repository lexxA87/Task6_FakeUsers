const { faker } = require("@faker-js/faker");

function createRandomUser(num) {
  return {
    num: num,
    userId: faker.database.mongodbObjectId(),
    username: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    address: {
      city: faker.address.cityName(),
      street: faker.address.streetAddress(true),
    },
  };
}

const getUsers = (req, res, next) => {
  try {
    let users = [];
    for (let i = 0; i < 10; i++) {
      users.push(createRandomUser(i + 1));
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};

module.exports = { getUsers };
