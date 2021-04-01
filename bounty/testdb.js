const models = require('./models')

// models.bounties.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 5000,
//     captured: false
// })

// models.bounty.create({
//     name: 'test name',
//     wantedFor: 'test wanted',
//     reward: 00000,
//     captured: false
// })

// models.hunter.create({
//     name: 'Boba Fett',
//     client: 'Jaba the Hut',
//     active: true
// })

// models.hunter.create({
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false

// })



// const allBounty = models.bounty.findAll().then((allBounties) => {
//     console.log(allBounty)
// })

const allBounty = async () => {
    const foundBounty = await models.bounty.findAll()
    console.log(foundBounty)
}

allBounty();

//tried to do number 4 on the read me and got this in terminal (Use `node --trace-warnings ...` to show where the warning was created)
// (node:68949) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:68949) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.
// 2. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true. 
// 3. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
// 4. Find all bounties, assign them to a variable, and console.log them.
// 5. Find all hunters with active = true, assign them to a variable, and console.log them.

// models.hunters.findAll().then(res => {
//     console.log(res)
//     let huntersArr = res
//     for(let hunter of huntersArr) {
//         console.log(owner.dataValues.active)
//     }
// })

// 6. Modify Han Solo to have a captured of true.
    // let updateHan = async () => {
    //     let han = await models.owner.findOne({
    //         where: {
    //             name: 'Han'
    //         }
    //     })
    //     console.log(jane)
    //     han.update({
    //         captured: true
    //     })
    
// 7. Delete Dengar. Nobody remembers this guy anyway.

// models.destroy({
//     where: {
//         name: 'Dengar'
//     }
// })

// 8. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

// models.hunter.create({
//     name: 'Dengar',
//     client: 'Mercurial Swift',
//     active: false

// })