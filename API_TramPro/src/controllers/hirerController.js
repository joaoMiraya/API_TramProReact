const db = require('../database/models')

const Hirer = db.Hirer;

const hirerController = {
    list: (req, res) => {
        Hirer.findAll()
            .then(hirers => {
                res.status(200).json(hirers)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Hirer.findByPk(req.params.id)
            .then(hirers => {
                if (!hirers) {
                    res.status(404).json(hirers)
                } else {
                    res.status(200).json(hirers)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    findByUserId: (req, res) => {
        Hirer.findAll({
            where: {
                id_contratante: { [db.Sequelize.Op.eq]: `${req.params.id}` }
            }
        })
            .then(hirers => {
                if (!hirers) {
                    res.status(404).json(hirers)
                } else {
                    res.status(200).json(hirers)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const hirer = req.body
        try {
            await Hirer.create(hirer)
            res.status(201).json({ msg: 'Contratação finalizada com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        const hirer = req.body
        try {
            await Hirer.update(hirer, { where: { id } })
            res.status(201).json({ msg: 'Contratação alterada com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Hirer.destroy({ where: { id } })
            res.status(201).json({ msg: 'Contratação excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = hirerController;