const db = require('../database/models')

const User = db.User;

const userController = {
    list: (req, res) => {
        User.findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        User.findByPk(req.params.id)
            .then(users => {
                if (!users) {
                    res.status(404).json(users)
                } else {
                    res.status(200).json(users)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const user = req.body;
        try {
            await User.create(user)
            res.status(201).json({ msg: 'Perfil criado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err})
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const user = req.body
        try {
            await User.update(user, { where: { id } })
            res.status(201).json({ msg: 'Usuario alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await User.destroy({ where: { id } })
            res.status(201).json({ msg: 'Usuario excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = userController;