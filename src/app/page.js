"use client"

import Image from 'next/image'
import HeroPage from './components/HeroPage'
import AllStories from './components/AllStories';
import { useEffect, useState } from 'react';
import Populer from './components/Populer';
import { imageSetupInBaground } from './util';
import Link from 'next/link';
import dummyData from "../app/mockData/homePageTopBar.json";
import allStories from "../app/mockData/allStores.json";
import popular from "../app/mockData/Popular.json";


export default function Home() {


  // // const url = "https://jsonplaceholder.typicode.com/posts";
  // const getdata = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }
  // useEffect(() => {
  //   getdata();
  // }, [])

  // const newsArray = [
  //   {
  //     title: "Brain Stimulation Relieves Depression Symptoms",
  //     desc: "Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.",
  //     image: "/img/demo/1.jpg",
  //     flag: true,
  //     author: "Favid Rick",
  //     date: "Dec 12 · 5 min read"

  //   },
  //   {
  //     title: "Did Supernovae Kill Off Large Ocean Animals Relieves the all?",
  //     desc: "Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.",
  //     image: "/img/demo/blog4.jpg",
  //     flag: false,
  //     author: "Favid Rick",
  //     date: "Dec 12 · 5 min read"

  //   }, {
  //     title: "Humans Reversing Relieves Climate Clock: 50 Million Years Relieves",
  //     desc: "Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.",
  //     image: "/img/demo/blog5.jpg",
  //     flag: false,
  //     author: "Favid Rick",
  //     date: "Dec 12 · 5 min read"

  //   }, {
  //     title: "Effective New Target Relieves for Mood-Boosting Brain Stimulation Found Relieves",
  //     desc: "Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.",
  //     image: "/img/demo/blog6.jpg",
  //     flag: false,
  //     author: "Favid Rick",
  //     date: "Dec 12 · 5 min read"

  //   }
  // ];
  const [topHead, settopHead] = useState({})
  useEffect(() => {
    settopHead(dummyData.shift())
    //console.log("ZZZZ", g, newsArray);
  }, [])




  return (
    <>
      <HeroPage />
      {/* MAIN */}
      <div className="container pt-4 pb-4">
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
                      <Image height="80" src={data.image} width="120" />
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
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8">
            <AllStories data={allStories} title="All Stories" />

          </div>
          <div className="col-md-4 pl-4">
            <Populer data={popular} title="Popular" />

          </div></div></div>
    </>
  )
}
