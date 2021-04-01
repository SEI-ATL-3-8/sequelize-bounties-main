const { bounty, hunter } = require('./models');
// Basic CRUD
//1.
bounty.create({
    name: 'Han Solo',
    wantedFor: 'Owing Money',
    reward: 500000,
    captured: false
})

//2.
hunter.create({
    name: 'Bobba Fett',
    client: 'Jabba the Hut',
    active: true
})

//3.
hunter.findOrCreate({
    where: {
        name: 'Dengar',
        client: 'Mercurial Swift',
        active: false
    }
})

//4.
const getAllBounties = async () => {
    try {
        const allBounties = await bounty.findAll();
        console.log(allBounties);
    } catch (error) {
        console.log(error);
    }

}
getAllBounties();

//5.

const getAllActiveHunters = async () => {
    try {
        const allHunters = await hunter.findAll();
        const activeHunters = allHunters.filter(hunter => {
            return hunter.active
        });

        console.log(activeHunters);
    } catch (error) {
        console.log(error);
    }
}

getAllActiveHunters();

//6.

bounty.findOne({
    where: {
        name: 'Han Solo'
    }
}).then(han => han.update({
    captured: true
})).then(res => console.log(res))
    .catch(error => console.log(error))

//7.
hunter.destroy({
    where: {
        name: 'Dengar'
    }
})

//8.
hunter.create({
    name: 'Dengar',
    client: 'Mercurial Swift',
    active: false
})

// Using Association

//1.

const linkHanAndBobba = async () => {
    const hanSolo = await bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })

    const bobbaFett = await hunter.findOne({
        where: {
            name: 'Bobba Fett'
        }
    })
    hanSolo.addHunters(bobbaFett)
}

linkHanAndBobba()

//2.

const hanHunters = async () => {
    const hanSolo = await bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })

    const hanHunters = await hanSolo.getHunters();
    console.log(hanHunters);
}

hanHunters();

//3.

const bobbaBounty = async () => {
    const bobbaFett = await hunter.findOne({
        where: {
            name: 'Bobba Fett'
        }
    })

    const bobbaBounty = await bobbaFett.getBounty();
    console.log(bobbaBounty);
}

bobbaBounty()

//4. 

const addDengarToHan = async () => {
    const hanSolo = await bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })

    const dengar = await hunter.findOne({
        where: {
            name: 'Dengar'
        }
    })
    hanSolo.addHunters(dengar)
}

addDengarToHan()

//5.
const hanHunters = async () => {
    const hanSolo = await bounty.findOne({
        where: {
            name: 'Han Solo'
        }
    })

    const hanHunters = await hanSolo.getHunters();
    console.log(hanHunters);
}

hanHunters();

//6.

const dengarBounty = async () => {
    const dengar = await hunter.findOne({
        where: {
            name: 'Dengar'
        }
    })

    const dengarBounty = await dengar.getBounty();
    console.log(dengarBounty);
}

dengarBounty()





