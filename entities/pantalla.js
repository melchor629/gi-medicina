const Post = require("../models/pantalla");

const PantallaSchema = {
    target: Post,
    columns: {
        pantalla: {
            primary: true,
            type: "string",
        }
    }
};

module.exports = {
    PantallaSchema: PantallaSchema
};
