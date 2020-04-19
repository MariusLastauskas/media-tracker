import { MONTHS } from './constants';

export const getDateString = input => {
    const date = new Date(input);
    const todayDate = new Date();

    const isToday =
        date.getMonth() === todayDate.getMonth() &&
        date.getDate() === todayDate.getDate();

    return isToday ? 'TODAY' : `${MONTHS[date.getMonth()]} ${date.getDate()}D`;
};
