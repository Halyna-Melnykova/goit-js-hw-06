const allCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", allCategoriesEl.length);

allCategoriesEl.forEach((el) => {
  const categoriesTitle = el.querySelector("h2");
  console.log("Category:", categoriesTitle.textContent);

  const lengthOfList = el.querySelectorAll("ul > li");
  console.log("Elements:", lengthOfList.length);
});
