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

// models.hunter.create({name: 'Dengar', client: 'Mercurial Swift', active: false })

// let associateHan = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     let boba = await models.hunter.findOne({
//         where: {
//             name: 'Boba Fett'
//         }
//     })
//     han.addHunter(boba)
// }

// associateHan()

// let lookUpHan = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     const hansHunters = await han.getHunters()
//     console.log(hansHunters)
// }

// lookUpHan()

// let lookUpBoba = async () => {
//     let boba = await models.hunter.findOne({
//         where: {
//             name: 'Boba Fett'
//         }
//     })
//     const bobasBounties = await boba.getBounty()
//     console.log(bobasBounties)
// }

// lookUpBoba()

// let associateHanDengar = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     let dengar = await models.hunter.findOne({
//         where: {
//             name: 'Dengar'
//         }
//     })
//     han.addHunter(dengar)
// }

// associateHanDengar()

// let lookUpHan = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     const hansHunters = await han.getHunters()
//     console.log(hansHunters)
// }

// lookUpHan()

let lookUpDengar = async () => {
    let dengar = await models.hunter.findOne({
        where: {
            name: 'Dengar'
        }
    })
    const dengarsBounties = await dengar.getBounty()
    console.log(dengarsBounties)
}

lookUpDengar()
