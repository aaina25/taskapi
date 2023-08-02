import React from 'react'
import { Link } from 'react-router-dom'


function HeaderComponent(props) {
  return (
    <div>
        <header class="logo"> 
        <h1>{props.title} </h1>
        <nav>
          {

            props.navitems ? props.navitems.map((item,index)=>{
                return <Link to={item} key={index}>{item}</Link>
            } ):"no data available"
          }
        </nav>
        </header>
        </div>
  )
}

export default HeaderComponent