const models = require('./models')

//BASIC CRUD

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


//Using our association

// 1.Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with hanSolo.addHunters(bobbaFett)

// const addHunter = async () => {
// const hanSolo = await models.bounty.findOne({
//     where: {name: 'Han Solo'}})
// const bobbafett = await models.hunter.findOne({
//     where: {name: 'Bobba Fett'}})

//     hanSolo.addHunter(bobbafett)
// }
// addHunter()

// 2.Look up Han Solo, save him to a variable. Look up his hunters with hanSolo.getHunters() and save the result to a variable, then log that variable.

// const hansHunters = async () => {
//     const hanSolo = await models.bounty.findOne({
//         where: {name: 'Han Solo'}})
//     const hunters = await hanSolo.getHunters()
//     console.log(hunters);
// }
// hansHunters()

// 3.Look up Bobba Fett, save him to a variable. Look up his bounty with bobbaFett.getBounty(), and log that variable.

// const bobbaBounty = async () => {
// const bobbaFett = await models.hunter.findOne({
//     where:{name: 'Bobba Fett'}})
// const bobbasBounty = await bobbaFett.getBounty()
// console.log(bobbasBounty);
// }
// bobbaBounty()

// 4.Add Dengar to Han's hunters, the same way we did in step 1.

// const addHunter = async () => {
// const hanSolo = await models.bounty.findOne({
//     where: {name: 'Han Solo'}})
// const dengar = await models.hunter.findOne({
//     where: {name: 'Dengar'}})

//     hanSolo.addHunter(dengar)
// }
// addHunter()

// 5.Repeat step 2, and the list should now include both Bobba Fett and Dengar.

// const hansHunters = async () => {
//     const hanSolo = await models.bounty.findOne({
//         where: {name: 'Han Solo'}})
//     const hunters = await hanSolo.getHunters()
//     console.log(hunters);
// }
// hansHunters()

// 6.Repeat step 3, but with Dengar instead of Bobba Fett.

const dengarBounty = async () => {
const dengar = await models.hunter.findOne({
    where:{name: 'Dengar'}})
const dengarsBounty = await dengar.getBounty()
console.log(dengarsBounty);
}
dengarBounty()