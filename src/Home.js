import React from 'react'
import Images from './Image'


function Home(img,setImg,data) {
    return (
            
        <div className="big">
            {img === '' ? null : <Images name={img}/>}
        </div>
    )
}

export default Home
