export const mapNetlifyPost = data => {
    const cardDataProps = [];

    data.data.allFile.edges.forEach(element => {
        const elementHtml = element.node.childMarkdownRemark.html;
        const elementData = element.node.childMarkdownRemark.frontmatter;

        cardDataProps.push({
            avatarImage: elementData.avatarImage,
            date: elementData.date,
            image: elementData.image,
            isBlog: true,
            isEvent: elementData.isEvent,
            name: elementData.author,
            text: elementHtml,
            title: elementData.title,
        });
    });

    return cardDataProps;
};
