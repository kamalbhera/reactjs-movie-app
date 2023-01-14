import React from 'react'

import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'

function Pagination({
    moviesPerPage,
    totalMovies,
    currentPage,
    paginateNext,
    paginatePrev
}) {

    const pageNumbers = []
    const totalPages = Math.ceil(totalMovies / moviesPerPage)

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className='flex items-center w-fit m-auto space-x-4 my-20'>
            {
                currentPage !== 1 ?
                    <button className='p-2 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all' onClick={() => paginatePrev()}>
                        <GrFormPrevious />
                    </button>
                    : <button disabled={true} className='p-2 rounded-2xl bg-slate-200'>
                        <GrFormPrevious />
                    </button>
            }

            {
                currentPage + 1 > totalPages ?
                    <button disabled={true} className='p-2 rounded-2xl bg-slate-200'>
                        <GrFormNext />
                    </button>
                    : <button className='p-2 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all' onClick={() => paginateNext()}>
                        <GrFormNext />
                    </button>
            }

        </nav>
    )
}

export default Pagination