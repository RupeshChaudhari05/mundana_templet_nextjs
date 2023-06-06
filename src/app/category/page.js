import React from 'react'
import Populer from '../components/Populer';
import popular from "../mockData/Popular.json";
import allStories from "../mockData/allStores.json";
import AllStories from '../components/AllStories';
import BecomeMember from "../components/BecomeMember";
// import { useRouter } from 'next/router';


const page = () => {
  const bgImage = {
    backgroundSize: 'cover',
    backgroundImage: 'url("./img/demo/1.jpg")',
    height: '150px',
    backgroundRepeat: 'no-repeat',
  };
  // const router = useRouter();
  // const { category } = router.query;

  return (
    <>
      {/* Main */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8">
            <h5 className="font-weight-bold spanborder"><span>Featured in Science</span></h5>
            <div className="card border-0 mb-5 box-shadow">
              <div style={bgImage}>
              </div>
              <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h2 font-weight-bold">
                  <a className="text-dark" href="./article.html">Brain Stimulation Relieves Depression Symptoms</a>
                </h2>
                <p className="card-text">
                  Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
                </p>
                <div>
                  <small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
                  <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
            <AllStories data={allStories} title="Latest" />
          </div>
          <div className="col-md-4 pl-4">
            <div className="sticky-top">
              <Populer data={popular} title="Popular in Science" />
            </div>
          </div>
        </div>
      </div>
      <BecomeMember />
      {/* <!-- End Main --> */}
    </>
  )
}

export default page