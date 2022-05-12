/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import React, {useEffect, useState} from "react";
/* eslint-disable arrow-body-style */
// eslint-disable-next-line linebreak-style
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "./slider.scss";

const genres = ["Comedy", "Sci-Fi", "Thriller", "Fantasy", "Musical", "Animation", "Family", "Action", "Drama", "Adventure", "Romance", "Documentary"];

const Slider = () => {
	return (
		<div className="slide">
			<Swiper
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={8}>
				{genres.map((item, i) => (
					<SwiperSlide key={i}>
						{({isActive}) => (
							<SlideItem item={item} className={`${isActive ? "active" : ""}`} />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export const SlideItem = props => {
	return (
		<div className={`slide_item ${props.className}`}>
			<button className="slide-btn">{props.item}</button>
		</div>
	);
};

export default Slider;
