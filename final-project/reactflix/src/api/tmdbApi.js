import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  upcoming: "upcoming",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoveiList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (category, id) => {
    const url = category[category] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  searchVideos: (category, params) => {
    const url = "search/" + category[category];
    return axiosClient.get(url, params);
  },
  detail: (category, id, params) => {
    const url = category[category] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (category, id) => {
    const url = category[category] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (category, id) => {
    const url = category[category] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
