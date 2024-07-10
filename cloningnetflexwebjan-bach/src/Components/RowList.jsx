import requests from "../Components/utils/requests"
import Row from "./row/Row"
function RowList() {
  return (
    <>
      <Row title="NetflixOriginals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="Trending Now"
      fetchUrl={requests.fetchTrending} />
       <Row title="TopRated"fetchUrl={requests.fetchTopRatedMovies} />
       <Row title="Action"fetchUrl={requests.fetchActionMovies} />
       
       <Row title="Comedy"fetchUrl={requests.fetchComedyMovies} />
       
       <Row title="Horror"fetchUrl={requests.fetchHorrorMovies} />
     
      <Row title="Romance"fetchUrl={requests.fetchRomanceMovies}/>
      
      <Row title="Documentary"fetchUrl={requests.fetchDocumentaryMovies}/>
      
      <Row title="PopularTvShow"fetchUrl={requests.fetchPopularTvShows}/>
    </>
  )
}

export default RowList