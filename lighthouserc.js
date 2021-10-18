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
            target: 'lhci',
            serverBaseUrl: 'http://localhost:9001',
            token: '2023d290-5fe4-4546-8722-3f9380c18de5', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
        },
    },
};
