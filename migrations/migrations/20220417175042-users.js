
const mongoose = require('mongoose')


module.exports = {
  async up(db, client) {
    const users = []
    const userid = mongoose.Types.ObjectId
    users.push({
          "_id" : userid,
          "email" : "text@gmail.com",
          "firstName" : "Ruslan",
          "lastName" : "Kovalev",
          "role" : "user",
          "password" : "qwerty123",
          "image" : "https://robohash.org/".concat("Ruslan"),
          "createdAt": Date.now(),
          "updatedAt": Date.now(),
        })
        const brend = {
          "_id" : mongoose.Types.ObjectId,
          "userid": userid
        }
    await db.collection('users').insertMany(users)

  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
