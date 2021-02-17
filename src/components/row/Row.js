import React,{useState,useEffect} from 'react'
import "./Row.css"
import axios from "../../axios"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

function Row({title, fetchUrl, isLargeRow= false }) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");


useEffect(() => {
   async function fetchData(){
       const request = await axios.get(fetchUrl);
       setMovies(request.data.records);
       return request;
   }
   fetchData();
}, [fetchUrl]);

const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,

    },
};

const handleClick =(movie)=>{
    if(trailerUrl){
        //if ak=lready open
        setTrailerUrl('');
    }else{
        /*movieTrailer(movie.fields?.title || "")
        .then((url)=>{
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));

        }).catch((error) => console.log(error));*/

        const urlMovie  = movie.fields.video;
        const urlParams = new URLSearchParams( new URL(urlMovie).search);
        setTrailerUrl(urlParams.get('v'));
        console.log(trailerUrl);
    }
}
    return (
        <div className="row">
             <h2 >{title} </h2>
            <div className="row__posters">
           
            {/* loop */}
                {movies.map(movie=>(
                    <img className="row__poster" key={movie.id}
                    onClick={()=> handleClick(movie)}
                    src={`${movie.fields.image[0].url}`} alt={movie.fields.title}/>
                ))}
        </div>
        {trailerUrl && 
        <Youtube videoId={trailerUrl} opts={opts}/>
       
        }
        </div>
    )
}

export default Row
