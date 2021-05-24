import { Component } from "react";
import ArtistItem from '../Components/artistItem'

class Artists extends Component {
    constructor(){
        super()
        this.state = {
            artists:[],
            errMsg:''
        }
    }

    renderArtists({artists, errMsg}){
        if(artists.length > 0){
            return artists.map((artist) => (
            <div className="container" key={artist.id}>
                <ArtistItem ArtistInfo={artist}/>
            </div>
            ))
        }
        else if (errMsg) {
            return <p className="alert alert-danger">{errMsg}</p>
        }
    }

    render(){
        console.log('render')
        return(
            <div>
                <div className=' bg-primary col-10 ml-5'>
                    <img src='/images/cover.png' className='card-img  mx-auto d-block img-fluid' alt="banner"/>
                    <h1 style={{fontFamily:'Monoton',position: "absolute",top: '25%'}} className=' card-img-overlay text-center text-light '>MUSIC-DB</h1>
                </div>
                <div>
                    <h1 className='text-center mt-3'>Browse the Artists</h1>
                {this.renderArtists(this.state)}
                <hr/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/artists')
        .then((response) => {
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            this.setState({
                artists:data,
                errMsg:''
            })
        })
        .catch((err)=>{
            console.log(err);
            this.setState({errMsg:"Please Try Again Later"});
        })
    }
}

export default Artists;