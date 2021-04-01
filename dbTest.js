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

