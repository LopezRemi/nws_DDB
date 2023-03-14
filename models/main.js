const mongoose = require("mongoose");

const MainSchema = new mongoose.Schema(
    {
        titre:String,
        image:String,
        description:String,
        preparation:String,
    })
    
    const Main = mongoose.model("main",MainSchema);
    module.exports = Main