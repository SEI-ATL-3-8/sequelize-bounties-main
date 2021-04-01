const models = require('./models')


const step1 = async () => {
    models.bounty.create({
        name:'Han Solo',
        wantedFor:'Owing Money',
        reward:500000,
        captured:false
    })
  }

const step2 = async() => {
    models.hunter.create({
        name:'Bobba Fett',
        client:'Jabba the Hutt',
        active:true
    })

    models.hunter.findOrCreate({
        where: {
        name:'Bobba Fett',
        client:'Jabba the Hutt',
        active:true
    }
})
}

const step3 = async() => {
    models.hunter.findOrCreate({
        where: {
        name:'Dengar',
        client:'Mercurial Swift',
        active:false
    }
})
}


const step4 = async()=> {
    try {
        const allBounties =await models.bounty.findAll()
        console.log(allBounties);
    } catch (err) {
        console.log(err);
    }
}
step4()

