import React from 'react'
import PropTypes from 'prop-types'

import { GrifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category )
    
    return (
        <>
            <h3 className="animate_animated animate__fadeIn">{ category }</h3>

            {loading && <p className="animate_animated animate__flash">Loading</p> }

            <div className="card-grid">
                { images.map( img => (
                    <GrifGridItem
                    key={img.id} 
                    {...img } />
                ) )}
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}