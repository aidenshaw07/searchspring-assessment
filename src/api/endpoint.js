const { VITE_API_URL, VITE_SITE_ID } = import.meta.env;
export const endpoint = `${VITE_API_URL}/api/search/search.json?siteId=${VITE_SITE_ID}&resultsFormat=native`;
