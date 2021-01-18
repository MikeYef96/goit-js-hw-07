const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listItemRef = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = item;
  listItemRef.append(newListItem);
});

console.log(listItemRef);
