
const mongoose = require('mongoose')


module.exports = {
  async up(db, client) {
    const users = []
    const category = []
    const brend = []
    const model = []
    const userid = mongoose.Types.ObjectId
    const brendid = mongoose.Types.ObjectId
    const categoryid = mongoose.Types.ObjectId
    const basketid = mongoose.Types.ObjectId
    const modelid = mongoose.Types.ObjectId


    users.push({
      "_id": userid,
      "userEmail": "text@gmail.com",
      "firstName": "Ruslan",
      "lastName": "Kovalev",
      "role": "user",
      "location": "Закарпатская область ",
      "phoneNumber": 0662451556,
      "password": "qwerty123",
      "image": "https://robohash.org/".concat("Ruslan"),
      "basket": [basketid,userid,modelid],
      "createdAt": Date.now(),
      "updatedAt": Date.now(),
    })

    await db.collection('users').insertMany(users)
    brend.push({
      "_id": brendid,
      "name": "Samsung ",
      "createdAt": Date.now(),
    })
    await db.collection('brend').insertMany(brend)
    model.push({
      "_id": modelid,
      "name": "S-510 ",
      "categoryid": categoryid,
      "brendid": brendid,
      "price": 10500,
      "info": " Очень крутой телефон",
      "image": "https://robohash.org/".concat(" "),
      "createdAt": Date.now(),
      "updatedAt": Date.now(),
    })
    await db.collection('model').insertMany(model)
    category.push({
      "_id": categoryid,
      "Type": " ",
    })
    await db.collection('category').insertMany(category)
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
