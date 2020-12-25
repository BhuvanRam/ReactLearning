import React from 'react'
import './movie.css'
import PulpFiction from '../../assets/posters/PulpFiction.jpg'
import Avengers from '../../assets/posters/Avengers.jpg'
import Gravity from '../../assets/posters/Gravity.jpg'
import Inception from '../../assets/posters/Inception.jpg'
import KillBill from '../../assets/posters/KillBill.jpg'
import BohemianRhapsody from '../../assets/posters/BohemianRhapsody.jpg'
import NoMovie from '../../assets/posters/NoOfficialPoster.jpg'

const movie = (props) => (
    <>
        <div className='container-sm movie-card'>
            <div className="row">
                <div className="col-xs">
                    <img src={getPosterImageByMovieName(props.MovieImage)} className='movie-img'></img>
                </div>
            </div>
            <div className="row">
                <div className="col-xs" className='movie-card-details'>
                    <div className='font-style'>{props.MovieTitle}</div>
                    <div className='font-style' style={{ textAlign: 'right' }}>
                        <span className='year'>{props.ReleaseYear}</span>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-xs">
                    <span className='font-style'>{props.Genre}</span>
                </div>
            </div>
        </div>
    </>)

function getPosterImageByMovieName(movieName)
{
    switch(movieName)
    {
        case "Inception": return Inception;
        case "PulpFiction": return PulpFiction;
        case "Avengers": return Avengers;
        case "Gravity": return Gravity;
        case "KillBill": return KillBill;
        case "BohemianRhapsody": return BohemianRhapsody;
        default: return NoMovie;
    }
}

movie.defaultProps =
{
    MovieImage: NoMovie,
    MovieTitle: 'Generic Movie',
    ReleaseYear: '2004',
    Genre: 'Action & Adventure'
}

export default movie