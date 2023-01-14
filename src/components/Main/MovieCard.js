import React, { useState } from 'react'
import { ACTIONS } from './Home'


import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'

function MovieCard({
    id,
    title,
    category,
    likes,
    dislikes,
    dispatch,
    image,
    hidden
}) {


    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)

    const [likes$, setLikes] = useState(likes)
    const [dislikes$, setDislikes] = useState(dislikes)

    // Calcule et renvoie le pourcentage de likes ou de dislikes 
    function likesPercentage(likes, dislikes) {
        const total = likes + dislikes
        const likesPercentage = (likes / total) * 100

        return likesPercentage.toString() + '%'
    }

    function dislikesPercentage(likes, dislikes) {
        const total = likes + dislikes
        const dislikesPercentage = (dislikes / total) * 100

        return dislikesPercentage.toString() + '%'
    }

    function deleteMovie() {
        dispatch({
            type: ACTIONS.DELETE_MOVIE,
            payload: { id: id }
        })
    }


    // toggle like dislike
    function updateLikes() {

        if (likeActive) {
            setLikeActive(false)
            setLikes(likes$ - 1)
        } else {
            setLikeActive(true)
            setLikes(likes$ + 1)

            if (dislikeActive) {
                setDislikeActive(false)
                setDislikes(dislikes$ - 1)
            }
        }
    }

    // toggle dislike like
    function updateDislikes() {
        if (dislikeActive) {
            setDislikeActive(false)
            setDislikes(dislikes$ - 1)
        } else {
            setDislikeActive(true)
            setDislikes(dislikes$ + 1)

            if (likeActive) {
                setLikeActive(false)
                setLikes(likes$ - 1)
            }
        }
    }


    return (
        <div
            style={hidden ? { display: 'none' } : { display: 'flex' }}
            className='rounded-md drop-shadow-md bg-slate-50 overflow-hidden xs:flex-col h-[30vw] xs:h-fit'>
            <img src={image} alt="film poster" className=' h-full xs:h-[30vw] sm:h-[15vw] lg:h-[10vw] w-1/2 xs:w-full object-cover' />

            {/* description */}
            <div className='flex flex-col justify-between p-2 space-y-6 w-full text-xs sm:text-sm md:text-base'>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className=' font-semibold'>{title}</h2>
                        <p className='text-gray-500'>{category}</p>
                    </div>
                    <BsTrashFill
                        onClick={deleteMovie}
                        className='text-lg md:text-xl text-slate-500 hover:cursor-pointer hover:scale-125 transition-all' />
                </div>


                {/* notation */}
                <div className="flex flex-col items-center w-full mx-auto">

                    {/* barre likes dislikes */}
                    <div className='score-bar flex w-full relative hover:cursor-pointer py-2'>
                        <div
                            style={{ width: likesPercentage(likes$, dislikes$) }}
                            className='h-1 bg-blue-500'>
                        </div>
                        <div
                            style={{ width: dislikesPercentage(likes$, dislikes$) }}
                            className='h-1 bg-slate-300'>
                        </div>

                        {/* pop up likes dislikes info */}
                        <div className='score-pop-up absolute bottom-5 w-full invisible opacity-0'>
                            <p className='text-gray-500 p-2 rounded-full shadow-md bg-white m-auto w-fit'>
                                {likes$} Likes / {dislikes$} Dislikes
                            </p>
                        </div>
                    </div>

                    {/* Boutons likes et dislikes */}
                    <div className='flex justify-between items-center w-full text-sm'>
                        {
                            likeActive ? <AiFillLike onClick={updateLikes} className='hover:cursor-pointer transition-all text-blue-500' />
                                : <AiFillLike onClick={updateLikes} className='hover:cursor-pointer transition-all text-slate-500 hover:text-blue-500' />
                        }

                        {
                            dislikeActive ? <AiFillDislike onClick={updateDislikes} className='hover:cursor-pointer transition-all text-slate-300' />
                                : <AiFillDislike onClick={updateDislikes} className='hover:cursor-pointer transition-all text-slate-500 hover:text-slate-300' />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard