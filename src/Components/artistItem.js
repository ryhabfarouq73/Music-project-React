import { Link } from "react-router-dom";

const ArtistItem = ({ ArtistInfo }) => {
    if (ArtistInfo)
        return (
            <div className='m-5'>
                <Link className='text-decoration-none' to={`/artists/${ArtistInfo.id}`}>
                    <img className='card-img mx-auto d-block img-fluid col-6' src={`/images/covers/${ArtistInfo.cover}.jpg`} alt='cover'/>
                <h3 className='bg-primary text-light p-2 col-5 mx-auto'>
                    {ArtistInfo.name}
                </h3>
                </Link>
            </div>
        )
        return <p className="alert alert-danger">No Artist info available</p>
}
export default ArtistItem;