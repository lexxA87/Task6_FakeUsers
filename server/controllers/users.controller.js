const { faker } = require("@faker-js/faker");
const anbani = require("anbani");

function createRandomUser(page = "1", num, lang = "en_US", seed = "0") {
  faker.setLocale(lang);
  const numUser = parseInt(page + seed + num);
  faker.seed(numUser);
  return {
    numUser: numUser,
    userId: faker.database.mongodbObjectId(),
    userName: lang == "ge" ? anbani.lorem.names(1) : faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    address:
      faker.address.cityName() + ", " + faker.address.streetAddress(true),
  };
}

const getUsers = (req, res, next) => {
  const { page, lang, seed, feed } = req.query;
  try {
    let users = [];

    for (let i = 0; i < feed; i++) {
      users.push(createRandomUser(page, i, lang, seed));
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};

module.exports = { getUsers };
