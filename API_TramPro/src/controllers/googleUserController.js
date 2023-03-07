const db = require('../database/models');

const GoogleUser = db.GoogleUser;

const googleUserController = {
    list: (req, res) => {
        GoogleUser.findAll()
            .then(googleUsers => {
                res.status(200).json(googleUsers)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        GoogleUser.findByPk(req.params.id)
            .then(googleUsers => {
                if (!googleUsers) {
                    res.status(404).json(googleUsers)
                } else {
                    res.status(200).json(googleUsers)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const googleUser = req.body;
        try {
            await GoogleUser.create(googleUser)
            res.status(201).json({ msg: 'Perfil criado com sucesso!' })
        } catch (err) {
            res.status(400).json({ err})
        }
    },

    update: async (req, res) => {
        const id = req.params.id
        const googleUser = req.body
        try {
            await GoogleUser.update(googleUser, { where: { id } })
            res.status(201).json({ msg: 'Usuario alterado com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await GoogleUser.destroy({ where: { id } })
            res.status(201).json({ msg: 'Usuario excluído com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = googleUserController;