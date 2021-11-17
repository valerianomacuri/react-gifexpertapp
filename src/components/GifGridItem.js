import React from 'react'
import PropTypes from 'prop-types'

export const GrifGridItem = ({id, title, url}) => {

    return (
        <div className="card animate_animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

/*
    1. Enzyme
    2. Enzyme to json
    3. debe de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()
*/
GrifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}