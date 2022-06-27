import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });
    const [typeOfForm, setTypeOfForm] = useState(true)
    const navigate=useNavigate()




    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit")
        if (typeOfForm) {
            console.log("login")
            const response = await axios.post('http://localhost:5000/user/login', formData)
            console.log(response);
            if (response.status == 200) {
                localStorage.setItem('username', formData.name)
                localStorage.setItem("jwtToken", response.data.jwtToken)
                //window.location.assign('/exercise')
                navigate("/exercise")
            }
        } else {
            console.log("register")
            const response = await axios.post('http://localhost:5000/user', formData)
            console.log(response);
            localStorage.setItem("jwtToken", response.data.jwtToken)
        }
    }

   return (
        <div className="container">

            {/* <div className='style'>
                <a href='https://cdn1.vectorstock.com/i/1000x1000/36/80/exercise-stress-test-logo-icon-design-vector-15613680.jpg'></a>
            </div> */}
            <h1>{typeOfForm ? 'LOGIN' : 'Register'}</h1>
            <div className='align'>
                <form className="pic" style={{ backgroundColor: "skyblue", width: "50rem",height:"10rem" }} onSubmit={handleSubmit}>


                    <label htmlFor='f-um'>Username:</label>
                    <div >
                        <input
                            id='f-um'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor='f-pw'>Password:</label>

                        <input
                            id='f-pw'
                            name='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <Button color='primary'>{typeOfForm ? 'LOGIN' : 'REGISTER'}</Button>
                        <br></br>
                        <br></br>
                        {typeOfForm ? "Don't" : "Already"} have an account?
                        <br /><br />
                        <div >
                            <Button color="success" onClick={() => setTypeOfForm(!typeOfForm)} >
                                {typeOfForm ? 'REGISTER' : 'LOGIN'}<a href="#!" class="link-info"></a>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>


            <br /><br />




            <div className='image'>
                {/* <img src={"https://images.immediate.co.uk/production/volatile/sites/4/2018/07/GettyImages-160600997-24457d2.jpg?quality=90&resize=940,400"} */}
            
            
            </div>
        </div>


    )
}

export default Login