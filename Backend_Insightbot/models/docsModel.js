const mongoose = require("mongoose")

const docsSchema = new mongoose.Schema({
    docs_name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Docs", docsSchema);