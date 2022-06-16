import React from 'react';

export default function Card(props) {
	let badgeText 
	if(props.openSpots==0){
		badgeText = "SOLD OUT";
	}
	else if(props.location=="Online"){
		badgeText = "Online";
	}

	return (
		<div className="card">
			{badgeText && <div className="card-badge">{badgeText}</div>}
			<img src={props.img} className="card-img" />
			<div className="card-stats">
				<img src={require('./img/Star.png')} className="star" />
				<span>{props.rating}</span>
				<span className="gray"> ({props.reviewCount}) . {props.location}</span>
			</div>
			<p>{props.title}</p>
			<p><span className="bold">From ${props.price}</span> / person</p>
		</div>
		)
}