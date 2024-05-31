import { getFormElements } from "./form.js";
import { sortByFio, sortByFacult, sortByBirth, sortByYear, applyFilters } from "./sort.js";
import { renderStudents } from "./table.js";

const studForm = document.getElementById('students');
const filters = document.getElementById('filters');

const fioHead = document.getElementById('fio');
const facultHead = document.getElementById('faculty');
const birthHead = document.getElementById('brth');
const yearHead = document.getElementById('stud-year');

let students = [

    {
        firstName: 'Имя',
        lastName: 'Фамилия',
        patronymic: 'Отчество',
        birthdate: new Date(),
        startYear: 2020,
        faculty: 'Факультет'
    }

];

const formSubmitHandle = (event) => {

    event.preventDefault();
    try {
        const newStudent = getFormElements(event.target);
        students.push(newStudent);
        renderStudents(students);
    }
    catch (error) {
        return alert(error);
    }
    event.target.reset();

}

studForm.addEventListener('submit', formSubmitHandle);
filters.addEventListener('input', () => renderStudents(applyFilters(students)));

fioHead.addEventListener('click', () => renderStudents(sortByFio(students)));
facultHead.addEventListener('click', () => renderStudents(sortByFacult(students)));
birthHead.addEventListener('click', () => renderStudents(sortByBirth(students)));
yearHead.addEventListener('click', () => renderStudents(sortByYear(students)));

document.addEventListener('DOMContentLoaded', () => {
    renderStudents(students);
});

