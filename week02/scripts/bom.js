const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    // Code to execute when the element is clicked
    if (input.value.trim() !== " "){
        //6.Creating a listScriptures
        const listScriptures = document.createElement('li');
        //7. create a delete button
        const deleteButton = document.createElement('button');
        // Create span for scripture text
        const scriptureText = document.createElement('span'); 

        //8. Populate the listScriptures variable's textContent
        scriptureText.textContent = input.value; // Set scripture text
        //9. button with an x
        deleteButton.textContent = '❌';
        // Append scripture text span
        listScriptures.appendChild(scriptureText); 
        //10. appends the listScriptures with the delete button
        listScriptures.appendChild(deleteButton);
        //11.Append the li element variable to the unordered list in your HTML
        list.append(listScriptures);
        deleteButton.addEventListener('click', function () {
        list.removeChild(listScriptures);
        input.focus();
        });
        input.value = '';
        input.focus();

        }

  });

