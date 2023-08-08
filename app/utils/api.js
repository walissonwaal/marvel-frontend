import md5 from 'md5';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_API_PRIVATE_KEY;

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp) => md5(timeStamp+API_PRIVATE_KEY+API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async (response) => {
  if(!response.ok) {
    // throw new Error(response.statusText)
    console.log('Error.')
  }
  const data = await response.json();
  return data.data;
}

export const getCharacters = async () => {
  const url = `${API_BASE_URL}/characters?${query}`;
  const response = await fetch(url);
  return handleResponse(response);
}

export const detailCharacter = async (characterId) => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);
  return handleResponse(response);
}

export const searchCharacters = async (querySearch) => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`;
  const response = await fetch(url);
  return handleResponse(response);
}