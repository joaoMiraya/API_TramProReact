const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const GoogleUser = sequelize.define(
        "GoogleUser", {
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
        },
        telefone: {
            type: DataTypes.INTEGER,
        },
        cidade: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        rua: {
            type: DataTypes.STRING,
        },
        numero_casa: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
        },
        foto: {
            type: DataTypes.BLOB,
        },
        data_cadastro: {
            type: DataTypes.DATE
        },
        id_google: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tablename: "googleuser",
            timestamps: false
        }
    )
    GoogleUser.associate = function (models) {
        GoogleUser.hasMany(models.Service, {
            as: "Service",
            foreignKey: "id"
        }),
            GoogleUser.belongsTo(models.Hirer, {
                as: "Hirer",
                foreignKey: "id"
            })
    }
    return GoogleUser
}