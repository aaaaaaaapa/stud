export const sortByFio = (arr) => {
    return arr.sort((a, b) => {
        return (a.lastName + a.firstName + a.patronymic).localeCompare(b.lastName + b.firstName + b.patronymic);
    });
}

export const sortByFacult = (arr) => {
    return arr.sort((a, b) => {
        return a.faculty.localeCompare(b.faculty);
    });
}

export const sortByBirth = (arr) => {
    return arr.sort((a, b) => {
        return a.birthdate - b.birthdate;
    });
}

export const sortByYear = (arr) => {
    return arr.sort((a, b) => {
        return a.startYear - b.startYear;
    });
}

export function applyFilters(arr) {

    const filterName = document.getElementById('filter-name').value.trim().toLowerCase();
    const filterFaculty = document.getElementById('filter-facult').value.trim().toLowerCase();
    const filterStartYear = parseInt(document.getElementById('start-year').value);
    const filterEndYear = parseInt(document.getElementById('end-year').value);

    return arr.filter((student) => {
        
        const fullName = `${student.lastName} ${student.firstName} ${student.middleName}`.toLowerCase();
        const startYearInRange = filterStartYear ? student.startYear === filterStartYear : true;
        const endYearInRange = filterEndYear ? student.startYear + 4 === filterEndYear : true;

        return fullName.includes(filterName) && student.faculty.toLowerCase().includes(filterFaculty) && startYearInRange && endYearInRange;
    
    });

}