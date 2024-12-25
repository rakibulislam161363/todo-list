const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click', e => {
  e.preventDefault();
  let inputvalue = input.value.trim();
  if (inputvalue == '') {
    alert('Your value is emty!');
    return;
  }
  let newList = document.createElement('li');
  newList.classList.add('lists');
  newList.textContent = inputvalue;


  // delete button er kaj

  let deletbtn = document.createElement('button');
  deletbtn.innerHTML = `<i class="fa fa-trash text-white text-xs mb-2"></i>`;
  deletbtn.classList.add('delete-btn');

  deletbtn.addEventListener("click", () => {
    list.removeChild(newList);
  });
  newList.appendChild(deletbtn);
  // delete button end

  // pencil button ar kaj

  let editbtn = document.createElement('button');
  editbtn.innerHTML = `<i class="fa fa-pencil text-white text-xs mb-2"></i>`;
  editbtn.classList.add('edit-btn');

  editbtn.addEventListener("click", () => {
    const newEdit = prompt("Edit your todo :", newList.textContent);
    if (newEdit) {
      newList.textContent = newEdit;
    }
  });

  newList.appendChild(editbtn);

  // check button ar kaj


  let cheak = document.createElement('button');
  cheak.innerHTML = `<i class="fa fa-check text-white text-xs mb-2"></i>`;
  const icon = cheak.querySelector("i");
  cheak.classList.add('cheak-btn');
  cheak.addEventListener("click", () => {
    newList.classList.toggle("strike");
    icon.classList.toggle("fa-rotate-right");
  });

  newList.appendChild(cheak);

  list.appendChild(newList);

  input.value = '';
});