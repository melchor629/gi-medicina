const Post = require("../models/medicamento");
const Category = require("../models/laboratorio");

const MedicamentoSchema = {
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
        }
    },

    relations: {
        LABORATORIO: {
            target: Category,
            type: "one-to-many",
            joinTable: true,
            cascadeInsert: true
        }
    }
};

module.exports = {
    MedicamentoSchema: MedicamentoSchema
};
