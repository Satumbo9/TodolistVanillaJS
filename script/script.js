const addForm = document.forms["bookstoreform"];
const ul = document.querySelector(".list-of-the-books");

console.log("Form name is: ", addForm);

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("Form working!!");

  //Acessing the Input value
  const value = addForm.querySelector('input[id="bookname"]').value;
  //   console.log("Input value", value);

  if (value !== "") {
    //Creating elements
    const li = document.createElement("li");
    const bookTitle = document.createElement("span");
    bookTitle.textContent = value;
    const deleteBtn = document.createElement("span");
    li.classList.add("list-ctn");

    //Appending everything to the Li and giving each span a class Name

    li.appendChild(bookTitle);

    bookTitle.classList.add("book-title");

    li.appendChild(deleteBtn);
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "delete";

    //Final Appending to the main guy which is ul
    ul.appendChild(li);
    addForm.reset();
    console.log("UL selector", ul);
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    ul.removeChild(li);
  }

  if (e.target.className === "book-title") {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }

    console.log("BookName toggled");
  }
});
