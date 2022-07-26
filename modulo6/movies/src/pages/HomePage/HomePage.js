// React
import React, { useState } from "react";

// Components
import CardFilters from "../../components/CardFilters";
import CardMovies from "../../components/CardMovies";

// Router
import { goToDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

// Urls
import { api_key, url_genres } from "../../constants/urls";
import { url_popular } from "../../constants/urls";
import { url_images } from "../../constants/urls";
// import dotenv from 'dotenv'
// dotenv.config()
// const api_key = process.env.api_key;

// Requests
import useRequestData from "../../hooks/useRequestData";

// Style
import { FilterContainer, ParPhrase, ParFilter, MovieContainer, FilterButtonContainer } from "./styled"

const HomePage = () => {

    // States and Constants 
    const navigate = useNavigate()
    
    let [genreSelect, setGenreSelect] = useState([])

    // Requests
    const movies = useRequestData({}, `${url_popular}${api_key}`).results
    // console.log(movies)

    const genres = useRequestData({}, `${url_genres}${api_key}&language=en-US`).genres

    // Functions
    const onClickCard = (id) => {
        goToDetailsPage(navigate, id)
    }

    const onClickGenres = ((id) => {
        let newGenre = [...genreSelect]
        if (genreSelect.includes(id)) {
            newGenre = newGenre.filter(remove => remove !== id);
        } else {
            newGenre.push(id)
        }
        setGenreSelect(newGenre)

    })
    // Render
    const GenresMap = genres && genres.map((genre) => {
        return (
            <CardFilters
                key={genre.id}
                name={genre.name}
                setGenreSelect={onClickGenres}
                id={genre.id}
                selected = {genreSelect.includes(genre.id)}
            />
        )
    })

    const MoviesMap = movies && genreSelect &&
        movies
            .filter((movie) => {
                console.log(genreSelect, movie.genre_ids)
                if(genreSelect.length === 0) {
                    return movie
                } else {   
                    return genreSelect.every((genre) =>{
                        return movie.genre_ids.includes(genre)
                    })                
                    
            }
            })
            .map((movie) => {
                return (
                    <CardMovies
                        key={movie.id}
                        poster={`${url_images}${movie.poster_path}`}
                        title={movie.original_title}
                        release={movie.release_date}
                        onClick={() => onClickCard(movie.id)}
                    />
                )
            })



    return (
        <div>
            <FilterContainer>
                <ParPhrase>Here are the most popular titles today. Explore and enjoy!</ParPhrase>
                <ParFilter>Filter Options:</ParFilter>
                <FilterButtonContainer>
                    {GenresMap}
                </FilterButtonContainer>
            </FilterContainer>

            <MovieContainer>
                {MoviesMap}
            </MovieContainer>


        </div>
    )
}

export default HomePage