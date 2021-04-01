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

// const makeHunters = () => { 
// huntersArray.forEach(function(h){
//     models.hunter.create(h)
// })}
// makeHunters();

// const getAllBounties = async () =>{
//     const allBounties = await models.bounty.findAll()
//     console.log(allBounties);
// }
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
rudeeeee();