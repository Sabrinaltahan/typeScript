var courseForm11 = document.getElementById('course-form');
var coursesList1 = document.getElementById('courses-list');
courseForm11.addEventListener('submit', function (event) {
    event.preventDefault();
    var code = document.getElementById('code').value;
    var name = document.getElementById('name').value;
    var progression = document.getElementById('progression').value;
    var syllabus = document.getElementById('syllabus').value;
    // Create table row for the course
    var courseRow = document.createElement('tr');
    // Create table data cells for each field
    var codeCell = document.createElement('td');
    codeCell.textContent = code;
    courseRow.appendChild(codeCell);
    var nameCell = document.createElement('td');
    nameCell.textContent = name;
    courseRow.appendChild(nameCell);
    var progressionCell = document.createElement('td');
    progressionCell.textContent = progression;
    courseRow.appendChild(progressionCell);
    var syllabusCell = document.createElement('td');
    syllabusCell.innerHTML = "<a href=\"".concat(syllabus, "\" target=\"_blank\">").concat(syllabus, "</a>");
    courseRow.appendChild(syllabusCell);
    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteCourse(courseRow);
    });
    var deleteButtonCell = document.createElement('td');
    deleteButtonCell.appendChild(deleteButton);
    courseRow.appendChild(deleteButtonCell);
    // Add the course row to the courses table
    coursesList1.appendChild(courseRow);
    // Clear form fields
    courseForm11.reset();
});
// Function to delete course
function deleteCourse(row) {
    row.remove();
}
