import React from 'react'
import './loader.scss'
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
    return (
        <div className='Loader'>
            <HashLoader
            color="#e4a853"
            size={50}
            />
        </div>
    )
}

export default Loader
