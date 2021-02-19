module.exports = {
    base: "/",
    title: "Contacts",
    description: "Easily manage contacts and receive messages from customers",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        sidebar: [
            {
                title: "Getting Started",
                children: [
                    "/getting-started/installation",
                    "/getting-started/configuration",
                ]
            },
            {
                title: "Components",
                children: [
                    "/components/contactform",
                ]
            },
            ['features', 'Upcoming Features !'],
            ['screenshots', 'Screenshots']
        ],
        nav: [
            { text: "Guide", link: "/" },
            {
                text: "Marketplace",
                link: "https://octobercms.com/plugin/fytinnovations-contacts"
            },
            {
                text: "FYT innovations",
                link: "https://www.fytinnovations.com"
            }
        ],
        docsRepo: "fytinnovations/oc-contacts",
        editLinks: true,
        editLinkText: "Help us improve this page!"
    }
};