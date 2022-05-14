export default async function handler(req, res) {
    const { params } = req.query;
    const path = params ? params.join('/') : '';
    const API_BASE = 'https://disease.sh/v3/covid-19/';
    const requestUrl = `${API_BASE}${path}`;
    const data = await fetch(requestUrl)
        .then((response) => response.json())
        .catch(() => 'Error processing request.');

    res.json(data);
}
