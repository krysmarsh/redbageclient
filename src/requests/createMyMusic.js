import APIURL from '../helpers/environment';
const createMyMusic = async (music, token) => {
    const response = await fetch(`${APIURL}/music/create`, {
        method: 'POST',
        body: JSON.stringify({
            music: music
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

export default createMyMusic;