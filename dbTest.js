// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

// const models = require('./models')
// models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })

// 1. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true. 

// const models = require('./models')
// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hut',
//     active: true
// })

// 1. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

// const models = require('./models')
// models.sequelize.transaction(function(t) {
//     return models.hunter.findOrCreate({
//         where: {
//             name: 'Dengar',
//             client: 'Mercurial Swift',
//             active: false
//         },
//         transaction: t
//     })
// })

// 1. Find all bounties, assign them to a variable, and console.log them.

// const models = require('./models')
// models.bounty.findAll().then(wanted => {
//     console.log(wanted)
// })

// 1. Find all hunters with active = true, assign them to a variable, and console.log them.

// const models = require('./models')
// models.hunter.findAll({
//     where: {active: true}
// }).then(killer => {
//     console.log(killer)
// })

// 1. Modify Han Solo to have a captured of true.

// const models = require('./models')
// const hanSolo = async () => {
//     try {
//         const caught = await models.bounty.findOne({
//             where: {
//                 name: 'Han Solo'
//             }
//         }) 
//         caught.update({
//             captured: true
//         }) 
//         console.log(caught)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// hanSolo()

// 1. Delete Dengar. Nobody remembers this guy anyway.

// const models = require('./models')
// const byeDengar = async () => {
//     try {
//         const snips = await models.hunter.findOne({
//             where: {
//                 name: 'Dengar'
//             }
//         }) 
//         snips.destroy() 
//         console.log(snips)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// byeDengar()

// Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

// const models = require('./models')
// models.hunter.create({
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false
// })

