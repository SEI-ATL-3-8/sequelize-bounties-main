const models = require('./models')

// models.bounty.create({
//     name: 'Hans Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })

const huntersArray = []
class Hunters {
    constructor(name,client,active){
        this.name = name,
        this.client = client,
        this.active = active
        huntersArray.push(this)
    }
}
const boba = new Hunters('Boba Fett','Jabba the Hut', true);
const dengar = new Hunters('Dengar', 'Mercurial Swift', false);

const makeHunters = () => { 
huntersArray.forEach(function(h){
    models.hunter.create(h)
})}
// makeHunters();

const getAllBounties = async () =>{
    const allBounties = await models.bounty.findAll()
    console.log(allBounties);
}
// getAllBounties()

const getAllHunters = async () =>{
    const allHunters = await models.hunter.findAll()
     console.log(allHunters);  
   
}
// getAllHunters()

const getActiveHunters = async () =>{
    const allHunters = await models.hunter.findAll()
        allHunters.forEach(function(hunter){
            if(hunter.active === true){
                const activeHunters = hunter;
                console.log(activeHunters);
            }
        })
}
// getActiveHunters()

const captureHans = async () =>{
    const hans = await models.bounty.findOne({where: {name:'Hans Solo'}})
    hans.update({captured: true})
    console.log(hans);
}
// captureHans()

const deleteDengar = async () =>{
    const dengar = await models.hunter.findOne({where: {name:'Dengar'}})
    dengar.destroy()
}
// deleteDengar()

const rudeeeee = () =>{
    models.hunter.create(dengar)
}
// rudeeeee();

// Is this relationship 1-to-many or many-to-many?
// 1 to many

// For this kind of relationship, do you need a foreign key or a join table?
// foreign key

// Which table should get the foreign key?
// hunters

// What should the foreign key be called?
// bountyId

// What data type should the foreign key be?
// integer

const bobbaGetHans = async () => {
    const hans = await models.bounty.findOne({where:{name:'Hans Solo'}});
    const bobba = await models.hunter.findOne({where:{name:'Boba Fett'}});

    hans.addHunters(bobba)
}
// bobbaGetHans()

const getHansHunters = async () => {
    const hans = await models.bounty.findOne({where:{name:'Hans Solo'}});
    const hansHunters =  await hans.getHunters();
    console.log(hansHunters);
}
// getHansHunters()

const getBobbasBounty = async () => {
    const bobba = await models.hunter.findOne({where:{name:'Boba Fett'}});
    const bobbasBounty = await bobba.getBounty()
    console.log(bobbasBounty);
}
// getBobbasBounty()

const dengarGetHans = async () => {
    const hans = await models.bounty.findOne({where:{name:'Hans Solo'}});
    const dengar = await models.hunter.findOne({where:{name:'Dengar'}});

    hans.addHunters(dengar);
}
// dengarGetHans();

const getDengarsBounty = async () => {
    const dengar = await models.hunter.findOne({where:{name:'Dengar'}});
    const dengarsBounty = await dengar.getBounty()
    console.log(dengarsBounty);
}
// getDengarsBounty();