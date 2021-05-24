import { useHistory } from 'react-router-dom';

const Error=()=>{

    const history = useHistory();
    const reDirect = () => history.push('/');

    return (
    <div className='bg-danger p-5 m-3 rounded'>
        <h1 className='text-center text-light mb-5'>404 ERROR</h1>
        <img src="./error.jpg" className="col-12"/>
        <input className='d-block m-auto btn btn-outline-light btn-lg btn-block' type='button' value='Reload' onClick={reDirect}/>
    </div>
    )
  }
  
  export default Error;