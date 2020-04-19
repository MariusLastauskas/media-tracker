export const FILTER_BUTTONS_PROPS = [
    {
        filterFunction: post => true,
        label: 'All',
        name: 'All',
    },
    {
        filterFunction: post => post.isEvent,
        label: 'Events',
        name: 'Events',
    },
    {
        filterFunction: post => post.isBlog,
        label: 'Blog',
        name: 'Blog',
    },
    {
        filterFunction: post => !post.isBlog,
        label: 'Social',
        name: 'Social',
    },
];
