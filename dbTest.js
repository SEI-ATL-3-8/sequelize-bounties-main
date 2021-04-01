const models = require('./models/')

// models.bounty.create({name: 'Han Solo', wantedFor: 'Owing Money', reward: '500000', captured:false})

// models.hunter.create({name: 'Boba Fett', client: 'Jabba the Hut', active: true })

// models.hunter.create({name: 'Dengar', client: 'Mercurial Swift', active: false })

// models.bounty.findAll().then(allBounties => {
//     allBounties.forEach(bounty => {
//         const job = bounty.dataValues
//         console.log(job)
//     })
// })

// models.hunter.findAll().then(allHunters => {
//     allHunters.forEach(hunter => {
//         if(hunter.dataValues.active === true){
//         const activeHunter = hunter.dataValues
//         console.log(activeHunter)
//         }
//     })
// })

// let updateHan = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     han.update({
//         captured: true
//     })
// }

// updateHan()

// let deleteDengar = async () => {
//     let dengar = await models.hunter.destroy({
//         where: {
//             name: 'Dengar'
//         }
//     })
// }

// deleteDengar()
// 

models.hunter.create({name: 'Dengar', client: 'Mercurial Swift', active: false })