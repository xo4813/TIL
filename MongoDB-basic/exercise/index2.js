async function getCoures(params) {
    
    const course = await course.find(params)

    console.log(course);
}

async function updateCourse(id){

    const course = await course.findById(id)

    if(!course) return;

    course.author = '태한';
    course.tags = ['???'];

    const result = await course.save();
    console.log(result)
}

updateCourse('5a68fdc3615eda645bc6bdec');