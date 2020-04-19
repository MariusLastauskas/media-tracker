import { MONTHS, NETLIFY_POST_AUTHOR, NETLIFY_POST_AVATAR } from './constants';

const getDateString = input => {
    const date = new Date(input);
    const todayDate = new Date();

    const isToday =
        date.getMonth() === todayDate.getMonth() &&
        date.getDate() === todayDate.getDate();

    return isToday ? 'TODAY' : `${MONTHS[date.getMonth()]} ${date.getDate()}D`;
};

export const mapNetlifyPost = data => {
    const cardDataProps = [];

    data.data.allFile.edges.forEach(element => {
        const elementHtml = element.node.childMarkdownRemark.html;
        const elementData = element.node.childMarkdownRemark.frontmatter;
        console.log(elementData);

        cardDataProps.push({
            avatarImage: NETLIFY_POST_AVATAR,
            date: getDateString(elementData.date),
            image: elementData.image,
            isBlog: true,
            isEvent: elementData.isEvent,
            showLikeCommentSection: elementData.showLikeCommentSection,
            name: NETLIFY_POST_AUTHOR,
            text: elementHtml,
            title: elementData.title,
        });
    });

    return cardDataProps;
};
