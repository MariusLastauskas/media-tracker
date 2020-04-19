import { NETLIFY_POST_AUTHOR, NETLIFY_POST_AVATAR } from './constants';
import { getDateString } from './utils';

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
