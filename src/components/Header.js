import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    const onClick = (e) => {
        console.log(e)
    }

    const location = useLocation()
    return (
        <header className='header'>
            <h1>{ title }</h1>
            {location.pathname === '/' && <Button color={
                showAdd ? 'red' : 'green'} 
                label={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps ={
    title: 'Tack Tracker',
}

Header.propTypes ={
    title: PropTypes.string,
}

//CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}
export default Header
