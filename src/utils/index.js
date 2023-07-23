export const fetchRecipes = async (filter) => {
  const api = {
    base: import.meta.env.VITE_BASE_URL,
    id: import.meta.env.VITE_APP_ID,
    key: import.meta.env.VITE_EDAMAM_API_KEY,
  };
  const { search, limit } = filter;

  const url = `${api.base}search?q=${search}&app_id=${api.id}&app_key=${api.key}&from=0&to=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
};
