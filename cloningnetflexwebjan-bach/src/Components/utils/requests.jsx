const API_KEY =`641dc0bf6a033e8260810d073f4cc9ba`
// process.env.REACT_APP_API_KEY;
console.log(API_KEY)
const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;







//const API_KEY = '641dc0bf6a033e8260810d073f4cc9ba';
// const API_KEY = import.meta.env.VITE_API_KEY;
// console.log(API_KEY)
// const requests = {
//   fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };

// export default requests;
// // const API_KEY = import.meta.env.VITE_API_KEY;
// // console.log(API_KEY);

// // const requests = {
// //   fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
// //   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// //   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// //   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// //   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// //   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// //   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// //   fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// //   fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// // };

// // export default requests;











