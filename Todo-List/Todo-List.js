function AddTask()
{
	let messageAficher=document.getElementById("successMessage");
	let task=document.getElementById("todo").value.trim();//trime removes space befor and after the wroten value 
	if(task)
	{//true
		document.getElementById("taskList").innerHTML+=
					`<tr>
						<td><input type="checkbox" onclick="DONE(this)" /></td>
						<td class="taskname">${task}</td>
						<td><button class="deletestyle" onclick="deleteitem(this)">❌</button></td>
						<td><button class="editestyle" onclick="Edititem(this)">✏️</button></td>
					</tr>`;

		messageAficher.innerHTML="Todo item added successfully!";
		messageAficher.style.color="visible";
		messageAficher.style.color="green";
		  document.getElementById("todo").value = "";
	}
	else{//false=empty

		messageAficher.innerHTML="You Have to enter a valid Task!";
		messageAficher.style.visibility="visible";
		messageAficher.style.color="red";
	}
}
function deleteitem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function DONE(check) {
    let row = check.parentNode.parentNode;
	if(row)
	{
		if(check.checked)
		{
			row.style.textDecoration = "line-through"; 
			row.style.textDecorationColor = "#514d4d";
		}
		else{
			row.style.textDecoration = "none"; 
		}
		
	}
	
}
function Edititem(button) {
   
    // 1. Identify the task row and the task text element
    let row = button.parentNode.parentNode;
    let taskText = row.querySelector('.taskname');
    
    // 2. Create an input field and set its value to the current task text
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = taskText.textContent.trim();
    
    // 3. Replace the task text with the input field
    row.replaceChild(inputField, taskText);
    
    // 4. Create a save button
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = function() {
        // 5. Save the edited text and update the task
        taskText.textContent = inputField.value;
        row.replaceChild(taskText, inputField);
        row.removeChild(saveButton);
    };
    
    // 6. Append the save button to the row
    row.appendChild(saveButton);


}
