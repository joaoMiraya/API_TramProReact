const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define(
        "Service", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estilo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keywords: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagem: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        id_usuario: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },
        {
            tablename: "service",
            timestamps: false
        }
    )
    Service.associate = function(models){
        Service.belongsTo(models.User, {
            as: "User",
            foreignKey: "id_usuario"
        }),
        Service.hasMany(models.Hirer, {
            as: "Hirer",
            foreignKey: "id"
        })
    }
    return Service;
}