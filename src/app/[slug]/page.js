
import React from 'react'
import dummyData from "../../app/mockData/homePageTopBar.json";
import TopDesign from '../components/TopDesign';
import BecomeMember from '../components/BecomeMember';
import { BLOGPAGE } from '../util/Constant';
import BlogHeader from '../components/BlogHeader';
import "../../app/api/connection"
//import {  } from "../../app/api/post";

const BlogDetailPage = async ({ params }) => {

  // const response = await fetch('/app/api/post');
  // const data = await response.json();

  // console.log("AAA", data);
  return (
    <>
      <BlogHeader />
      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
          <div className="col-lg-2 pr-4 mb-4 col-md-12">
            <div className="sticky-top text-center">
              <div className="text-muted">Share this</div>
              <div className="share d-inline-block">
                {/* AddToAny BEGIN */}
                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                  <a className="a2a_dd" href="https://www.addtoany.com/share" />
                  <a className="a2a_button_facebook" />
                  <a className="a2a_button_twitter" />
                </div>
                {/* AddToAny END */}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <article className="article-post">
              <p>
                Holy grail funding non-disclosure agreement advisor ramen
                bootstrapping ecosystem. Beta crowdfunding iteration assets business
                plan paradigm shift stealth mass market seed money rockstar niche
                market marketing buzz market.
              </p>
              <p>
                Burn rate release facebook termsheet equity technology. Interaction
                design rockstar network effects handshake creative startup direct
                mailing. Technology influencer direct mailing deployment return on
                investment seed round.
              </p>
              <p>
                Termsheet business model canvas user experience churn rate low
                hanging fruit backing iteration buyer seed money. Virality release
                launch party channels validation learning curve paradigm shift
                hypotheses conversion. Stealth leverage freemium venture startup
                business-to-business accelerator market.
              </p>
              <p>
                Freemium non-disclosure agreement lean startup bootstrapping holy
                grail ramen MVP iteration accelerator. Strategy market ramen
                leverage paradigm shift seed round entrepreneur crowdfunding social
                proof angel investor partner network virality.
              </p>
            </article>
            <BecomeMember status={BLOGPAGE} />
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h5 className="font-weight-bold spanborder">
          <span>Read next</span>
        </h5>
        <TopDesign topHead={dummyData.shift()} dummyData={dummyData} />
      </div>
      {/* End Main */}
    </>
  )
}

export default BlogDetailPage