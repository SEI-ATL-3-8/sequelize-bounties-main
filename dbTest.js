const models = require('./models')

models.bounty.create({
    name:'Han Solo',
    wantedFor:'Owing Money',
    reward:500000,
    captured:false
})
models.hunter.create({
    name:'Boba Fett',
    client:'Jabba the Hut',
    active:true
})
models.hunter.create({
    name:'Dengar',
    client:'Mercurial Swift',
    active:false
})
//q4
models.bounty.findAll().then(res => {
    console.log(res)
})
//q5
models.hunter.findAll().then(res => {
    // console.log(res)
    let hunterArr = res
    for(let hunter of hunterArr){
        if(hunter.active = true) {
            console.log(hunter)
        }
    }
})
//q6
let updateHanSolo = async () => {
    let hanSolo = await models.bounty.findOne({
        where: {
            name:'Han Solo'
        }
    })
    hanSolo.update({
        captured: true
    })
}
// updateHanSolo()

//q7
let destroyDengar = async () =>{
    let dengar = await models.hunter.findOne({
        where: {
            name:'Dengar'
        }
    })
    dengar.destroy()
    
}
// destroyDengar()
//q8
// models.hunter.create({
//     name:'Dengar',
//     client:'Mercurial Swift',
//     active:false
// })
////////////////////PART2//////////////////////
//q1
const hanAndFett = async () => {
    const han = await models.bounty.findOne({ where:{name:'Han Solo'}})
    const fett = await models.hunter.findOne({where:{name:'Boba Fett'}})
    han.addHunters(fett)
}
hanAndFett()
//q2

const hansHunter = async () => {
    const han = await models.bounty.findOne({ where:{name:'Han Solo'}})
    const hunterforHan = await han.getHunters()
    console.log(hunterforHan)
}
hansHunter()

//q3
const bobbasBounty = async()=>{
    const bobba = await models.hunter.findOne({where:{name:'Boba Fett'}})
    const bountyforBobba = await bobba.getBounty()
    console.log(bountyforBobba)
}
bobbasBounty()

//q4
const hanAndDengar = async () => {
    const han = await models.bounty.findOne({ where:{name:'Han Solo'}})
    const dengar = await models.hunter.findOne({where:{name:'Dengar'}})
    han.addHunters(dengar)
}
hanAndDengar()

//q5???

//q6
const dengarsBounty = async()=>{
    const den = await models.hunter.findOne({where:{name:'Dengar'}})
    const bountyforden = await den.getBounty()
    console.log(bountyforden)
}
dengarsBounty()
