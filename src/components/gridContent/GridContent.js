/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
// eslint-disable-next-line linebreak-style
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./gridContent.scss";
import GridItem from "../gridItem/GridItem";
/* eslint-disable arrow-body-style */
// eslint-disable-next-line linebreak-style
const mainHeader = ["Motion trend pick", "Latest", "Recommended"];

const GridContent = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getListMovie = async () => {
      try {
        const res = await axios.get("/api/v2/list_movies.json?quality=3D", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          baseURL: "http://yts.torrentbay.to",
        });

        setItems(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getListMovie();
  }, []);


    // console.log(a);

  // console.log(items);

  return (
    <>
      <div className="main_header">
        <div className="container">
          <div className="main_header_item">
            {mainHeader.map(item => (
              <h5>{item}</h5>
            ))}
          </div>
        </div>
      </div>
      <div className="gridContent">
        <div className="container">
          <div className="gridContent_container">
            {items?.movies?.map((item, i) => (
              <GridItem id={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GridContent;
