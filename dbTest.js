const models = require('./models')

// models.bounties.create({
//   name: 'Invisible Man',
//   wantedFor: 'Public Indecency',
//   reward: 2000,
//   captured: false
// })

// models.bounties.create({
//   name: 'Han Solo',
//   wantedFor: 'Owing Money',
//   reward: 500000,
//   captured: false
// })

// models.hunters.create({
//   name: 'Boba Fett',
//   client: 'Jabba the Hutt',
//   active: true
// })

models.hunters.create({
  name: 'Dengar',
  client: 'Mercurial Swift',
  active: false
})
var bounties

models.bounties.findAll().then(res => {
    bounties = res;
    // console.log(bounties);
})

var activeHunters

models.hunters.findAll({
    where: {
        active: true
    }
}).then(res => {
    activeHunters =  res;
    // console.log(activeHunters);
})

let updateHan = async () => {
    let han = await models.bounties.findOne({
        where: {
            name: 'Han Solo'
        }
    })
    han.update({
        captured: true
    })
    // console.log(han)
}
// updateHan()

let removeDengar = async () => {
    let den = await models.hunters.findOne({
        where: {
            name: 'Dengar'
        }
    })
    den.destroy();
}
// removeDengar();


