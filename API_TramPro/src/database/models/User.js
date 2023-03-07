const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
           cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rua: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_casa: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foto: {
            type: DataTypes.BLOB,
        },
        data_cadastro: {
            type: DataTypes.DATE
        }
    },
        {
            tablename: "user",
            timestamps: false
        }
    )
    User.associate = function(models) {
        User.hasMany(models.Service, {
            as: "Service",
            foreignKey: "id"
        }),
        User.belongsTo(models.Hirer, {
            as: "Hirer",
            foreignKey: "id"
        })
    }
    return User
}