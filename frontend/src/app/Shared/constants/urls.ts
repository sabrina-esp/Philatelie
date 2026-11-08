// The development proxy and production reverse proxy forward /api to the backend.
const BASE_URL = '';

export const Produit_URL = BASE_URL + '/api/produit';
export const Produit_BY_SEARCH_URL = Produit_URL + '/search/';
export const Produit_BY_ID_URL = Produit_URL + '/';
