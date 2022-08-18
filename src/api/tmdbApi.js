import axiosClient from "./axiosClient";

export const catergory = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = catergory[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  getWatchProvider: (cate, id) => {
    const url = catergory[cate] + '/' + id + '/watch/providers';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = 'search/' + catergory[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = "/" + catergory[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = catergory[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = catergory[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
}

export default tmdbApi;