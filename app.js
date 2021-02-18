let input = document.querySelector("#todo");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
  let txt = input.value;
  if (txt === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.appendChild(li);
  }
});
