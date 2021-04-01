const models = require('./models');
const hunter = require('./models/hunter');

// models.bounty.create({
//   name: 'Han Solo',
//   wantedFor: 'Owing Money',
//   reward: 500000,
//   captured: false
// })

// models.hunter.create({
//   name: 'Boba Fett',
//   client: 'Jabba the Hutt',
//   active: true
// })

models.hunter.findOrCreate({
  where: {
    name: 'Dengar',
    client: 'Mercurial Swift',
    active: true
  }
})

const findBounties = async () => {
  const bounties = await models.bounty.findAll()
  console.log(bounties);
}

// findBounties()


// models.hunter.findAll({
//   where: {
//     active: true
//   }
// }).then(res => {
//   console.log(res);
// })

// models.hunter.findAll().then(allHunters => {
//   for (hunter of allHunters) {
//     if (hunter.active === true) {
//       console.log(hunter);
//     }
//   }
// })

const editHan = async () => {
  const han = await models.bounty.findOne({
    where: {
      name: 'Han Solo'
    }
  })

  han.update({
    captured: true
  })

  // models.bounty.update({
  //   captured: true
  // }, {
  //   where: {
  //     name: 'Han Solo'
  //   }
  // })
}
// editHan()


// const deleteDengar = async () => {
//   const dengar = await models.hunter.findOne({
//     where: {
//       name: 'Dengar'
//     }
//   })

//   dengar.destroy()
// }
// deleteDengar()

// this approach will only delete one
// models.hunter.findOne({
//   where: {
//     name: 'Dengar'
//   }
// }).then(dengar => {
//   dengar.destroy()
//   this generates: DELETE FROM hunters WHERE id = <dengar's id>
// })


// this will delete every hunter with a name of Dengar
// models.hunter.destroy({
//   where: {
//     name: 'Dengar'
//   }
// })
// this generates: DELETE FROM hunters WHERE name = 'Dengar'



const associateHanAndBoba = async () => {
  const han = await models.bounty.findOne({
    where: {
      name: 'Han Solo'
    }
  })

  const boba = await models.hunter.findOne({
    where: {
      name: 'Boba Fett'
    }
  })


  // boba.setBounty(han)
  han.addHunter(boba)
}

// associateHanAndBoba()



const getHansHunters = async () => {
  const han = await models.bounty.findOne({
    where: {
      name: 'Han Solo'
    }
  })

  const hansHunters = await han.getHunters()

  console.log(hansHunters)
}
getHansHunters()

