import { Track } from './track.model';
const API_URL = 'https://api.soundcloud.com';
const CLIENT_ID = 'KJMNWGMczDAEDm2ezWCbt5kCYZzcr92P';
const USER_ID = '146150487';

function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        });
}

function addUrlClientParams(url: string): string {
    return `${url}?client_id=${CLIENT_ID}`
}

const getTracks = () => {
    const urlWithCreds = addUrlClientParams(`${API_URL}/users/${USER_ID}/favorites`);
    return api<Track[]>(urlWithCreds);
};

export { getTracks, addUrlClientParams };

