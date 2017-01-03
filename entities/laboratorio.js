const Post = require("../models/laboratorio");

const LaboratorioSchema = {
    target: Post,
    columns: {
        ID_LABORATORIO: {
            primary: true,
            type: "int",
        },
        NOMBRE_LABORATORIO: {
            type: "string"
        },
    }
    
};

module.exports = {
    LaboratorioSchema: LaboratorioSchema
};
