import Link from 'next/link'
import React from 'react'

const Populer = ({ data, title }) => {
  return (
    <>
      <h5 className="font-weight-bold spanborder"><span>{title}</span></h5>
      <ol className="list-featured">
        {data.map((item, index) => {
          return <>
            <li key={index}>
              <span>
                <h6 className="font-weight-bold">
                  <Link href="#" className="text-dark">{item.title}</Link>
                </h6>
                <p className="text-muted">
                  {item.author} in SCIENCE
                </p>
              </span>
            </li>
          </>
        })}
      </ol>

    </>
  )
}

export default Populer