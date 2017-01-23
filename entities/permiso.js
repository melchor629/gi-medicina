const Post = require("../models/permiso");
const RolCategory = require("../models/rol");
const PantallaCategory = require("../models/pantalla");

module.exports = {
    target: Post,
    columns: {
        acceso: {
            type: "int",
        },
        modificacion: {
            type: "int"
        },
        pantalla: {
            primary: true,
            type: "string"
        }
        
    },

    relations: {
        rolName: {
            target: "rol",
            type: "many-to-one",
            joinTable: true,
            cascadeInsert: true,
            primary: true
        },

        pantalla: {
            target: "pantalla",
            type: "many-to-one",
            joinTable: true,
            cascadeInsert: true,
            primary: true 
        }
    }
};
