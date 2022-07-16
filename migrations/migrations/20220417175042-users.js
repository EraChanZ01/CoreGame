const { faker } = require('@faker-js/faker');


const mongoose = require('mongoose')


module.exports = {
  async up(db, client) {
    const users = []
    const category = []
    const brend = []
    const model = []






    for (let i = 0; i < 5; i++) {
      const categoryid = mongoose.Types.ObjectId()
      const brendid = mongoose.Types.ObjectId()
      const randomBrend = faker.company.companyName();
      brend.push({
        "_id": brendid,
        "img": " ",
        "name": randomBrend,
        "categoryName":[{categoryid}] ,
        "email": "test4@mail.ru",
        "createdAt": Date.now(),
      })






      for (let i = 0; i < 1; i++) {
        
        const randomType = faker.company.bsAdjective();
        category.push({
          "_id": categoryid,
          "name": randomType,
        })



        for (let i = 0; i < 2; i++) {
          const modelid = mongoose.Types.ObjectId();
          const randomPrice = faker.finance.amount();
          model.push({
            "_id": modelid,
            "userEmail": "test4@mail.ru",
            "name": "S-510 ",
            "categoryid": categoryid,
            "brendid": brendid,
            "price": randomPrice,
            "info": " Очень крутой телефон",
            "image": "https://robohash.org/".concat(" "),
            "createdAt": Date.now(),
            "updatedAt": Date.now(),
          })

          for (let i = 0; i < 5; i++) {
            const randomName = faker.name.findName();
            const randomEmail = faker.internet.email();
            const randomLastname = faker.name.lastName();
            const randomLokation = faker.address.city();
            const randomPhone = faker.phone.number('+380 066 ### ## ##');
            const randomPassword = faker.internet.password();
            const userid = mongoose.Types.ObjectId()
            users.push({
              "_id": userid,
              "userEmail": randomEmail,
              "firstName": randomName,
              "lastName": randomLastname,
              "role": "user",
              "location": randomLokation,
              "phoneNumber": randomPhone,
              "password": randomPassword,
              "image": "https://robohash.org/".concat("Ruslan"),
              "basket": [{ modelid }],
              "createdAt": Date.now(),
              "updatedAt": Date.now(),

            })


          }

        }
      }
    }


    await db.collection('brends').insertMany(brend)
    await db.collection('models').insertMany(model)
    await db.collection('users').insertMany(users)



    await db.collection('category').insertMany(category)
  },



  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
