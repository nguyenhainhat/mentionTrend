/* eslint-disable import/first */
import "./App.scss";
import "swiper";

import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

import Router from "./config/Router";

function App() {
	return (
		<>
			<Header />
			<Router/>
			{/* <Footer />  */}
		</>
	);
}

export default App;
