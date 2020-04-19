import { MONTHS } from './constants';

export const getDateString = input => {
    const date = new Date(input);
    const todayDate = new Date();

    const isToday =
        date.getMonth() === todayDate.getMonth() &&
        date.getDate() === todayDate.getDate();

    return isToday ? 'TODAY' : `${MONTHS[date.getMonth()]} ${date.getDate()}D`;
};

const sortFunction = (a, b) => {
    return b._date.getTime() - a._date.getTime();
};

export const sortPosts = posts => {
    return posts.sort(sortFunction);
};
