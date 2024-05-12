const tableBody = document.getElementById('table-body');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function calculateAge(birthdate) {
    let age = currentYear - birthdate.getFullYear();
    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    return age; 
}

function calculateCourse(startYear) {

    const currYear = currentDate.getMonth() > 8 ? currentYear : currentYear - 1;
    const course = currYear - startYear + 1;
    return course > 4 ? 'закончил' : course + ' курс';

}

export const renderStudents = (arr) => {

    tableBody.innerHTML = '';
    
    arr.forEach((student) => {

        const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.lastName} ${student.firstName} ${student.patronymic}</td>
                <td>${student.faculty}</td>
                <td>${student.birthdate.toLocaleDateString()} (${calculateAge(student.birthdate)} лет)</td>
                <td>${student.startYear}-${student.startYear + 4} (${calculateCourse(student.startYear)})</td>`;
            tableBody.append(row);

    });

}

