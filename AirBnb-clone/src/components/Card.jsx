import React from 'react';

export default function Card(props) {
  let badgeText; // null by default
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card-container">
      {/*conditional rendering*/}
      {badgeText && <div className="card-badge">{badgeText}</div>}{' '}
      <img src={props.img} className="image" alt="" />
      <div className="card-content">
        <div className="card-rating">
          <img
            src="https://i.postimg.cc/j2SRVNSg/star.png"
            alt="star-img"
            width="14px"
            height="14px"
          />
          <span>
            {props.rating + ' (' + props.reviewCount + ') ' + props.location}
          </span>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>
            <span className="price">From ${props.price}</span>/ person
          </p>
        </div>
      </div>
    </div>
  );
}
