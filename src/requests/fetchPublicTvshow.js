import APIURL from '../helpers/environment';
const fetchPublicTvshow = async () => {
    const response = await fetch(`${APIURL}/tvshow/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    });
    const json = await response.json();

    return { status: response.status, json: json };
};

export default fetchPublicTvshow;
