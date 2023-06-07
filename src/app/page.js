"use client"

import HeroPage from './components/HeroPage'
import AllStories from './components/AllStories';
import { useEffect, useState } from 'react';
import Populer from './components/Populer';
import dummyData from "../app/mockData/homePageTopBar.json";
import allStories from "../app/mockData/allStores.json";
import popular from "../app/mockData/Popular.json";
import TopDesign from './components/TopDesign';
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
        <TopDesign topHead={topHead} dummyData={dummyData} />
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
