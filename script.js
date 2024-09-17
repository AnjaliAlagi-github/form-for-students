const studentForm = document.getElementById("studentForm");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const studentDisplay = document.getElementById("studentDisplay");

let studentData = [];
let editIndex = null;

// Handle form submission (Create or Update)
function handleSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const studentId = document.getElementById("studentId").value;
    const college = document.getElementById("college").value;
    const subject = document.getElementById("subject").value;
    const marksType = document.getElementById("marksType").value;
    const marks = document.getElementById("marks").value;

    if (!name || !email || !studentId || !college || !subject || !marks) {
        alert("Please fill out all fields.");
        return;
    }

    const studentObj = { name, email, studentId, college, subject, marksType, marks };

    // If we're editing an existing entry, update it
    if (editIndex !== null) {
        studentData[editIndex] = studentObj;
        submitBtn.textContent = "Submit"; // Change button back to "Submit"
        editIndex = null;
    } else {
        // If it's a new entry, add to the array
        studentData.push(studentObj);
    }

    // Clear form fields after submission
    clearForm();
    // Display the updated data
    displayStudentData();
}

// Display student data with Edit and Delete options
function displayStudentData() {
    studentDisplay.innerHTML = ''; // Clear the display area

    studentData.forEach((student, index) => {
        const studentElement = `
            <div class="student-item">
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Student ID:</strong> ${student.studentId}</p>
                <p><strong>College:</strong> ${student.college}</p>
                <p><strong>Subject:</strong> ${student.subject}</p>
                <p><strong>Marks Type:</strong> ${student.marksType}</p>
                <p><strong>Marks:</strong> ${student.marks}</p>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </div>
        `;
        studentDisplay.innerHTML += studentElement;
    });

    studentDisplay.style.display = studentData.length ? "block" : "none";
}

// Edit student data (populate the form with existing data)
function editStudent(index) {
    const student = studentData[index];

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("studentId").value = student.studentId;
    document.getElementById("college").value = student.college;
    document.getElementById("subject").value = student.subject;
    document.getElementById("marksType").value = student.marksType;
    document.getElementById("marks").value = student.marks;

    submitBtn.textContent = "Update"; // Change button to "Update"
    editIndex = index; // Set the current index for editing
}

// Delete student data
function deleteStudent(index) {
    studentData.splice(index, 1); // Remove the student from the array
    displayStudentData(); // Re-render the list of students
}

// Clear form fields
function clearForm() {
    studentForm.reset();
    submitBtn.textContent = "Submit"; // Reset button text to "Submit"
    editIndex = null; // Reset edit index
}

// Event listeners for buttons
submitBtn.addEventListener("click", handleSubmit);
clearBtn.addEventListener("click", clearForm);
