const models = require('./models')

// models.bounty.create({name: 'Han Solo', wantedFor: 'Owing money', reware: 500000, captured: false})
// models.hunters.create({name: 'Boba Fett', client: 'Jabba the Hut', active: true})

// models.hunters.findOrCreate({
//     where: {
//         name: 'Dengar', 
//         client: 'Mercurial Swift', 
//         active: false
//     }
// })

// models.bounty.findAll().then(bounty => {
//     bounty.forEach(element => {
//         console.log(element.name);
//     })     
// })

// models.hunters.findAll({
//     where: {
//         active: true
//     }
// }).then(hunter => {
//     hunter.forEach(element => {
//         console.log(element.name);
//     })
// })

// const updateHanSolo = async () => {
//     let hanSolo = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     hanSolo.update({
//         captured: true
//     })
// }

// updateHanSolo()

// const delDengar = async() => {
//     let dengar = await models.hunters.findOne({
//     where: {
//         name: 'Dengar'
//         }
//     })
//     await dengar.destroy()
// }

// delDengar()

// models.hunters.findOrCreate({
//     where: {
//         name: 'Dengar',
//         client: 'Mercurial Swift', 
//         active: false
//     }
// })


// 1-to-many
// foreign key
// hunters
// bountyId
// integer


// const addHuntersToBounty = async () => {
//     let hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' }})
//     let fett = await models.hunters.findOne({ where: { name: 'Boba Fett' }})
//     hanSolo.addHunters(fett)
// }

// addHuntersToBounty()
const addBounty = async () => {
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        const bobaFett = await models.hunters.findOne({ where: { name: 'Boba Fett' } });
        hanSolo.addHunters(bobaFett);
}
addBounty()

const getHunters = async () => {
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        const hunters = await hanSolo.getHunters();
        console.log(hunters)
}
getHunters()

const addDegnar = async () => {
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        const dengar = await models.hunters.findOne({ where: { name: 'Dengar' } });
        hanSolo.addHunters(dengar);
}
addDegnar()

const getDengarBounty = async () => {
        const dengar = await models.hunters.findOne({ where: { name: 'Dengar' } });
        const dengarBounty = await dengar.getBounty();
        console.log(dengarBounty);
}
getDengarBounty()