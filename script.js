document.addEventListener("DOMContentLoaded", function () {

    // CONTACT FORM
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all the fields.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been checked successfully.");

            contactForm.reset();
        });
    }

    // ACADEMIC PLANNER
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    if (addTask && taskInput && taskList) {
        addTask.addEventListener("click", function () {
            const task = taskInput.value.trim();

            if (task === "") {
                alert("Please enter a study task.");
                return;
            }

            const li = document.createElement("li");
            li.appendChild(document.createTextNode(task + " "));

            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete";

            completeBtn.addEventListener("click", function () {
                li.style.textDecoration = "line-through";
                li.style.color = "green";
                completeBtn.textContent = "Completed";
                completeBtn.disabled = true;
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = "";
        });
    }

});