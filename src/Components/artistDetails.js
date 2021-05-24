import { useState, useEffect } from 'react'
import Nav from './nav'

const ArtistDetails = ({match}) => {
    let [artist, setArtist] = useState({})
    let url = "http://localhost:3000/artists"

    useEffect(async()=> {
        let response = await fetch(`${url}/${match.params.id}`);
        let data = await response.json();
        setArtist(data)
    },[])

    if(artist.id){
        const covers = [];
        for(let i = 0; i < artist.albums.length; i++){
            covers.push(<img className='col-5 d-flex-inline p-1' src={`/images/albums/${artist.albums[i].cover}.jpg`} key={artist.albums[i].albumId} />)
        }
        return(
            <div>
                <Nav />
                <div className='mt-4 text-center col-12 mx-auto' key={artist.id}>
                    <img style={{ width: "100%" }} className='card-img mx-auto d-block img-fluid col-3 mx-auto mb-4' src={`/images/covers/${artist.cover}.jpg`} alt='cover' />
                    <h2>{artist.name}</h2>
                    <p>{artist.bio}</p>
                    <div className='p-3 mb-5'>{covers}</div>
                </div>
            </div>
        )
    }
    return <p className="alert alert-danger">
            No Artist Info Available
        </p>
    
}

export default ArtistDetails;