const models = require('./models/')
    -- - 1-- -
    // models.bounties.create({
    //     name: 'Han Solo',
    //     wantedFor: 'Owing Money',
    //     reward: 500000,
    //     captured: false
    // })
    -- - 2-- -
    // models.hunters.create({
    //     name: 'Boba Fett',
    //     client: 'Jabba the Hut',
    //     active: true

    // })
    -- - 3-- --
    // models.hunters.create({
    //     name: 'Dengar',
    //     client: 'Mercurial Swift',
    //     active: false
    // })
    -- - 4-- -
    // const allBounty = async() => {
    //     const bounty = await models.bounties.findAll()
    //     console.log(bounty)
    // }
    // allBounty()
    -- - 5-- -
    // let allHunters = async() => {
    //     let hunterActive = await models.hunters.findAll({
    //         where: { active: true }
    //     })
    //     console.log(hunterActive)
    // }
    // allHunters()
    -- - 6-- -
    // let updateSanHolo = async() => {
    //     let sanHolo = await models.bounties.findOne({
    //         where: {
    //             captured: false
    //         }
    //     })
    //     console.log(sanHolo)
    //     sanHolo.update({
    //         captured: true
    //     })
    // }
    // updateSanHolo()
    -- - 7-- -
    // const deleteDenger = async() => {
    //     let dengar = await models.hunters.destroy({
    //         where: {
    //             name: 'Dengar'
    //         }
    //     })
    //     console.log(dengar)
    // }
    // deleteDenger()
    -- - 8-- -
    // models.hunters.create({
    //     name: 'Dengar',
    //     client: 'Mercurial Swift',
    //     active: false
    // })

    // queryInterface.addColumn('hunters', 'bountyId', { type: Sequelize.DataTypes.INTEGER }).then(res => { console.log(res) })

    -- - 1-- -
    // Let findHansolo = async() => {
    //     let MrSolo = await models.bounties.findOne({
    //         where: {
    //             name: 'Han Solo'
    //         }
    //     })
    //     let MrFett = await models.hunters.findOne(
    //         where: {
    //             name: 'Boba Fett'
    //         }
    //     )

    // }
    // findHansolo()
    -- - 2-- -
    // Let findHansolo = async() => {
    //     let MrSolo = await models.bounties.findOne({
    //         where: {
    //             name: 'Han Solo'
    //         }
    //     })
    //     let hanHunter = await hanSolo.getHunters()
    //     console.log(hanHunter);

    // }

    // findHansolo()
    -- - 3-- -
    // let findBobba = async() => {
    //     let mrFett = await models.hunters.findOne({
    //         where: {
    //             name: 'Bobba Fett'
    //         }
    //     })
    //     console.log(mrFett)

    //     let bobbaBounty = await bobbaFett.getBounty()
    //     console.log(bobbaBounty)
    // }
    // findBobba()
    -- - 4-- -
    // hanSolo.addHunters.create({
    //             name: 'Dengar',
    //             client: 'Mercurial Swift',
    //             active: false
    -- - 5-- -
    // Let findHansolo = async() => {
    //     let MrSolo = await models.bounties.findOne({
    //         where: {
    //             name: 'Han Solo'
    //         }
    //     })
    //     let hanHunter = await hanSolo.getHunters()
    //     console.log(hanHunter)

    //     let bobbaFett = await models.hunters.findOne({
    //         where: { name: 'bobba fett' }
    //     })
    //     let findFett = await bobbaFett.getBounty()
    //     console.log(findFett)

    //     let findDengar = await models.hunters.findOne({
    //         where:{name:'Dengar'}
    //     })
    //     let findDengar = await denger.getBounty()
    //     console.log(findDengar)

    // }

    // findHansolo()
    -- - 6-- -
    // let Dengar = async => {
    //     let findDengar = await models.hunters.findOne({
    //         where: { name: 'Dengar' }

    //     })
    //     let findDengar = await denger.getBounty()
    //     console.log(findDengar)
    // }