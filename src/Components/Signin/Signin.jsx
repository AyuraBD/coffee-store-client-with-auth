import { useContext } from 'react';
import Header from '../../Header'
import { AuthContext } from '../../Providers/AuthProviders';

const Signin = () => {
  const {signInUser} = useContext(AuthContext);
  const handleSignin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // Sign in user
    console.log({email, password});
    signInUser(email, password)
    .then(result =>{
      console.log(result.user);
      form.reset();
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = { email, lastSignInTime };
      fetch(`https://coffee-store-server-two-ruddy.vercel.app/users`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
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
              <h1 className="text-5xl font-bold">Sign in now</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignin} className="card-body">
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
                  <button className="btn btn-primary">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signin