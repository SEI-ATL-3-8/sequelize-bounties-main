const models = require('./models')

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

/* models.bounty.create({
    name: 'Han Solo',
    wantedFor: 'Owing Money',
    captured: false,
    reward: 500000
}) */

// Reward for Han didn't get added, so here's a bonus update crud

/* let hanSoloReward = async () => {
    try {
        let hanSolo = await models.bounty.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        hanSolo.update({
            reward: 500000
        })
    } catch (error) {
        console.log(error.message)
    }
}
hanSoloReward() */

// 2. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true.

/* models.hunter.create({
    name: 'Boba Fett',
    client: 'Jabba the Hutt',
    active: true,
}) */

// 3. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

/* let dengarCheck = async () => {
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

dengarCheck() */

// 4. Find all bounties, assign them to a variable, and console.log them.

/* let findAllBounties = async () => {
    try {
        let allBounties = await models.bounty.findAll()
        console.log(allBounties)
    } catch (error) {
        console.log(error.message)
    }
}
findAllBounties() */

// 5. Find all hunters with active = true, assign them to a variable, and console.log them

/* let findActiveHunters = async () => {
    try {
        let allActiveHunters = await models.hunter.findAll({
            where: {
                active: true
            }
        })
        console.log(allActiveHunters)
    } catch (error) {
        console.log(error.message)
    }
}
findActiveHunters() */

// 6. Modify Han Solo to have a captured of true.

/* let hanSoloCarbonite = async () => {
    try {
        let hanSoloNoo = await models.bounty.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        hanSoloNoo.update({
            captured: true
        })
        console.log(hanSoloNoo)
    } catch (error) {
        console.log(error.message)
    }
}
hanSoloCarbonite() */

// 7. Delete Dengar. Nobody remembers this guy anyway.

/* let dengarBye = async () => {
    try {
        let dengar = await models.hunter.findOne({
            where: {
                name: 'Dengar'
            }
        })
        dengar.destroy()
    } catch (error) {
        console.log(error.message)
    }
}
dengarBye() */

// 8. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.
// Reusing the code from question 3

/* let dengarCheck = async () => {
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

dengarCheck() */

// Association
// 1. Look up Han Solo and save him to a variable. Look up Boba Fett and assign him to a variable too. Associate the two with hanSolo.addHunters(bobaFett)

/* let hanSoloTargetLocked = async () => {
    try {
        let hanSolo = await models.bounty.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        let bobaFett = await models.hunter.findOne({
            where: {
                name: 'Boba Fett'
            }
        })
        hanSolo.addHunter(bobaFett)

    } catch (error) {
        console.log(error.message)
    }
}
hanSoloTargetLocked() */

// 2. Look up Han Solo, save him to a variable. Look up his hunters with hanSolo.getHunters() and save the result to a variable, then log that variable.

/* let hanSoloInTrouble = async () => {
    try {
        let hanSolo = await models.bounty.findOne({
            where: {
                name: 'Han Solo'
            }
        })
        let hanSoloHunters = await hanSolo.getHunters()
        console.log(hanSoloHunters)
    } catch (error) {
        console.log(error.message)
    }
}
hanSoloInTrouble() */

// 3. Look up Bobba Fett, save him to a variable. Look up his bounty with bobbaFett.getBounty(), and log that variable.

let bobaFettCheck = async () => {
    try {
        let bobaFett = await models.hunter.findOne({
            where: {
                name: 'Boba Fett'
            }
        })
        let bobaFettBounties = await bobaFett.getBounty()
        console.log(bobaFettBounties)
    } catch (error) {
        console.log(error.message)
    }
}
bobaFettCheck()