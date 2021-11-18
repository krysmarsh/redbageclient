import APIURL from '../helpers/environment';
const updateMyMusic = async (music, token) => {
    const response = await fetch(`${APIURL}/music/${music.id}`, {
        method: 'PUT',
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

export default updateMyMusic;