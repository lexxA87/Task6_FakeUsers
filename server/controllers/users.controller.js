const { faker } = require("@faker-js/faker");
const anbani = require("anbani");

function createRandomUser(page, num, lang = "en_US") {
  faker.setLocale(lang);
  const numUser = parseInt(page + num);
  faker.seed(numUser);
  return {
    numUser: numUser,
    userId: faker.database.mongodbObjectId(),
    userName:
      lang == "ge"
        ? // ? anbani.core.interpret(faker.name.findName(), "mkhedruli")
          anbani.lorem.names(1)
        : faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    address: {
      city: faker.address.cityName(),
      street: faker.address.streetAddress(true),
    },
  };
}

const getUsers = (req, res, next) => {
  const { page } = req.query;
  const { lang } = req.query;
  try {
    let users = [];
    if (page == 1) {
      for (let i = 0; i < 20; i++) {
        users.push(createRandomUser(page, i, lang));
      }
    } else {
      for (let i = 0; i < 10; i++) {
        users.push(createRandomUser(page, i, lang));
      }
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error" });
  }
};

module.exports = { getUsers };
