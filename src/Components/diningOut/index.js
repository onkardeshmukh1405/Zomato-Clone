import React from 'react'
import "./diningOut.css";
import Collection from '../Commom/collection';
import { diningOut } from '../../data/diningOut';
import Filters from '../Commom/filters';
import ExploreSection from '../Commom/exploreSection';


const collectionList=[
  {
    id:"1",
    title:"trending this week",
    cover:"	https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923155.png",
    places:"12 places",
  },
  {
    id:"2",
    title:"Best in Pune",
    cover:"	https://b.zmtcdn.com/data/collections/2a82bf4ab91f34f1c7d5343a22c27446_1702459284.png",
    places:"22 places",
  },
  {
    id:"3",
    title:"Serene Rooftop places ",
    cover:"	https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
    places:"16 places",
  },
  {
    id:"4",
    title:"Best Bars & Pubs",
    cover:"	https://b.zmtcdn.com/data/collections/b002ac3dedef51dd605505656450b099_1696922552.jpg",
    places:"16 places",
  },
  {
    id:"5",
    title:"Best-insta Worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566585.jpeg",
    places:"12 places",
  },
  {
    id:"6",
    title:"Pure Veg Places",
    cover:"		https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg",
    places:"9 places",
  },
  {
    id:"7",
    title:"Romantic Dinning Places",
    cover:"		https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674839220.jpg",
    places:"16 places",
  },
]

const diningFilters =[
  {
      id:1,
      icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title:"Filters",
  },
  {
    id:2,
    title:"Rating 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
  },
  {
    id:6,
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    title:"Great Offers",
  },
];


const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
          <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Trending dining restaurants in Pune" />
    </div>
  )
}

export default DiningOut;