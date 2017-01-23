const Post = require("../models/laboratorio");

module.exports = {
    target: Post,
    columns: {
        ID_LABORATORIO: {
            primary: true,
            type: "int",
            generated: true
        },
        NOMBRE_LABORATORIO: {
            type: "string"
        },
    }
    
};
