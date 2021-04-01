// Basic CRUD

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, 
// reward of 500000, and captured of false.

const models = require('./models')

models.bounty.create({
  name: 'Han Solo',
  wantedFor: 'Owing Money',
  reward: 500000,
  captured: false
})

// 1. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, 
// and an active of true. 

models.hunter.create({
    name: 'Boba Fett',
    client: 'Jabba the Hut',
    active: true
  })

// 1. Make a hunter with a name of Dengar, a client of Mercurial Swift, 
// and an active of false. Try to do this using findOrCreate (knowing that 
// there isn't one to find, and that sequelize will create it).

let hunterDengar = async () => {
    let hunterD = await models.hunter.findOrCreate({
        where: {
            name: 'Dengar'
        }, 
        defaults: {
            client: 'Mercurial Swift', active: false
        }
    })
    console.log(hunterD)
}
hunterDengar()


// 1. Find all bounties, assign them to a variable, and console.log them.

const allBounties = async() => {
    const all = await models.bounty.findAll()
    console.log(all)
}
allBounties()

// 1. Find all hunters with active = true, assign them to a variable, 
// and console.log them.

const allHunters = async() => {
    const all = await models.hunter.findAll({
        where: {
            active: true
        }
    })
    console.log(all)
}
allHunters()

// 1. Modify Han Solo to have a captured of true.

let updateHan = async () => {
    let han = await models.bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })
    han.update ({
        captured: true
    })
    console.log(han)
}
updateHan()

// 1. Delete Dengar. Nobody remembers this guy anyway.

let deleteDengar = async () => {
    let dengar = await models.hunter.destroy({
        where: {
            name: 'Dengar'
        }
    })
    console.log(dengar)
}

deleteDengar ()

// 1. Ok recreate Dengar. The deletion was just for practice. 
// We'll actually need him later.

models.hunter.create({
        name: 'Dengar',
        client: 'Mercurial Swift',
        active: false
      })


// Using our association

// 1. Look up Han Solo and save him to a variable. 
// Look up Bobba Fett and assign him to a variable too. 
// Associate the two with `hanSolo.addHunters(bobbaFett)`

let addHun = async() => {
    let hanSolo = await models.bounty.findOne ({
        where: {
            name: 'Han Solo'
        }
    })
    let bobaFett = await models.hunter.findOne ({
        where: {
            name: 'Boba Fett'
        }
    })
  hanSolo.addHunters(bobaFett)
}
addHun()


// 1. Look up Han Solo, save him to a variable. Look up his hunters 
// with `hanSolo.getHunters()` and save the result to a variable, then log that variable.

let lookForSoloHunters = async () => {
    let hanSolo = await models.bounty.findOne ({
        where: {
            name: 'Han Solo'
        }
    })
    let soloHunters = await hanSolo.getHunters()
    console.log(soloHunters)
}
lookForSoloHunters()


// 1. Look up Bobba Fett, save him to a variable. Look up his bounty 
// with `bobbaFett.getBounty()`, and log that variable.

let lookForBobaBounties = async () => {
        let bobaFett = await models.hunter.findOne ({
            where: {
                name: 'Boba Fett'
            }
        })
        let fettBounties = await bobaFett.getBounty()
        console.log(fettBounties)
    }
    lookForBobaBounties()

// 1. Add Dengar to Han's hunters, the same way we did in step 1.

let addHun = async() => {
    let hanSolo = await models.bounty.findOne ({
        where: {
            name: 'Han Solo'
        }
    })
    let dengar = await models.hunter.findOne ({
        where: {
            name: 'Dengar'
        }
    })
  hanSolo.addHunters(dengar)
}
addHun()

// 1. Repeat step 2, and the list should now include both Bobba Fett and 
// Dengar.

let lookForSoloHunters = async () => {
    let hanSolo = await models.bounty.findOne ({
        where: {
            name: 'Han Solo'
        }
    })
    let soloHunters = await hanSolo.getHunters()
    console.log(soloHunters)
}
lookForSoloHunters()

// 1. Repeat step 3, but with Dengar instead of Bobba Fett.

let lookForDengarBounties = async () => {
        let dengar = await models.hunter.findOne ({
            where: {
                name: 'Dengar'
            }
        })
        let dengarBounties = await dengar.getBounty()
        console.log(dengarBounties)
    }
    lookForDengarBounties()