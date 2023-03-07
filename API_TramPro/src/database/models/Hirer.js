const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Hirer = sequelize.define(
        "Hirer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_servico: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_servico: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data_pagamento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        numero_cartao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome_cartao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        validade_cartao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_contratante: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tablename: "hirer",
            timestamps: false
        }
    )
    Hirer.associate = function (models) {
        Hirer.belongsTo(models.Service, {
            as: "Service",
            foreignKey: "id_servico"
        })
        Hirer.hasMany(models.User, {
            as:"User",
            foreignKey: "id"
        })
    }
    return Hirer;
}