const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1", "Curso 2", "Curso 3"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

/* console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); */

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterreste",
  writable: true,
  enumerable: true,
  configurable: true,
});
