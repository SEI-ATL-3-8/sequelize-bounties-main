// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

const models = require('./models')
models.bounty.create({
  name: 'Han Solo',
  wantedFor: 'Owing Money',
  reward: 500000,
  captured: false
})

// 1. Make a hunter with a name of Boba Fett, a client of Jabba the Hut, and an active of true. 

const models = require('./models')
models.hunter.create({
  name: 'Boba Fett',
  client: 'Jabba the Hut',
  active: true
})

// 1. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

const models = require('./models')
models.sequelize.transaction(function(t) {
  return models.hunter.findOrCreate({
    where: {
      name: 'Dengar',
      client: 'Mercurial Swift',
      active: false
    },
    transaction: t
  })
})

// 1. Find all bounties, assign them to a variable, and console.log them.

const models = require('./models')
models.bounty.findAll().then(wanted => {
    console.log(wanted)
})

// 1. Find all hunters with active = true, assign them to a variable, and console.log them.

const models = require('./models')
models.hunter.findAll({
    where: {active: true}
}).then(killer => {
    console.log(killer)
})

// 1. Modify Han Solo to have a captured of true.

const models = require('./models')
const hanSolo = async () => {
  const caught = await models.bounty.findOne({
    where: {
      name: 'Han Solo'
    }
  }) 
  caught.update({
    captured: true
  }) 
  console.log(caught)
}
hanSolo()

// 1. Delete Dengar. Nobody remembers this guy anyway.

const models = require('./models')
const byeDengar = async () => {
	const snips = await models.hunter.findOne({
		where: {
			name: 'Dengar'
		}
	}) 
	snips.destroy() 
	console.log(snips)	
}
byeDengar()

// Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

const models = require('./models')
models.hunter.create({
  name: 'Dengar',
  client: 'Mercurial Swift',
  active: false
})


/////////CHECK MODELS FOLDER FOR ASSOCIATION/////


// 1. Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with `hanSolo.addHunters(bobbaFett)`

const models = require('./models')
const rivals = async () => {
	const hanSolo = await models.bounty.findOne({
		where: {
			name: 'Han Solo'
		}
	})
	const bobaFett = await models.hunter.findOne({
		where: {
			name: 'Boba Fett'
		}
	})
	hanSolo.addHunter(bobaFett)
}
rivals()

// 1. Look up Han Solo, save him to a variable. Look up his hunters with `hanSolo.getHunters()` and save the result to a variable, then log that variable.

const models = require('./models')
const run = async () => {
	const hanSolo = await models.bounty.findOne({
		where: {
			name: 'Han Solo'
		}
	})
	const huntedBy = await hanSolo.getHunters()
	console.log(huntedBy)
}
run()

// 1. Look up Bobba Fett, save him to a variable. Look up his bounty with `bobbaFett.getBounty()`, and log that variable.

const models = require('./models')
const chase = async () => {
	const bobaFett = await models.hunter.findOne({
		where: {
			name: 'Boba Fett'
		}
	})
	const mando = await bobaFett.getBounty()
	console.log(mando)
}
chase()

// 1. Add Dengar to Han's hunters, the same way we did in step 1.

const models = require('./models')
const extra = async () => {
	const hanSolo = await models.bounty.findOne({
		where: {
			name: 'Han Solo'
		}
	})
	const who = await models.hunter.findOne({
		where: {
			name: 'Dengar'
		}
	})
	hanSolo.addHunter(who)
	console.log(who)
}
extra()

// 1. Repeat step 2, and the list should now include both Bobba Fett and Dengar.

const models = require('./models')
const run = async () => {
	const hanSolo = await models.bounty.findOne({
		where: {
			name: 'Han Solo'
		}
	})
	const huntedBy = await hanSolo.getHunters()
	console.log(huntedBy)
}
run()

// 1. Repeat step 3, but with Dengar instead of Bobba Fett.

const models = require('./models')
const chase = async () => {
	const dengar = await models.hunter.findOne({
		where: {
			name: 'Dengar'
		}
	})
	const who = await dengar.getBounty()
	console.log(who)
}
chase()