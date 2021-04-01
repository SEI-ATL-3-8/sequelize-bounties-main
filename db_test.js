const models = require('./models')
// models.bounty.create({
//   name: 'Han Solo',
//   wantedFor: 'Owing Money',
//   reward: 500000,
//   captured: false
// })

// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hutt',
//     active: true
//   })

  models.hunter.create({
    name: 'Denger',
    client: 'Mercurial Swift',
    active: false
  })


// models.hunter.findAll(
//     {
//         where: {
//             active: true
//         }
//     }).then((rep)=>{
//     // for (let i = 0; i <= rep.length; i++){   
//       console.log(rep.dataValues.name)
// //   }
//   });

// models.bounty.findOne({
//     where: {
//       name: 'Han Solo'
//     }
//   }).then(han => han.update({
//     captured: true
//   })).then(res => console.log(res)
//   )

// models.hunter.destroy({
//     where: {
//         name: 'Denger'
//     }
// }).then();