console.log("Solution 1:");
let group1 = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    self = this;
    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });
  },
};

group1.showList();

console.log("Solution 2:");
let group2 = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  },
};
group2.showList();

console.log("Solution 3:");
let group3 = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group3.showList();

console.log("Solution 4:");
let group4 = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    }, this);
  },
};
group4.showList();

console.log("Solution 5:");
let group5 = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],

  showList: function () {
    function show(student) {
      console.log(this.title + ": " + student);
    }
    this.students.forEach((student) => show.call(this, student));
  },
};
group5.showList();
