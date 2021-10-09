import React from 'react'
import {Navbar,  Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../Rating/Rating';
const Navbarr = ({name, setName, setRatingSearch, ratingSearch }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style = {{display:"flex", justifyContent: "space-between"}}> 
               <div style = {{display:"flex"}}> 
               </div>
               <div>
                 <Form inline> 
                  <FormControl  type ="text" placeholder="Search a movie" className= "mr-sm-2" value={name} onChange={(e)=>setName(e.target.value)} /> 
                  <span style = {{paddingBottom:"10px"}}> </span> <Rating  setRate={setRatingSearch} rate={ratingSearch}/>
                  </Form> 
               </div>
            </Navbar>  
        </div>
    )
}
export default Navbarr
