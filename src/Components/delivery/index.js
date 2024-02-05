import React from 'react'
import "./delivery.css";
import Filters from '../Commom/filters';
import DeliveryCollections from './deliveryCollection';
import TopBrands from './topBrands';
import ExploreSection from '../Commom/exploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters =[
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

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className= "max-width">
        <Filters filterList={deliveryFilters}/>
      </div>
        <DeliveryCollections/>
        <TopBrands/>
        <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Pune" />
    </div>
  )
}

export default Delivery;