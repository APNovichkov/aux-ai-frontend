const BASE_URL = "https://aux-io-api.dev.novichkov.dev"

export const getGenerateUrl = (composer, numNotes) => {
    return `${BASE_URL}/generate?composerName=${composer}&numNotes=${numNotes}&rand=${Math.floor(Math.random() * 1000)}`;
}

export const getComposersUrl = () => {
    return `${BASE_URL}/composers`;
}