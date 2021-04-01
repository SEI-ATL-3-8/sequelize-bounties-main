const models = require('./models/');
const hunters = [
    {
        name: 'Boba Fett', 
        client: 'Jabba the Hunt',
        active: true
    },
    {
        name: 'Dengar',
        client: 'Mercurial Swift',
        active: false
    }
] 
const bounties = [
    {
        name: 'Han Solo',
        wantedFor: 'Owing Money',
        reward: 500000,
        captured: false
    }
]

const populateData = async (table,data) => {  
    try {
        for (const obj of data) {
            const createdData = await table.create({...obj});
            console.log('Data is created');
        }
    }
    catch(error) {
        console.log(error.message);
    }

}

// populateData(models.hunter,hunters);
// populateData(models.bounty, bounties);

const findAllData = async (table,where = {}) => {
    try {
        const dataArray = await table.findAll(where);
        if (dataArray.length){
            console.log(dataArray.map(({dataValues}) => dataValues));
        }
        else {
            throw new Error('Nothing was found!')
        }
    }
    catch(error) {
        console.log(error.message);
    }

}

// findAllData(models.bounty);
//  findAllData(models.hunter,{where:{active: true}});

const updateData = async (table,newData,where) => {
    try {
        const updatedData = await table.update(newData,where);
        if (updatedData[0] === 0) {
            console.log('not successful');
        }
        else {
            console.log('successful update');
        }  
        // else successful update
    }
    catch(error) {
        console.log(error.message);
    }
}

// updateData(models.bounty,{captured: true},{where: {captured: false, name: 'Han Solo'}});

const deleteData = async (table,where) => {
    try {
        const deletedData = table.destroy(where);
        console.log(deletedData);
    }
    catch(error) {
        console.log(error.message);
    }
}

// deleteData(models.hunter,{where: {name:'Dengar'}});
// populateData(models.hunter,[hunters[1]]);

(async () => {
    const hanSolo = await models.bounty.findOne({where:{name: 'Han Solo'}});
    const bobaFett = await models.hunter.findOne({where:{name: 'Boba Fett'}});
    const dengar = await models.hunter.findOne({where:{name: 'Dengar'}});
    // const addBoba = await hanSolo.addHunters(bobaFett);
    const hanSoloHunters = await hanSolo.getHunters();
    // const bobaFettBounty = await bobaFett.getBounty();
    // const addDengar = await hanSolo.addHunter(dengar);
    const dengarBounty = await dengar.getBounty();
    // console.log(dengarBounty);
    console.log(hanSoloHunters);
})();