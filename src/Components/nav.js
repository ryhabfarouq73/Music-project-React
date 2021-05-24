import{NavLink as Link} from 'react-router-dom'
const Nav=()=>{

    return(
        <div id='nav' className='mx-3 mt-2 '>
            <Link style={{fontFamily:'Monoton'}} className='text-secondary text-decoration-none' to='/'><h1 className='display-4 text-center'>MUSIC-DB</h1></Link>
        </div>
    )
}

export default Nav;