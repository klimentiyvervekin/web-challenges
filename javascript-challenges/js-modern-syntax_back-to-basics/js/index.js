/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

export function getNameAndCountry(city) {
  const name = city.name;
  const country = city.country;
  return [name, country];
}
// console.log(getNameAndCountry({ name: "Paris", country: "France" }));

export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};

export function getRelocatedCity(city1, city2) {
  if (city2 == null) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  const arr = getNameAndCountry(city2);
  const country = arr[1];

  const result = {};
  for (var key in city1) {
    if (Object.prototype.hasOwnProperty.call(city1, key)) {
      result[key] = city1[key];
    }
  }

  result.country = country;

  return result;
}
