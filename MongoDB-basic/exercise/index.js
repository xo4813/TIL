
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost/exercise-basic",
    { useNewUrlParser: true }
  )
  .then(result => {
    console.log("mongoDB");
  })
  .catch(err => {
    console.log(err.message);
  });

//스키마 설정
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  author: String,
  tags: {
    type: String,
    validate: {
      validator: function (v) {
        const result = tags.every(tag => {tag.length > 0});
        return v && v, this.length > 0 && result;
      },
      message: 'A Course should have at least 1 tag'
    }
  },
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

/* CRUD */

async function getCourses() {
  console.log('***************************************');
  const courses = await Course

    // 퍼블릭 커서들만 
    .find({ isPublished: true, tags: 'backend' })
    //이름 오름차순으로 정렬,
    .sort({ name: 1 })
    .select({ name: 1, author: 1 })
  console.log(courses);
  console.log('=================================');
  console.log('=================================');
}

async function getCourses2() {
  const courses = await Course

    // 퍼블릭 커서들만 
    .find({ isPublished: true })
    .or([{ tags: 'frontend' }, { tags: 'backend' }])
    //이름 오름차순으로 정렬,
    .sort({ price: -1 })
    .select({ name: 1, price: 1 })
  console.log(courses);
  console.log('=================================');
  console.log('=================================');
}


async function getCourses3() {
  const courses = await Course

    // 퍼블릭 커서들만  
    // /<찾을 값>/i :  i는 대소문자 구분을 하지 않을 경우 붙인다.
    .find()
    .or([{ price: { $gte: 15 } }, { name: /.*js.*/i }])
    //이름 오름차순으로 정렬,
    .sort({ name: 1 })
    .select({ name: 1, price: 1 })
  console.log(courses);
  console.log('=================================');
  console.log('=================================');
}

async function getCoures(params) {

  const courses = await Course.find(params)

  console.log(courses);
}

async function updateCourse(id) {

  const courses = await Course.find({ _id: id });

  console.log(courses);

  if (!courses) return;

  courses.author = '태한';
  courses.tags = ['???'];

  const result = await courses.save();
  console.log(result)
}

async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });

  console.log(result);
}

async function createCourse() {
  const course = new Course({
    name: "a",

  })


  try {

    const result = await course.validate();

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}


try {
  //getCourses();
  //getCourses2();
  //getCourses3();

  //updateCourse('5a68fdc3615eda645bc6bdec');
  createCourse()

} catch (error) {
  console.log(error.message);
}




