module.exports = {
    ci: {
        collect: {
            url: [
                'https://kingandqueen.es/',
                'https://kingandqueen.es/mujer',
                'https://kingandqueen.es/hombre',
                'https://kingandqueen.es/rebajas'
            ],
            settings: {
                onlyCategories: ['accessibility']
            },
            numberOfRuns: 1,
        },
        upload: {
            target: 'kingandqueen',
            serverBaseUrl: 'http://localhost:9001',
            token: '7a44d893-c5e4-41d4-a5e5-0ec274664fad', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
        },
    },
};
