const Post = require("../models/pantalla");

module.exports = {
    target: Post,
    columns: {
        pantalla: {
            primary: true,
            type: "string",
        }
    }
};
