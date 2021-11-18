import APIURL from '../helpers/environment';
const fetchPublicMusic = async () => {
    const response = await fetch(`${APIURL}/category/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    });
    const json = await response.json();

    return { status: response.status, json: json };
};

export default fetchPublicMusic;
