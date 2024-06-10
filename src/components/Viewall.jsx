import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

const [data,changedata]=useState(
    {"quotes":[]}
)
 
const fetchData=()=>{
    axios.get("https://dummyjson.com/quotes").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    {data.quotes.map((value,index)=>{
        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div class="card">
      <div class="card-header">
        Quote
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{value.quote}</p>
          <footer class="blockquote-footer">{value.author}<cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
    
        </div>
    })}
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall