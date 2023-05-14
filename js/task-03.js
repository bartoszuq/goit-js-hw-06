const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const liArr = [];

function galleryStyling(el) {
  gallery.style.listStyle = "none";
  gallery.style.display = "flex";
  gallery.style.alignItems = "center";
  gallery.style.padding = "0px";
  gallery.style.gap = "15px";
  gallery.style.height = "90vh";
}

function liStyling(el) {
  el.style.display = "flex";
  // const arr = ["start", "center", "end"];
  // for (const value of arr) {
  //   li.style.alignSelf = value;
  // }
}

function imgStyling(el) {
  el.style.width = "100%";
  el.style.display = "block";
  el.style.transition = "400ms ease-out";
}

images.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  li.append(img);
  liArr.push(li);
  // css styling
  liStyling(li);
  imgStyling(img);
  // console logs
  console.log(li);
  console.dir(img);
});
gallery.append(...liArr);
console.log(gallery);

galleryStyling();
