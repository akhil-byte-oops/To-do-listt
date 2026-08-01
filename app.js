let btn = document.querySelector("button");
let list = document.getElementById("list");
btn.addEventListener("click", () => {
let inp = document.querySelector("input");
let li = document.createElement("li");
li.innerText=inp.value;
list.appendChild(li);
  inp.value = "";
  let dltbtn = document.createElement("button");
  dltbtn.innerText ="Delete";
  dltbtn.classList.add("Delete");
  li.appendChild(dltbtn);
});
list.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        event.target.parentElement.remove();
    }
});