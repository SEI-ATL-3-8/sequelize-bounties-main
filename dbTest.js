const { bounty, hunter } = require('./models')
const { Op } = require('sequelize')

// DOESN'T WORK, BUT WORTH A TRY
// class Bounty {
//     constructor(name, wantedFor, reward, captured) {
//         this.name = name,
//         this.wantedFor = wantedFor,
//         this.reward = reward,
//         this.captured = captured
//     }
// }

// class Hunter {
//     constructor(name, client, active) {
//         this.name = name,
//         this.client = client,
//         this.active = active
//     }
// }

// const han = new Bounty('Han Solo', 'Owing money', 500000, false)
// const boba = new Hunter('Boba Fett', 'Jabba the Hut', true)
// const dengar = new Hunter('Dengar', 'Mercurial Swift', false)

// const bounties = [han]
// const hunters = [boba, dengar]

// for(let x of bounties) {
//     // bounty.findOrCreate(x)
//     console.log(x, 'x')
// }

// for(let y of hunters) {
//     // hunter.create(y)
//     console.log(y, 'y')
// }
// ======================================================

// FOR REAL NOW #1-3

// bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing money',
//     reward: 500000,
//     captured: false
// })

// hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hut',
//     active: true
// })
// hunter.findOrCreate({
//     where: {name: 'Dengar'},
//     defaults: {client: 'Mercurial Swift',active: false}
// })

// // #4
// bounty.findAll().then(res => {
//     res.forEach(el => console.log(el.dataValues, '#4'))
// })

// // #5
// hunter.findAll({
//     where: {active: true}
// }).then(res => {
//     res.forEach(el => console.log(el.dataValues, '#5'))
// })

// // #6
// bounty.findOne({
//     where: {name:{[Op.iLike]:'%han%'}}
// }).then(res => {
//     res.update({captured: true})
// })

// #7
// hunter.findOne({
//     where: {
//         name: 'Dengar'
//     }
// }).then(res => res.destroy())

// ASSOCIATIONS
// ========================================

// #1
const numOne = async () => {
    try {
        const x = await bounty.findOne({where:{name:'Han Solo'}})
        const y = await hunter.findOne({where:{name:'Boba Fett'}})
        x.addHunters(y)
    } catch (error) {
        console.log('Error' ,error)
    }
}
numOne().then(res => console.log(res))

// #2
// I finally got #1 to work...I'm tired...goodnight