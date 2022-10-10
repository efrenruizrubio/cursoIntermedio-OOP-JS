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

// Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));

/* console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); */

/* Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterreste",
  writable: true,
  enumerable: true,
  configurable: true,
}); */

/* Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false,
}); */
