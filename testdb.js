const models = require('./models')
// models.bounty.create({
//     name: 'Han Solo',
//     wantedFor: 'Owing Money',
//     reward: 500000,
//     captured: false
// })
// models.hunter.create({
//     name: 'Bobba Fett',
//     client:'Jabba the Hut',
//     active: true
// })
// models.hunter.create({
//     name: 'Dengar',
//     client:'Mercurial Swift',
//     active: false
// })

async function findAllBounties(){
  const result = await models.bounty.findAll()
  console.log(result)
}

findAllBounties()

async function findAllHunters(){
    const result = await models.hunter.findAll()
    for(i = 0; i < result.length; i++)
    {
        if(result[i].active == true)
        {
            console.log(result[i].name)
        }
    }
}

findAllHunters()

async function updateBounty(){
  const result = await models.bounty.findOne({
    where:{
      name: "Han Solo"
    }
  })
  result.update({captured: true})
  console.log(result.captured)
}
updateBounty()

// async function deleteHunter(){
//     const result = await models.hunter.findOne({
//       where:{
//         name: "Dengar"
//       }
//     })
//     result.destroy()
//   }
// deleteHunter()  