// grab models
const models = require('./models');

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