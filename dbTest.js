const { QueryInterface } = require('sequelize/types')
// const { Sequelize } = require('./models')
const models = require('./models')

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

// models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })

// 2. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true.

// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jabba the Hut',
//     active: true
// })

// 3. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

// const createDengar = async () => {
//     let person = await models.hunter.findOrCreate({
//         where: {
//             name: 'Dengar',
//             client: 'Mercurial Swift',
//             active: false
//         }
//     })
//     console.log(person)
// }

// createDengar();

// 4. Find all bounties, assign them to a variable, and console.log them.

// const findBounty = async () => {
//     let allBounty = await models.bounty.findAll()
//     console.log(allBounty)
// }
// findBounty();

// 5. Find all hunters with active = true, assign them to a variable, and console.log them.

// const findHunter = async () => {
//     let allHunter = await models.hunter.findAll({
//         where: {
//             active: true
//         }
//     })
//     console.log(allHunter)
// }
// findHunter();

// 6. Modify Han Solo to have a captured of true.

// let updateHan = async () => {
//     let han = await models.bounty.findOne({
//         where: {
//             name: 'Han Solo'
//         }
//     })
//     console.log(han)
//     han.update({
//        captured: true 
//     })
// }
// updateHan();

// 7. Delete Dengar. Nobody remembers this guy anyway.

// let deleteDengar = async () => {
//     let dengar = await models.hunter.destroy({
//         where: {
//             name: 'Dengar'
//         }
//     })
// }
// deleteDengar();

// 8. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

// const createDengar = async () => {
//     let person = await models.hunter.findOrCreate({
//         where: {
//             name: 'Dengar',
//             client: 'Mercurial Swift',
//             active: false
//         }
//     })
//     console.log(person)
// }

// createDengar();

//Association Work
// 1. Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with `hanSolo.addHunters(bobbaFett)`
const setBounty = async () => {
    const hanSolo = await models.bounty.findOne({
        where: {
            name: 'Hans Solo'
        }
    })
    const bobba = await models.hunter.findOne({
        where: {
            name: 'Boba Fett'
        }
    })
    hanSolo.addHunter(bobba)
}
setBounty();
console.log(hanSolo)
console.log(bobba)



// 2. Look up Han Solo, save him to a variable. Look up his hunters with `hanSolo.getHunters()` and save the result to a variable, then log that variable.
// 3. Look up Bobba Fett, save him to a variable. Look up his bounty with `bobbaFett.getBounty()`, and log that variable.
// 4. Add Dengar to Han's hunters, the same way we did in step 1.
// 5. Repeat step 2, and the list should now include both Bobba Fett and Dengar.
// 6. Repeat step 3, but with Dengar instead of Bobba Fett.