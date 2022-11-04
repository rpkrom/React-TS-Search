const BASE_URL = import.meta.env.VITE_API_URL ?? `https://api.datamuse.com`;

export const fetchSynonyms = (word: string) => {
    return fetch(`${BASE_URL}/words?rel_syn=${word}`)
            .then((response) => response.json());
  };