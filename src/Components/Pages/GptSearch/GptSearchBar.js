import React, { useRef } from 'react'
import lang from '../../../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../../../utils/openAi"
import { API_OPTIONS } from '../../../utils/constants'
import MovieCard from '../Container/MovieCard'
import { addGptSearchResults } from '../../../utils/gptSlice'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    // response for gpt search
    // {
    //     "id": "chatcmpl-9MSM6SDY7RK79ITbq2FlU6rCmft12",
    //     "object": "chat.completion",
    //      "created": 1715139242,
    //      "model": "gpt-3.5-turbo-0125",
    //      "choices": [
    //                   {
    //                     "index": 0,
    //                      "message": {
    //                                 "role": "assistant",
    //                                 "content": "Hera Pheri, Andaz Apna Apna, Chupke Chupke, 3 Idiots, Golmaal: Fun Unlimited"
    //                                 },
    //                       "logprobs": null,
    //                        "finish_reason": "stop"
    //                    }
    //                   ],
    //        "usage": {
    //          "prompt_tokens": 73,
    //          "completion_tokens": 31,
    //           "total_tokens": 104
    //          },
    //     "system_fingerprint": null
    // }

    const searchMovie = async (movie) => {
        const res = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const jsonRes = await res.json();
        console.log(jsonRes.results)
        return jsonRes.results;
    }

    const handleSearchGptQuery = async () => {
        const gptQuery = `Act as movie recommendation system and suggest some movies for the query ${searchText?.current.value} . only give the names of 5 movies, comma separated like the exampleresultgiven ahed. Example Result: Baahubali, Eega, Magadheera, Rangasthalam, Arjun Reddy.`

        const searchResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(searchResult.choices)
        if (!searchResult.choices) {
            console.log("Error occured while fetching data from openAi ")
            // create a page to show error page
        }
        // movie names of gpt search result
        const gptMovies = searchResult.choices[0].message.content.split(",");

        const promiseArray = gptMovies.map(movie => searchMovie(movie));
        // for above request it will take time to fetch data but
        //  maping wont stop until data fetched so we will get promisses.
        // [promise1,p2,p3,p4,p5]

        const searchResultMovies = await Promise.all(promiseArray);
        dispatch(addGptSearchResults({ movieNames: gptMovies, movieResults: searchResultMovies }));

    }
    return (
        <div className='pt-[40%] md:pt-[10%] flex justify-center'>
            <form className=' m-6 bg-black w-full md:w-1/2' onSubmit={(e) => e.preventDefault()}>
                <div className='grid grid-cols-12'>
                    <input ref={searchText} className='p-2 m-2 col-span-9' type='text' placeholder={lang[languageKey].gptSearchPlaceholder} />
                    <button className='col-span-3 bg-red-500 rounded-lg m-2 p-2 ' onClick={handleSearchGptQuery}>{lang[languageKey].search}</button>
                </div>
            </form>

        </div>
    )
}

export default GptSearchBar