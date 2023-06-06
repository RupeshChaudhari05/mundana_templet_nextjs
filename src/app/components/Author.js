import React from 'react'

const Author = () => {
  return (
    <>
      <div className="border p-5 bg-lightblue mt-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 mb-2 mb-md-0">
            <h5 className="font-weight-bold mb-3">About the author of Mundana</h5>
            Hi, I'm Sal, the author of the template you're currently previewing. I am sharing for free, for your personal &amp; commercial use on unlimited domains. If you'd like to support my work, donations are highly appreciated! You can remove the credit links after donation. Thank you!
          </div>
          <div className="col-md-4">
            <a target="_blank" href="https://www.buymeacoffee.com/sal" className="btn btn-warning btn-block"><i className="fa fa-coffee"></i> Buy me a coffee</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Author