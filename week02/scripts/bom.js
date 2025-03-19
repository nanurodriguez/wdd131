
const input = document.querySelector('scripture');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function() {
    // Code to execute when the element is clicked
    if (input.value.trim() !== " "){
        console.log("Please type your favorite scripture");
        const listScriptures = document.createElement('li');
        const deleteButton = document.createElement('button');

        list.textContent = input.value;
        deleteButton.textContent = '❌';

        listScriptures.appendChild(deleteButton);//Appends the li element variable with the delete button
        list.append(listScriptures);
            }
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            });
        input.value = '';
  });

