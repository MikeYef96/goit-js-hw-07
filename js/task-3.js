const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryRef = document.getElementById("gallery");
// images.forEach((image) => {
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `<li>
//       <img src = "${image.url}"  alt = "${image.alt}" width = "250px" height = "150px"/>
//     </li>`
//   );
// });
// galleryRef.style.display = "flex";
// console.log(galleryRef);
const galleryRef = document.getElementById("gallery");
images.forEach((image) => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", image.url);
  imgElement.setAttribute("alt", image.alt);
  imgElement.style.cssText = "width:350px; height:250px";
  liElement.append(imgElement);
  galleryRef.append(liElement);
});
galleryRef.style.display = "flex";
console.log(galleryRef);
//
//ПРИ КАЖДОМ ОБНОВЛЕНИИ СТРАНИЦЫ WIDTH & HEIGHT БУДУТ РАНДОМНЫМИ
// const randomWidthHeight = Math.floor(Math.random() * 500);
// imgElement.setAttribute("width", `${randomWidthHeight}px`);
// imgElement.setAttribute("height", `${randomWidthHeight}px`);
