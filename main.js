/* const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  },
};

function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      // copySubject[key] = deepCopy(subject[key])
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
} */

function requiredParam(param) {
  throw new Error("El parámetro " + param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email,
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    /* changeName(newName) {
      private["_name"] = newName;
    },
    readName() {
      return private["_name"];
    }, */

    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName.length) private._name = newName;
      else console.warn("Tu nombre debe de tener al menos un carácter");
    },
  };

  /* Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });

  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  }); */

  return public;
}

const juan = createStudent({
  name: "Juanito",
  age: 18,
  email: "juan@juan.com",
  twitter: "fjuandc",
});
