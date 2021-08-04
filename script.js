const list = document.querySelector(".list");

const addListOfCountriesToDom = () => {
  removeList();
  const addListOfCountries = randomPersonData.map((country) => country.region);
  const sortedListOfCountries = [...new Set(addListOfCountries.sort())];
  // console.log("Alle landen: ", sortedListOfCountries);
  sortedListOfCountries.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    list.appendChild(newLi);
  });
};
// addListOfCountriesToDom();

document
  .querySelector(".landen")
  .addEventListener("click", addListOfCountriesToDom);

const removeList = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const addListOfCapricornWomenOverThirtyToDom = () => {
  removeList();
  const addListOfWomen = randomPersonData.filter(
    (person) => person.gender === "female" && person.age > 30
  );
  //   .map((person) => person.name + " " + person.surname + " ");
  // const sortedListOfWomen = addListOfWomen.sort();
  // console.log("Alle gesorteerde vrouwen:", sortedListOfWomen);
  addListOfWomen.forEach((person) => {
    const newLi = document.createElement("li");
    const newImage = document.createElement("img");
    newImage.src = person.photo;
    newLi.innerHTML = person.name + " " + person.surname + " ";
    list.appendChild(newLi);
    newLi.appendChild(newImage);
  });
  const nameSurname = addListOfWomen.map(
    (person) => person.name + " " + person.surname + " "
  );
  nameSurname.sort();
  console.log("Alle gesorteerde vrouwen:", nameSurname);
};

document
  .querySelector(".vrouwen")
  .addEventListener("click", addListOfCapricornWomenOverThirtyToDom);
