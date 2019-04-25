module.exports = async function (db) {
    await db.sequelize.sync({force: true});
  
    await db.user.bulkCreate([
        {
            email: "dasha@yandex.by",
            password: "$2a$10$n2u6foCUDrJp3oDD57k56eH3n.kR2nyt8BOJ81JG6ONWMfR.eCHOO", //pass1
            codes: "[12345,54321,44444,21543]"
        }
    ]);
  };