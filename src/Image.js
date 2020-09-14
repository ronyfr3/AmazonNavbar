import React from 'react'

function Images(props) {
    const img = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`
    return (
        <>
            <img src={img} alt='search'></img>
        </>
    )
}

export default Images