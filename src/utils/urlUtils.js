const BASE_URL = "https://aux-io-api.dev.novichkov.dev"
// const BASE_URL = "http://127.0.0.1:5000"

export const getGenerateUrl = (composer, numNotes) => {
    return `${BASE_URL}/generate?composerName=${composer}&numNotes=${numNotes}&rand=${Math.floor(Math.random() * 1000)}`;
}

export const getMp3FileUrl = (fileId) => {
    return `${BASE_URL}/get-file/${fileId}`;
}

export const getSampleMp3Url = (composer) => {
    return `${BASE_URL}/${composer}/sample`;
}

export const getComposersUrl = () => {
    return `${BASE_URL}/composers`;
}

