// grab models
const models = require('./models');

/* ============== Part 1 - Basic CRUD ============== */

// 1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.

// try {
//     models.bounty.create(
//     {
//         name: 'Han Solo',
//         wantedFor: 'Owing Money',
//         reward: 500000,
//         captured: false
//     });
// } catch (error) {
//     console.log(error.message);
// }

// 2. Make a hunter with a name of Bobba Fett, a client of Jabba the Hut, and an active of true.

// try {
//     models.hunter.create(
//     {
//         name: 'Bobba Fett',
//         client: 'Jabba the Hut',
//         active: true
//     });
// } catch (error) {
//     console.log(error.message);
// }


// 3. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).

// try {
//     models.hunter.create(
//         {
//             name: 'Dengar',
//             client: 'Mercurial Swift',
//             active: false
//         });
// } catch (error) {
//     console.log(error.message);
// }


// 4. Find all bounties, assign them to a variable, and console.log them.

async function findAllBounties ()
{
    try {
        const bounties = await models.bounty.findAll();
        console.log(bounties);
    } catch (error) {
        console.log(error.message);
    }
}
// findAllBounties();

// 5. Find all hunters with active = true, assign them to a variable, and console.log them.

async function findActiveHunters ()
{
    try {
        const activeHunters = await models.hunter.findAll({ where: { active: true } });
        console.log(activeHunters);
    } catch (error) {
        console.log(error.message);
    }
}
// findActiveHunters();

// 6. Modify Han Solo to have a captured of true.

async function captureHanSolo ()
{
    try {
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        hanSolo.update({ captured: true });
    } catch (error) {
        console.log(error.message);
    }
}
// captureHanSolo();

// 7. Delete Dengar. Nobody remembers this guy anyway.

async function destroyDengar ()
{
    try {
        const dengar = await models.hunter.findOne({ where: { name: 'Dengar' } });
        dengar.destroy();
    } catch (error) {
        console.log(error.message);
    }
}
// destroyDengar();

// 8. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

async function sorryDengar ()
{
    try {
    models.hunter.create(
        {
            name: 'Dengar',
            client: 'Mercurial Swift',
            active: false
        });
    } catch (error) {
        console.log(error.message);
    }
}
// sorryDengar();


/* ============== Part 2 - Using Our Associations ============== */

// 1. Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with hanSolo.addHunters(bobbaFett)

async function bobaAddHan ()
{
    try {
        // grab Han Solo
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        // grab Boba Fett
        const bobaFett = await models.hunter.findOne({ where: { name: 'Boba Fett' } });

        hanSolo.addHunters(bobaFett);
    } catch (error) {
        console.log(error.message);
    }
}
// bobaAddHan();

// 2. Look up Han Solo, save him to a variable. Look up his hunters with hanSolo.getHunters() and save the result to a variable, then log that variable.

async function getHansHunters ()
{
    try {
        // grab Han Solo
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });

        const hunters = await hanSolo.getHunters();
        console.log(hunters);
    } catch (error) {
        console.log(error.message);
    }
}
// getHansHunters();

// 3. Look up Bobba Fett, save him to a variable. Look up his bounty with bobbaFett.getBounty(), and log that variable.

async function getBobasBounty ()
{
    try {
        // grab Boba Fett
        const bobaFett = await models.hunter.findOne({ where: { name: 'Boba Fett' } });

        const bounty = await bobaFett.getBounty();
        console.log(bounty);
    } catch (error) {
        console.log(error.message);
    }
}
// getBobasBounty();

// 4. Add Dengar to Han's hunters, the same way we did in step 1.

async function dengarAddHan ()
{
    try {
        // grab Han Solo
        const hanSolo = await models.bounty.findOne({ where: { name: 'Han Solo' } });
        // grab Dengar
        const dengar = await models.hunter.findOne({ where: { name: 'Dengar' } });

        hanSolo.addHunters(dengar);
    } catch (error) {
        console.log(error.message);
    }
}
// dengarAddHan();

// 5. Repeat step 2, and the list should now include both Bobba Fett and Dengar.

// getHansHunters();

// 6. Repeat step 3, but with Dengar instead of Bobba Fett.

async function getDengarsBounty ()
{
    try {
        // grab Dengar
        const dengar = await models.hunter.findOne({ where: { name: 'Dengar' } });

        const bounty = await dengar.getBounty();
        console.log(bounty);
    } catch (error) {
        console.log(error.message);
    }
}
// getDengarsBounty();