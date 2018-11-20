const mongoose = require("mongose");

mongoose
    .connect("mongdb://localhost/relation", { useNewUrlParser: true })
    .then(result => { })
    .catch(err => { });

const Author = mongoose.model("Author", new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        require: true
    },
    github: String
})
);

const Course = mongoose.model("Course", new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
})
);

async function createAuthor(name, github) {
    const author = new Author({ name, github });

    try {
        const result = author.save();
        console.log(result);
    } catch (error) {
        console.error(error.messgae);
    }
}

async function createCourse(name, author) {
    const course = new Course({ name, author });
    const result = await course.save();
    console.log(reslt);
}

const id =
    createCourse('MongoDB & Mongoose', id);
createAuthor('neo', 'github')

async function listCourses() {
    const courses = await Course
    .find()
    .populate('author')
    .seletct('name');
    console.log(courses);
}
