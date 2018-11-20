const mongoose = require("mongose");



mongoose
    .connect("mongdb://localhost/relation", { useNewUrlParser: true })
    .then(result => { })
    .catch(err => { });



    
const autorSchem = new mongoose.Schema(
    {
        name:String, github: Stringd
    }
)

const Author = mongoose.model("Author", new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        require: true
    },
    github: String
})
);