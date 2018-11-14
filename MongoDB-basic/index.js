const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost/hello-mongo",
    { useNewUrlParser: true }
  )
  .then(result => {
    console.log("mongoDB");
  })
  .catch(err => {
    console.log(err.message);
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

/* CRUD */

async function createCourse() {
  const course = new Course({
    name: "실전 DAPP 빌드",
    author: "neo",
    tags: ["Ethereum", "Blockchain", "DApp"],
    isPublished: false
  });
}

try {
  // const result = await course.save();
  //console.log(result);
} catch (error) {}

async function getCourses() {
  const courses = await Course.find({ isPublished: true })
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
/* 비교 쿼리 연산자 
$eq (equal)
$neq (not equal)
$gt (greater than)
$gts ()
$lt (less than)
$lte
$in
$nin

/* 논리 쿼리 연산자 
    .or
        Course
            .find()
            .and({})


*/

async function updateCourse(id) {
  const courses = await Course.findById(id);

  console.log(courses);

  if (!courses) return;

  courses.author = "태한";
  courses.tags = ["???"];

  const result = await courses.save();
  console.log(result);
}

async function updateCourses() {
  const result = await Course.update(
    { isPublished: true },
    {
      $set: {
        author: "태한"
      }
    }
  );

  console.log(result);
}

async function updateCourses(id) {
  const result = await Course.updateMany(
    { isPublished: true },
    {
      $set: {
        author: "태한"
      }
    }
  );

  console.log(result);
}



try {
  updateCourses();
  //updateCourse('5bea6379911ef221084c2d58');
  //getCourses();
} catch (error) {
  console.log(error.message);
}
