class User {
  constructor(id, name, username, website) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
  }
}

class Course {
  constructor(id, coursenum) {
    this.id = id;
    this.coursenum = coursenum;
  }
}

const lvarayut = new User('1', 'Varayut Lerdkanlayanawat', 'lvarayut', 'https://github.com/lvarayut/relay-fullstack');
const courses = [
  new Course('1', 'COMP-011-01'),
  new Course('2', 'COMP-011-02'),
  new Course('3', 'COMP-011-03'),
  new Course('4', 'COMP-011-04'),
  new Course('5', 'COMP-011-05'),
  new Course('6', 'COMP-040-01'),
  new Course('7', 'COMP-040-02'),
  new Course('8', 'COMP-040-03'),
  new Course('9', 'COMP-040-04'),
  new Course('10', 'COMP-040-05'),
  new Course('11', 'COMP-040-06'),
  new Course('12', 'ENG-022-01'),
  new Course('13', 'ENG-022-02')
];


function getUser(id) {
  return id === lvarayut.id ? lvarayut : null;
}

function getCourse(id) {
  return courses.find(w => w.id === id);
}

function getCourses() {
  return courses;
}

export {
  User,
  Course,
  getUser,
  getCourse,
  getCourses
};
