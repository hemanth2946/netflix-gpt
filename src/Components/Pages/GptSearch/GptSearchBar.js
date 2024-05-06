import React from 'react'
import lang from '../../../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language)

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' m-6 bg-black w-1/2'>
                <div className='grid grid-cols-12'>
                    <input className='p-2 m-2 col-span-9' type='text' placeholder={lang[languageKey].gptSearchPlaceholder} />
                    <button className='col-span-3 bg-red-500 rounded-lg m-2 p-2 '>{lang[languageKey].search}</button>
                </div>
            </form>
        </div>
    )
}

export default GptSearchBar