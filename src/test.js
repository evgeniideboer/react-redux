const Test = () => {
  var a = {
    name: "it-kamasutra",
    protocol: "https",
    maxStudendsCount: 10,
    isOnline: true,
    students: ["ivan", "andrey", "farid"],
    classroom: {
      teacher: {
        name: "wew",
        age: 18,
      },
    },
  };
  var b = { ...a };
  //   var b = a;
  console.log(a === b);
  //   b.name = "it-inkubator";
  //   b.isOnline = false;
  //   b.students.push("Marry");
  //   b.classroom.teacher.name = "Dmitry";
  //   console.log(b);
  b.classroom = { ...a.classroom };
  b.classroom.teacher = { ...a.classroom.teacher };
  b.students = { ...a.students };
  b.classroom.teacher.name = "Dmitry";
  console.log(a);
  console.log(a.students[0] === b.students[0]);
  return "test";
};

export default Test;
