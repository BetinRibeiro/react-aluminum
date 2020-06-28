import axios from 'axios'

const api = axios.create({ baseURL: 'https://rogoberto.pythonanywhere.com/aluminum/acesso/api/' });

export default api;