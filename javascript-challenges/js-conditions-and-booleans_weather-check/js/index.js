// Change this value to test different "weather" conditions.
const weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("its sunny");
    break;
  case "rainy":
    console.log("its rainy");
    break;
  case "snowy":
    console.log("its snowy");
    break;
  default:
    console.log("im not sure which wheather like");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (weather) {
  case "sunny":
    if (temperature > 21) {
      console.log("its sunny day");
    } else {
      console.log("its sunny but its bad");
    }
    break;
  case "rainy":
    if (temperature < 21) {
      console.log("its rainy day");
    } else {
      console.log("its rainy but its bad");
    }
    break;
  case "snowy":
    if (temperature < 0) {
      console.log("its snowy");
    } else {
      console.log("its snowy but its bad");
    }
    break;

  default:
    console.log("whathever wheater but not like i mention up");
}
