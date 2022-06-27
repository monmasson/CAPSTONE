import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import'../styling/blog.css'




const Blogs = () => {

  const [blogData, setBlogData] = useState({
    title: "",


  })
  const [userSearch, setUserSearch] = useState("")
  const [blogSearchResult, setBlogSearchResult] = useState([])



  const handleChange = (event) => {
    setBlogData({ ...blogData, [event.target.title]: event.target.value });
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:5000/blog/${userSearch}`)
    setBlogSearchResult(response.data.blogs)

    console.log(response);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/blog', blogData)
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken)
  }
  <h1>Search for the Blog! </h1>
  return (
    
    
    <div class="card">
    
    
      {/* // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'Right',
      //   height: '100vh',

      // }} */}
    
      
      
      <form onSubmit={handleSearch}>
        <label htmlFor="title" >Search for the Exercise Blog!</label>
        <br></br>
        <input title="title" id="title" onChange={(e) => {
          setUserSearch(e.target.value)

        }} />
        <input type="submit" />
      </form>

      <div>
       
        {blogSearchResult.map((result, index) => {

          return (
            <div class="container" key={index}>
              <li>
                TITLE: {result.title};
              </li>
              <br></br>
              
              <li class="container2">
                CONTENT: {result.content};

              </li>
            </div>

          )
        })}
      </div>
  
    </div>
  );
};

export default Blogs;