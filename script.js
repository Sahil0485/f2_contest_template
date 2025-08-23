/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((a) => {
    if (a.profession == "developer") {
      console.log(a);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(elm => {
    if (elm.profession == "developer") console.log(elm);
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  console.log(arr[3]);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((emp) => emp.profession != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "abc", age: "21", profession: "developer" },
    { id: 6, name: "def", age: "23", profession: "developer" },
    { id: 7, name: "xyz", age: "25", profession: "admin" },
  ];
  arr.push(...arr2);
  console.log(arr);
}
