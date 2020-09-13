import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star';

function Stars({ count }) {
    return (
        count >= 0 &&
        count <=5 &&
        <ul className="stars">
            {[...Array(count)].map((s) => 
                <li>
                    <Star key={s}></Star>
                </li>
            )}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number
}

Stars.defaultProps = {
    count: 0
}

export default Stars

