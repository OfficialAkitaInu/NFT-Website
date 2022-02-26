import React from 'react'
import WinnerSection from '../components/Sections/WinnerSection'

import { useParams } from 'react-router-dom'


const Winner = () => {
    let { id } = useParams();

    return (
        <>
            <WinnerSection id={id}/>
        </>
    )
}

export default Winner
