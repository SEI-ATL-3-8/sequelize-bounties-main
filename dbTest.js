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
updateHanSolo()

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
