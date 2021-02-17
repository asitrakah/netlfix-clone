const API_KEy = "keyiy8qts9Jrb6RTd";
const BASE_ID = "app13EMj5Cu4BWQBD";


const requests = {
    fetchAll: `${BASE_ID}/formation?api_key=${API_KEy}`,
    fetchCCC: `${BASE_ID}/formation?api_key=${API_KEy}&filterByFormula=SEARCH(%22CCC%22%2C+categorie)`,
    fetchLive: `${BASE_ID}/formation?api_key=${API_KEy}&filterByFormula=SEARCH(%22Live%22%2C+categorie)`

};

export default requests;