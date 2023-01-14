import React, { useEffect, useState, useReducer, useRef } from 'react'
import { movies$ } from '../../movies'


import MultiselectComponents from './MultiselectComponents'

import MovieCard from './MovieCard'
import Pagination from './Pagination'

export const ACTIONS = {
    GET_MOVIES: 'get-movies',
    GET_MOVIES_BY_CATEG: 'get-movies-by-categ',
    DELETE_MOVIE: 'delete-movie',
    TOGGLE_LIKE: 'toggle-like',
    TOGGLE_DISLIKE: 'toggle-dislike',
}

export const Home = () => {

    function reducer(movies, action) {
        switch (action.type) {
            case ACTIONS.GET_MOVIES:
                setAllMovies(action.payload.response)
                return movies = action.payload.response

            case ACTIONS.DELETE_MOVIE:
                movies = movies.filter(movie => movie.id !== action.payload.id)
                setAllMovies(allMovies.filter(movie => movie.id !== action.payload.id))
                return movies

            case ACTIONS.GET_MOVIES_BY_CATEG:
                movies = allMovies.filter(movie => {
                    return action.payload.categories.indexOf(movie.category) !== -1
                })
                setCurrentPage(1)
                return movies
            default:
                return movies
        }
    }

    const [allMovies, setAllMovies] = useState([])
    const [moviesPerPage, setMoviesPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    const categories = []
    const multiselectRef = useRef()

    const [movies, dispatch] = useReducer(reducer, [])


    // Récupère les films
    const getMovies = async () => {
        const response = await movies$
        dispatch({ type: ACTIONS.GET_MOVIES, payload: { response: response } })

    }


    // Récupère les catégorie
    function getCategories() {
        allMovies && allMovies.map((m) => {
            // vérifie si la catégorie à push est déja dans le tableau
            categories.indexOf(m.category) === -1 && categories.push(m.category)
        })
        return categories
    }


    useEffect(() => {
        getMovies()
    }, [])


    // Rcupère les films par catégories
    function getMoviesByCategories() {
        let categories = multiselectRef.current.getSelectedItems()
        multiselectRef.current.resetSelectedValues();

        if (categories.length > 0) {
            dispatch({ type: ACTIONS.GET_MOVIES_BY_CATEG, payload: { categories: categories } })
        } else {
            alert('Vous devez sélectionner au moins une catégorie avant d\'effectuer une recherche')
        }
    }

    // Li'utilisateur choisit le nombre de films par pages 
    function updateMoviesPerPages(e) {
        setCurrentPage(1)
        return setMoviesPerPage(e)
    }


    // Récupère les films de la page active
    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const paginationMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

    // Pagination 
    function paginate(pageNumber) {
        return setCurrentPage(pageNumber)
    }
    function paginateNext() {
        return setCurrentPage(currentPage + 1)
    }
    function paginatePrev() {
        return setCurrentPage(currentPage - 1)
    }



    return (
        <div className='md:w-[744px] min-h-[90vh] m-auto px-3'>

            <MultiselectComponents
                getMoviesByCategories={getMoviesByCategories}
                updateMoviesPerPages={updateMoviesPerPages}
                categories={getCategories()}
                multiselectRef={multiselectRef}
            />

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 place-content-start">
                {
                    allMovies &&
                    allMovies.map((m) =>
                        <MovieCard
                            key={m.id}
                            id={m.id}
                            title={m.title}
                            category={m.category}
                            likes={m.likes}
                            dislikes={m.dislikes}
                            image={m.image}
                            dispatch={dispatch}
                            hidden={paginationMovies.indexOf(m) !== -1 && movies.indexOf(m) !== -1 ? false : true}
                        />

                    )
                }
            </div>
            <Pagination
                moviesPerPage={moviesPerPage}
                totalMovies={movies.length}
                currentPage={currentPage}
                paginate={paginate}
                paginateNext={paginateNext}
                paginatePrev={paginatePrev}
            />
        </div>
    )
}

 

