1.
    // const models = require('./models/')

    // models.bounty.create({name: 'Han Solo', wantedFor: 'Owing money', reward: 500000, captured: false })

2.
        // const models = require('./models/')

        // models.hunter.create({name: 'Boba Fett', client: 'Jabba the Hutt', active: 'true'})

3.     
        // const models = require('./models/')

        // models.findOrCreate({where: {name: 'Dengar'}, default: {client: 'Mercurial Swift', active: false}})
        // models.spread(function(hunter, created) {
        //     console.log(hunter.get({
        //         plain: true
        //     }))
        //     console.log(created)

                // *Ask how to create using findOrCreate!*
        // })

        // models.hunter.create({name: 'Dengar', client: 'Mercurial Swift', active: 'false'})

4.      
        // const models = require('./models/')

        // models.bounty.findAll().then(function(Allbounties){
        //     const bounties = Allbounties;
        //     console.log(bounties);
        // })
        
5.
        // const models = require('./models/')

        // models.hunter.findAll().then((Allhunters) => {
        //         for (let hunter of Allhunters) {
        //             if (hunter.active == true){
        //                 const Bravehunters = hunter; 
        //                 console.log(Bravehunters)
        //             }
        //         }
        // })

6.      
        // const models = require('./models/')

        // models.bounty.findOne({
        //     where: {
        //         name: 'Han Solo'
        //     }
        // }).then(res => res.update({
        //     captured: true
        // }))

7.
        //DELETE FROM bounties WHERE name = 'Dengar' in postgresql
        //Ask how to do it through node.js

8.
        // const models = require('./models/')

        // models.hunter.create({name: 'Dengar', client: 'Mercurial Swift', active: 'false'})


                    // Association 

1.         
        // const models = require('./models/')

        // const addHunters = async () => {
        //     const hanSolo = await models.bounty.findOne({where: { name: 'Han Solo'}})
        //     const bobbaFett = await models.hunter.findOne({where: { name: 'Bobba Fett'} })

        //        hanSolo.addHunters(bobbaFett)
              
        // }
        // addHunters() 
        // Ask about association because it's still confusing

2.      
        // const models = require('./models/')

        // const getHunters = async () => {
        //         const hanSolo = await models.bounty.findOne({where: { name: 'Han Solo'}})
                
        //            console.log(hanSolo.getHunters())
                  
        //     }
        //     getHunters()

3. 
        //  const models = require('./models/')

        //  const getHunters = async () => {
        
        //     const bobbaFett = await models.hunter.findOne({where: { name: 'Bobba Fett'} })

        //        hanSolo.addHunters(bobbaFett)
              
        // }
        
        //Stopped here because I really don't get what I am doing with associations, many questions shall be asked!