import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imageSetupInBaground } from '../util'

const TopDesign = ({ topHead, dummyData }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="card border-0 mb-4 box-shadow h-xl-300">
            <div style={imageSetupInBaground(topHead.image)}></div>
            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
              <h2 className="h4 font-weight-bold">
                <a className="text-dark" href="./article.html">{topHead.title}</a>
              </h2>
              <p className="card-text">
                {topHead.desc}
              </p>
              <div>
                <small className="d-block"><Link className="text-muted" href="#">{topHead.author}</Link></small>
                <small className="text-muted">{topHead.date}</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="flex-md-row mb-4 box-shadow h-xl-300">
            {
              dummyData.map((data, index) => {
                return <>
                  <div className="mb-3 d-flex align-items-center" key={index}>
                    <Image height="80" src={data.image} width="120" alt='ff' />
                    <div className="pl-3">
                      <h2 className="mb-2 h6 font-weight-bold">
                        <Link className="text-dark" href="#">{data.title}</Link>
                      </h2>
                      <div className="card-text text-muted small">
                        {data.author}
                      </div>
                      <small className="text-muted">{data.date}</small>
                    </div>
                  </div>
                </>
              })}

          </div>
        </div>
      </div>
    </>
  )
}

export default TopDesign