import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllStories = ({ data, title }) => {
  return (
    <>
      <h5 className="font-weight-bold spanborder"><span>{title}</span></h5>
      {data.map((item, index) => {
        return <>
          <div className="mb-3 d-flex justify-content-between" key={index}>
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <Link className="text-dark" href="#">{item.title}</Link>
              </h2>
              <p>
                {item.desc}
              </p>
              <div className="card-text text-muted small">
                {item.author}
              </div>
              <small className="text-muted">{item.date}</small>
            </div>
            <Image width={180} height="120" src={item.image} />
          </div>
        </>
      })}
    </>
  )
}

export default AllStories