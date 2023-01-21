import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <img className="place-img" src={props.imageUrl} alt="" />
      <div className="card-content">
        <div className="card-location">
          <i class="fa-sharp fa-solid fa-location-dot"></i>
          <h4>{props.location}</h4>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <h5>{props.startDate + ' ' + props.endDate}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
