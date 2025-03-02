import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to our website</h1>
                    <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to='/coffee' className="btn btn-primary">Get Started</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home