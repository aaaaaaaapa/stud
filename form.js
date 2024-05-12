export const getFormElements = (form) => {

    const { first, last, patronymic, birth, year, facult } = form.elements;

    if (new Date(birth.value) < new Date('1900-01-01') || new Date(birth.value) > Date.now()) {
        throw new Error('Неправильная дата рождения!');
    }
    if (Number(year.value) < 2000 || Number(year.value) > new Date().getFullYear()) {
        throw new Error('Неправильный год начала обучения');
    }

    return {

        firstName: first.value,
        lastName: last.value,
        patronymic: patronymic.value,
        birthdate: new Date(birth.value),
        startYear: Number(year.value),
        faculty: facult.value 

    }

}