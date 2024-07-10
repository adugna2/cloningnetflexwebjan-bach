import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import './Row.css';
import movieTrailer from 'movie-trailer'; 
import YouTube from 'react-youtube';
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchData();
  }, [fetchUrl ]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log('Error finding trailer:', error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      <div style={{ padding: '20px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div> 
    </div>
  );
}

export default Row;