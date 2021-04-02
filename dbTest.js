const models = require('./models')

// models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })

// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hutt',
//     active: true
// })

// models.hunter.findOrCreate({
//     where: {
//         name: 'Dengar',
//         client: 'Mercurial Swift',
//         active: false
//     }
// })

// const findBounties = async() => {
//     const bounties = await models.bounty.findAll()
//     console.log(bounties)
// }

// findBounties()

// models.hunter.findAll({
//     where: {
//         active: true
//     }
// }).then(res => {
//     console.log(res);
// })

// const editHan = async () => {
//     const han = await models.bounty.findOne
//     ({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     han.update ({
//         captured: true
//     })
// }

// editHan()

// const deleteDengar = async () => {
//     const dengar = await models.hunter.findOne({
//         where: {
//             name: 'Dengar'
//         }
//     })

//     dengar.destroy()
// }

// deleteDengar()


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

    boba.setBounty(han)
    han.addHunter(boba)
}

associateHanAndBoba()


const getHansHunters = async () => {
    const han = await models.bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })

    const hansHunters = await han.getHunters()

    console.log(hansHunters)
}