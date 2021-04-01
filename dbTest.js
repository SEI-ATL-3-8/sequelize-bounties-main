const models = require('./models')

// 1.Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

// models.bounty.create({
//     name:'Han Solo',
//     wantedFor:'Owing Money',
//     reward:500000,
//     captured:false
// })

// 2.Make a hunter with a name of Bobba Fett, a client of Jabba the Hut, and an active of true.

// models.hunter.create({
//     name:'Bobba Fett',
//     client:'Jabba the Hut',
//     active:true
// })

// 3.Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

// const makeDengar = async() => {
//     const dengar = await models.hunter.findOrCreate({
//         where:{
//             name: 'Dengar',
//             client: 'Mercurial Swift',
//             active: false
//         }
//     })
// }
// makeDengar()
//always invoke function!!!!!!!!!!!!!!!!!! freaking remember!!!!!

// 4.Find all bounties, assign them to a variable, and console.log them.


//   const findBounty = async()=>{
//     const allBounties= await models.bounty.findAll({
//     })
//     console.log(allBounties)
//     }
//     findBounty()


// 5.Find all hunters with active = true, assign them to a variable, and console.log them.

// const findHunter = async () => {
//     const activeTrue = await models.hunter.findOne({
//         where:{
//             active: true
//         }
//     })
//     console.log(activeTrue)
// }
// findHunter()


// 6.Modify Han Solo to have a captured of true.

// models.bounty.findOne({
//     where: {
//         name: 'Han Solo'
//     }
// }).then(han => han.update ({
//     captured: true
// })).then(res => console.log(res))



// 7.Delete Dengar. Nobody remembers this guy anyway.

// const deleteDengar = async()=>{
//     let dengar = await models.hunter.destroy({
//     where: {
//         name: 'Dengar'
//     }
// })
// console.log(dengar)
// }
// deleteDengar()



// 8.Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

const makeDengar = async() => {
    const dengar = await models.hunter.findOrCreate({
        where:{
            name: 'Dengar',
            client: 'Mercurial Swift',
            active: false
        }
    })
}
makeDengar()