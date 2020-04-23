import React, { useEffect, useState } from 'react';
import Gift from './Gift'
import getGifts from '../services/getGifts';


function ListOfGifts({ params }) {

    const { keyword } = params
    const [gifts, setGifts] = useState({
        loading: false,
        result: []
    })

    useEffect(() => {
        setGifts(
            currentGifts => ({
                loading: true,
                result: currentGifts.result
            }))
            
        getGifts({ keyword })
            .then(gifts => {
                setGifts({
                    loading: false,
                    result: gifts
                })
            })
    }, [keyword])

    if (gifts.loading) return <i>Loading</i>

    return <div>
        {
            gifts.result.map(
                ({ id, title, url }) =>
                    <Gift key={id} id={id} title={title} url={url} />
            )
        }
    </div>
}

export default ListOfGifts;