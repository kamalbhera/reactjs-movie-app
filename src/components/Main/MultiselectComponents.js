import React from 'react'

import { RiCloseLine } from 'react-icons/ri'

import Multiselect from 'multiselect-react-dropdown'

function MultiselectComponents({ getMoviesByCategories, updateMoviesPerPages, categories, multiselectRef }) {
    return (
        <div>
            <div className='flex flex-col space-y-6 xs:space-y-0 xs:flex-row items-center xs:items-end xs:justify-between space-x-2 mb-6 py-2'>
                <div className="flex space-x-2 items-center w-full justify-start">
                    <p className='text-sm md:text-base'>Films par pages :</p>

                    <div className='hover:cursor-pointer'>
                        <Multiselect
                            isObject={false}
                            options={[4, 8, 12]}
                            singleSelect
                            selectedValues={[8]}
                            onSelect={e => updateMoviesPerPages(e)}
                            style={{
                                searchBox: {
                                    border: '1px solid rgb(148 163 184)',
                                    'padding': '0',
                                    height: 'fit-content',
                                    'borderRadius': '9px'
                                },
                                chips: {
                                    margin: '0'
                                },
                                option: {
                                    padding: '2px 4px'
                                }
                            }}
                        />
                    </div>

                </div>

                <div className='flex items-end space-x-2 w-full xs:max-w-[60%] justify-center xs:justify-end'>

                    <Multiselect
                        isObject={false}
                        avoidHighlightFirstOption={true}
                        placeholder="Catégories..."
                        emptyRecordMsg='Pas de catégories correspondantes'
                        options={categories}
                        ref={multiselectRef}
                        customCloseIcon={<RiCloseLine className='hover:cursor-pointer' />}
                        style={{
                            searchBox: {
                                border: 'none',
                                'borderBottom': '0.1rem solid rgb(96, 165, 250)',
                                'borderRadius': '0px'
                            },
                            chips: {
                                background: 'rgb(59, 130, 246)'
                            },
                        }}
                    />
                    <button className='text-sm sm:text-base px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-700 transition-all text-gray-50' onClick={getMoviesByCategories}>Choisir</button>
                </div>
            </div>
        </div>
    )
}
export default MultiselectComponents;