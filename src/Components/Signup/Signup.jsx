import React, { useContext } from 'react'
import Header from '../../Header'
import { AuthContext } from '../../Providers/AuthProviders'
import Swal from 'sweetalert2';

const Signup = () => {
  const {createUser, loading} = useContext(AuthContext);
  const handleSignup  = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result =>{
      const createdAt = result.user?.metadata?.creationTime;
      const uid = result.user?.uid;
      form.reset(); 
      
      // Save new user to the database
      fetch('https://coffee-store-server-rust-gamma.vercel.app/users',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, createdAt, uid})
      }) 
      .then(res => res.json())
      .then(data =>{
        if(data.insertedId){
          Swal.fire({
              title: "Success!",
              text: "User created successfully.",
              icon: "success"
            });
        }
      })
      .catch(err =>{
        console.log(err.message);
      })    
    })
    .catch(err =>{
      console.log(err.message);
    })
  }
  return (
    <div>
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup