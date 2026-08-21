const box = document.getElementById("box");
const add = document.getElementById("add");
const list = document.getElementById("list");
const count = document.getElementById("count");

function updateCount() {
  const items = list.querySelectorAll("li");
  let remaining = 0;

  items.forEach((item) => {
    if (item.style.textDecoration !== "line-through") {
      remaining++;
    }
  });

  count.textContent = remaining;
}

add.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = box.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";

  item.appendChild(removeBtn);
  list.appendChild(item);

  box.value = "";

  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    item.remove();
    updateCount();
  });

  item.addEventListener("click", () => {
    if (item.style.textDecoration === "line-through") {
      item.style.textDecoration = "";
    } else {
      item.style.textDecoration = "line-through";
    }

    updateCount();
  });

  updateCount();
});
