module.exports = {
    ci: {
        collect: {
            url: ['https://google.com'],
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'http://localhost:9001',
            token: '2023d290-5fe4-4546-8722-3f9380c18de5', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
        },
    },
};
