const models = require('./models/')

1. 
// models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: '500000',
//     captured: false
// })
2.
// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hut',
//     active: true
// })
3.
// models.hunter.findOrCreate({where:{
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false
//     }
// })
4. 
// Find all bounties, assign them to a 
// variable, and console.log them.
// let findBounties = async () => {
//     try {
//         let bounties = await models.bounty.findAll()
//         console.log(bounties)
//     } catch (error) {
//         console.log(error)
//     }
// }
// findBounties()
5.
// let trueHunters = async () => {
//     try {
//         let hunters = await models.hunter.findAll()
//         for(let hunt of hunters){
//             if(hunt.active === true){
//                 console.log(hunt.name)
//             } 
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// trueHunters()
6.
// let updateHan = async () => {
//     try {
//         let han = await models.bounty.findOne({
//             where: {
//                 name: 'Han Solo'
//             }
//         })
//         han.update({
//             captured: true
//         })
//     } catch (error) {
//         console.log('error')
//     }
// }
// updateHan()
7.
// let deleteDengar = async () => {
//     try {
//         let den = await models.hunter.findOne({
//             where: {
//                 name: 'Dengar'
//             }
//         })
//         den.destroy()
//     } catch (error) {
//         console.log('error')
//     }
// }
// deleteDengar()
8.
// models.hunter.create({
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false
// })