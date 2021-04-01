const models = require('./models/')

// #1
//models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })
//#2
// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hut',
//     active: true
// })
//#3
// models.hunter.create({
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false
// })

//#4
// const allBounty = async() => {
//     let bounty = await models.bounty.findAll()
//     console.log(bounty)
// }
// allBounty()

//#5
// const allHunter = async() => {
//     try{
//         const activeHunters = await models.hunter.findAll({
//             where: {active:true}
//         })
//         console.log(activeHunters)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// allHunter()

//6
// let capturedHan = async () => {
//       let Han = await models.bounty.findOne({
//         where: {name: 'Han Solo'}
//       })
//       console.log(Han)
//       Han.update({
//         captured:true
//       })
//       console.log(Han)
//     }
//     capturedHan()
//7
// async function deleteDengar () {
//     try {

//     const destroyDengar = await models.hunter.destroy({
//         where: {
//             name: "Dengar"
//         }
//     })
//     console.log(destroyDengar)
//     }catch(error){
//      console.log(error.message)
//     }
// }
// deleteDengar()

//#8

// models.hunter.create({
//         name: 'Dengar',
//         client: 'Mercurial Swift',
//         active: false
//     })
//3
//4
