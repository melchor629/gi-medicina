const Post = require("../models/medicamento");
const Category = require("../models/laboratorio");

module.exports = {
    target: Post,
    columns: {
        ID_MEDICAMENTO: {
            primary: true,
            type: "int",
        },
        NOMBRE_MEDICAMENTO: {
            type: "string"
        },
        CANTIDAD_DISPONIBLE: {
            type: "int"
        },
        LABORATORIO: {
            type: "int"
        }
    },

    relations: {
        LABORATORIO: {
            target: "laboratorio",
            type: "many-to-one",
            joinTable: true,
            cascadeInsert: true
        }
    }
};
