/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

const Router = () => {
	return (

		<Routes>
			<Route index path="/" element={<MainPage />}/>
			<Route path='*' element={<NotFound/>} />
		</Routes>
	);
};

export default Router;
