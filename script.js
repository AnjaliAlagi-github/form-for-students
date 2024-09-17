const studentForm = document.getElementById("studentForm");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const studentDisplay = document.getElementById("studentDisplay");

let studentData = {};
let isEditMode = false;

// Function to handle form submission
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

    // Store the data in studentData object
    studentData = { name, email, studentId, college, subject, marksType, marks };

    // Display student data creatively in the form container
    displayStudentData();

    // After submitting, switch button to "Edit" mode
    submitBtn.textContent = "Edit";
    isEditMode = true;
}

// Function to display student data within the form container
function displayStudentData() {
    studentDisplay.innerHTML = `
        <p><strong>Name:</strong> ${studentData.name}</p>
        <p><strong>Email:</strong> ${studentData.email}</p>
        <p><strong>Student ID:</strong> ${studentData.studentId}</p>
        <p><strong>College:</strong> ${studentData.college}</p>
        <p><strong>Subject:</strong> ${studentData.subject}</p>
        <p><strong>Marks Type:</strong> ${studentData.marksType}</p>
        <p><strong>Marks:</strong> ${studentData.marks}</p>
        <button class="edit-btn" onclick="editStudent()">Edit Details</button>
    `;
    studentDisplay.style.display = "block";
}

// Function to edit student data (loads into form for editing)
function editStudent() {
    document.getElementById("name").value = studentData.name;
    document.getElementById("email").value = studentData.email;
    document.getElementById("studentId").value = studentData.studentId;
    document.getElementById("college").value = studentData.college;
    document.getElementById("subject").value = studentData.subject;
    document.getElementById("marksType").value = studentData.marksType;
    document.getElementById("marks").value = studentData.marks;
    
    // Switch back to submit mode
    submitBtn.textContent = "Submit";
    isEditMode = false;

    studentDisplay.style.display = "none";
}

// Clear the form fields
function clearForm() {
    studentForm.reset();
    submitBtn.textContent = "Submit";
    isEditMode = false;
    studentDisplay.style.display = "none";
}

// Event listeners for submit and clear buttons
submitBtn.addEventListener("click", handleSubmit);
clearBtn.addEventListener("click", clearForm);
