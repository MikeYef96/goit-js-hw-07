const categoriesRef = document.querySelectorAll(".item");
console.log(`List has - ${categoriesRef.length} categories`);

categoriesRef.forEach((item) => {
  const titleRef = item.querySelector("h2");
  const catHeaderItemRef = item.querySelectorAll("ul li");
  console.log(
    `Категория: ${titleRef.textContent}, Количество элементов: ${catHeaderItemRef.length}`
  );
});
