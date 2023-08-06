const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "65fff3f1ca3915522043b5d4108eb385",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
