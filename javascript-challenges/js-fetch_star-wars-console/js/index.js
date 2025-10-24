console.clear();

async function fetchData() {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  console.log(data.results[7].skin_color);
}

fetchData();
