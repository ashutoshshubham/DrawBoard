import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {

    //to navigate on new page after login
    const navigate = useNavigate();      

    const userSubmit = async (formdata) => {
        console.log(formdata)
        //make a request to backend for saving the data

        //make request to backend
        //1 - url
        //2 - method
        //3 - data
        //4 - data format

        const res = await fetch('http://localhost:5000/user/add',{
            method : 'POST',
            body : JSON.stringify(formdata),                    //body because post method is used
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        //then and catch can also be used at the place of async and wait

        console.log(res.status);

        if (res.status === 200){
            Swal.fire({
                icon : 'success',
                title : 'Success',
                text : 'Signed Successfully' 
            })
            navigate('/state');
        }

    }

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center bg-primary'>
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className='card'>
                <div className="card-body">
                    <h1 className="text-center">Signup</h1>
                    
                    <Formik
                        initialValues={{  email: "", password: "", username: "", age : "" }}
                        onSubmit = { userSubmit } 
                        >
                            {
                                ({values, handleChange, handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <label>Email</label>
                                        <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                                        <label>Password</label>
                                        <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                                        <label>Username</label>
                                        <input required type="text" className='form-control mb-3' name="username" onChange={handleChange} value={values.username} />

                                        <label>Age</label>
                                        <input required type="number" className='form-control mb-3' name="age" onChange={handleChange} value={values.age} />

                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                )
                            }
                        </Formik>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;