const faker = require("faker");
faker.locale = "id_ID";

const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
const address = `${faker.address.stateAbbr()}, ${faker.address.city()}, ${faker.address.zipCode()}`;
const phone = faker.phone.phoneNumber();
const date = faker.date.between("2021-03-22", "2021-04-10");
const uid = faker.random.alpha({ count: 10, upcase: true });
const username = faker.internet.userName();
console.log(name);
console.log(address);
console.log(phone);
console.log(date);
console.log(uid);
console.log(username);
console.log(new Date());
