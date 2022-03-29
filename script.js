let elements = Array.from(document.getElementsByClassName("element"));

const atomicNumbers = [
  1, 3, 11, 19, 37, 55, 87, 4, 12, 20, 38, 56, 88, 21, 39, 22, 40, 72, 104, 23,
  41, 73, 105, 24, 42, 74, 106, 25, 43, 75, 107, 26, 44, 76, 108, 27, 45, 77,
  109, 28, 46, 78, 110, 29, 47, 79, 111, 30, 58, 80, 112, 5, 13, 31, 49, 81,
  113, 6, 14, 32, 50, 82, 114, 7, 15, 33, 51, 83, 115, 8, 16, 34, 52, 84, 116,
  9, 17, 35, 53, 85, 117, 2, 10, 18, 36, 54, 86, 118, 57, 58, 59, 60, 61, 62,
  63, 64, 65, 66, 67, 68, 69, 70, 71, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103,
];

elements.forEach((element, i) => {
  let atomicNumber = element.getElementsByClassName("atomic-number");
  atomicNumber[0].textContent = atomicNumbers[i];
});

/* 
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118
*/

const closeBtn = document.getElementById('x');

const alkaliMetal = document.getElementById("alkali");
const alkaliEarthMetal = document.getElementById("alkali-earth");
const lanthanoid = document.getElementById("lanthanoid");
const actinoid = document.getElementById("actinoid");
const transitionMetal = document.getElementById("transition");
const postTransitionMetal = document.getElementById("post-transition");
const metalloid = document.getElementById("metaloid");
const otherNonMetal = document.getElementById("other");
const nobleGas = document.getElementById("noble");
const halogen = document.getElementById("halogens");
const unknown = document.getElementById("unknown");

let alkaliEarthMetals = Array.from(
  document.getElementsByClassName("alkali-earth-metals")
);
let alkaliMetals = Array.from(document.getElementsByClassName("alkali-metals"));
let transitionMetals = Array.from(
  document.getElementsByClassName("transition-metals")
);
let postTransitionMetals = Array.from(
  document.getElementsByClassName("post-transition-metals")
);
let lanthanoids = Array.from(document.getElementsByClassName("lanthanoids"));
let actinoids = Array.from(document.getElementsByClassName("aktinoids"));
let otherNonMetals = Array.from(
  document.getElementsByClassName("other-non-metals")
);
let halogens = Array.from(document.getElementsByClassName("halogens"));
let nobleGases = Array.from(document.getElementsByClassName("noble-gases"));
let unknowns = Array.from(document.getElementsByClassName("other"));
let metalloids = Array.from(document.getElementsByClassName("metaloids"));

alkaliEarthMetal.addEventListener("click", () => {
  toggleBlur();
  alkaliEarthMetals.forEach((e) => {
    e.classList.remove("blurred");
  });
});

alkaliMetal.addEventListener("click", () => {
  toggleBlur();
  alkaliMetals.forEach((e) => {
    e.classList.remove("blurred");
  });
});

lanthanoid.addEventListener("click", () => {
  toggleBlur();
  lanthanoids.forEach((e) => {
    e.classList.remove("blurred");
  });
});
actinoid.addEventListener("click", () => {
  toggleBlur();
  actinoids.forEach((e) => {
    e.classList.remove("blurred");
  });
});
transitionMetal.addEventListener("click", () => {
  toggleBlur();
  transitionMetals.forEach((e) => {
    e.classList.remove("blurred");
  });
});
postTransitionMetal.addEventListener("click", () => {
  toggleBlur();
  postTransitionMetals.forEach((e) => {
    e.classList.remove("blurred");
  });
});
metalloid.addEventListener("click", () => {
  toggleBlur();
  metalloids.forEach((e) => {
    e.classList.remove("blurred");
  });
});
otherNonMetal.addEventListener("click", () => {
  toggleBlur();
  otherNonMetals.forEach((e) => {
    e.classList.remove("blurred");
  });
});
halogen.addEventListener("click", () => {
  toggleBlur();
  halogens.forEach((e) => {
    e.classList.remove("blurred");
  });
});
nobleGas.addEventListener("click", () => {
  toggleBlur();
  nobleGases.forEach((e) => {
    e.classList.remove("blurred");
  });
});
unknown.addEventListener("click", () => {
  toggleBlur();
  unknowns.forEach((e) => {
    e.classList.remove("blurred");
  });
});

const toggleBlur = () => {
  elements.forEach((element) => {
    if (element.className !== "blurred") {
      element.classList.add("blurred");
      document.body.classList.add('focused')
    } else if(element.className == 'blurred') {
      element.classList.remove("blurred");
      document.body.classList.remove('focused')
    }
  });
};

closeBtn.addEventListener('click', ()=>{
  elements.forEach((e)=>{
    e.classList.remove('blurred');
  })
  document.body.classList.remove('focused')
})