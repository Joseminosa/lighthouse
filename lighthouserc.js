module.exports = {
    ci: {
        collect: {
            url: [
                'https://kingandqueen.es/',
                'https://kingandqueen.es/mujer',
                'https://kingandqueen.es/hombre',
                'https://kingandqueen.es/rebajas'
            ],
            numberOfRuns: 3,
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'http://192.168.1.150:9001',
            token: 'f6e65a92-da3b-492a-acc1-62f7215d07f5', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
        },
    },
};
