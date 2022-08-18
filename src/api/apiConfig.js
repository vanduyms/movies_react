const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'c569069145828c11b1fb5d8376638cb0',
  originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;