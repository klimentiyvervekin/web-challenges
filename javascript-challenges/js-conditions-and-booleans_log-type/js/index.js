console.log("clear");

let data = true;

switch (typeof data) {
  case "number":
    console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean");
  default:
    console.log("I have no idea!");
}
