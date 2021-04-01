const models = require('./models')

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.
models.bounty.create({
    name: 'Han Solo',
    wantedFor: 'Owing Money',
    captured: false,
    reward: 500000
})

// 2. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true.
models.hunter.create({
    name: 'Boba Fett',
    client: 'Jabba the Hutt',
    active: true,
})

// 3. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
let dengarCheck = async () => {
    try {
        let dengar = await models.hunter.findOrCreate({
            where: {
                name: 'Dengar',
                client: 'Mercurial Swift',
                active: false
            }
        })
        console.log(dengar)
    } catch (error) {
        console.log(error.message)
    }
}

dengarCheck()