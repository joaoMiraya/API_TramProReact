const db = require('../database/models')

const Service = db.Service;

const serviceController = {
    list: (req, res) => {
        Service.findAll()
            .then(services => {
                res.status(200).json(services)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        Service.findByPk(req.params.id)
            .then(services => {
                if (!services) {
                    res.status(404).json(services)
                } else {
                    res.status(200).json(services)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    findByUserId: (req, res) => {
        Service.findAll({
            where: {
                id_contratante: { [db.Sequelize.Op.eq]: `${req.params.id}` }
            }
        })
            .then(services => {
                if (!services) {
                    res.status(404).json(services)
                } else {
                    res.status(200).json(services)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const service = req.body
        try {
            await Service.create(service)
            res.status(201).json({ msg: 'Serviço finalizado com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        const service = req.body
        try {
            await Service.update(service, { where: { id } })
            res.status(201).json({ msg: 'Serviço alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Service.destroy({ where: { id } })
            res.status(201).json({ msg: 'Serviço excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = serviceController;