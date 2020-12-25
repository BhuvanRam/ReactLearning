import React from 'react'
import './search.css'

const searchMovie = () => (
    <>
        <div className='container-sm parent-container'>
            <div className="row" className='search-row'>
                <div className="col-lg-8">
                    <input className="col-md-12 search-textbox" type="email" id="movieSearch" aria-describedby="emailHelp" placeholder="What do you want to Watch ?" />
                </div>
                <div className="col-lg">
                    <button type="button" className="btn btn-secondary">Movie Search</button>
                </div>
            </div>
        </div>

    </>
)

export default searchMovie