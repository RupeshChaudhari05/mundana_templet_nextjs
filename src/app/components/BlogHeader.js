import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Intro from "../../../public/img/demo/intro.jpg";
import avtar2 from "../../../public/img/demo/avatar2.jpg";

const BlogHeader = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div className="h-100 tofront">
            <div className="row justify-content-between">
              <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                <p className="text-uppercase font-weight-bold">
                  <Link className="text-danger" href="#">Stories</Link>
                </p>
                <h1 className="display-4 secondfont mb-3 font-weight-bold">Sterling could jump 8% if Brexit deal gets approved by UK Parliament</h1>
                <p className="mb-3">
                  Analysts told CNBC that the currency could hit anywhere between $1.35-$1.40 if the deal gets passed through the U.K. parliament.
                </p>
                <div className="d-flex align-items-center">
                  <Image className="rounded-circle" src={avtar2} width="70" alt='g' />
                  <small className="ml-2">Jane Seymour <span className="text-muted d-block">A few hours ago &middot; 5 min. read</span>
                  </small>
                </div>
              </div>
              <div className="col-md-6 pr-0">
                <Image src={Intro} width={547} height={650} alt='g' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogHeader