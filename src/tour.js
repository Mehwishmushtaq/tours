import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Tour = ({id, image, name, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <div className='myArticle'>
    <article>
        <img src={image} alt={name} />
        <footer>
           <h4>{name}</h4>
           <h4>{price}</h4>
           
           <p>{readMore?info: `${info.substring(0, 250)}...`}
           <Button onClick={()=>setReadMore(!readMore)}>{readMore? 'show less' : 'read more'}</Button>
           </p>
           
        </footer>
        <Button variant = "danger" onClick={()=>removeTour(id)}>
            Delete Tour
        </Button>
    </article>
    </div>
  )
}

export default Tour