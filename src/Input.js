import React,{useState} from 'react'

function Search() {
    const [img , setImg] =useState('')
    const [data, setData] = useState('')
    const inputChange = (e)=>{
     const data = e.target.value
     setData(data)
     setImg(data)
    }
    return (
        <>
            <input className='nav__searchInput' value={img} name={setImg} dataVal={data} placeholder='Type Something Here...' onChange={inputChange}/>
        </>
    )
}

export default Search