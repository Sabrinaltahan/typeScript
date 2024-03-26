
interface CourseInfo {
    code: string;
    name: string;
    progression: 'A' | 'B' | 'C';
    syllabus: string;
}

const courseForm11 = document.getElementById('course-form') as HTMLFormElement;
const coursesList1 = document.getElementById('courses-list') as HTMLDivElement;


courseForm11.addEventListener('submit', function(event) {
    event.preventDefault();
    const code = (document.getElementById('code') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const progression = (document.getElementById('progression') as HTMLSelectElement).value as 'A' | 'B' | 'C';
    const syllabus = (document.getElementById('syllabus') as HTMLInputElement).value;

    // Create table row for the course
    const courseRow = document.createElement('tr');

    // Create table data cells for each field
    const codeCell = document.createElement('td');
    codeCell.textContent = code;
    courseRow.appendChild(codeCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    courseRow.appendChild(nameCell);

    const progressionCell = document.createElement('td');
    progressionCell.textContent = progression;
    courseRow.appendChild(progressionCell);

    const syllabusCell = document.createElement('td');
    syllabusCell.innerHTML = `<a href="${syllabus}" target="_blank">${syllabus}</a>`;
    courseRow.appendChild(syllabusCell);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteCourse(courseRow);
    });
    const deleteButtonCell = document.createElement('td');
    deleteButtonCell.appendChild(deleteButton);
    courseRow.appendChild(deleteButtonCell);

    // Add the course row to the courses table
    coursesList1!.appendChild(courseRow);

    // Clear form fields
    courseForm11.reset();
});



// Function to delete course
function deleteCourse(row: HTMLTableRowElement) {
    row.remove();
}

