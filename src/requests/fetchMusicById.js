import APIURL from '../helpers/environment';
const fetchRecipeById = async (id, token) => {
    const response = await fetch(`${APIURL}/music/${id}`, {
        method: 'GET',
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

export default fetchRecipeById
