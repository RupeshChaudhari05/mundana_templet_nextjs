import React from 'react'

const HeroPage = () => {
  const bgImage = {
    backgroundSize: 'cover',
    backgroundImage: 'url("./img/demo/home.jpg")',
  };

  return (
    <>
      {/* HEADER */}

      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div className="pl-4 pr-0 h-100 tofront">
            <div className="row justify-content-between">
              <div className="col-md-6 pt-6 pb-6 align-self-center">
                <h1 className="secondfont mb-3 font-weight-bold">Mundana is an HTML Bootstrap Template for Professional Blogging</h1>
                <p className="mb-3">
                  Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.
                </p>
                <a href="./article.html" className="btn btn-dark">Read More</a>
              </div>
              <div className="col-md-6 d-none d-md-block pr-0" style={bgImage}>	</div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header --> */}
    </>
  )
}

export default HeroPage