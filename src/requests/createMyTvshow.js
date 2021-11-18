import APIURL from '../helpers/environment';
const createMyTvshow = async (tvshow, token) => {
    const response = await fetch(`${APIURL}/tvshow/create`, {
        method: 'POST',
        body: JSON.stringify({
            tvshow: tvshow
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        })
    })
    const json = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default createMyTvshow;