/* eslint-disable linebreak-style */
/* eslint-disable array-element-newline */
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
import {AiFillStar, AiOutlineUser, AiFillEye} from "react-icons/ai";
import {FcLike, FcRight} from "react-icons/fc";
import {IoIosAddCircleOutline} from "react-icons/io";
import Input from "../input/Input.jsx";
import Button, {OutlineButton} from "../button/Button";
import Modal, {ModalContent} from "../modal/Modal";
import logo from "../../assets/image/logo.png";
import "./gridItem.scss";
/* eslint-disable arrow-body-style */
// eslint-disable-next-line linebreak-style

const userComment = [
  {
    name: "Kim Aeyong",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!",
  },
  {
    name: "Kim Jimin",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!",
  },
  {
    name: "Im Junghan",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!",
  },
  {
    name: "Cayley",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!",
  },
];

const GridItem = props => {
  // const onClick = props.onClick;
  const item = props.item;
  const idCount = props.id;
  const [id, setId] = useState();
  const [stateClick, setStateClick] = useState(false);
  // const itemClick = id === item.id;
  const handleOnClick = () => {
    console.log(stateClick);
    setStateClick(!stateClick);
    setId(item.id);
  };

  return (
    <>
      <div className="gridContent_item" onClick={handleOnClick}>
        <img
          className="gridContent_bg"
          alt={item.title}
          src={item.medium_cover_image}
        />
        <div className="gridContent_desc">
          <div className="gridContent_item_left">
            <img
              style={{width: "30px"}}
              alt={item.title}
              src={item.medium_cover_image}
            />
            <p>{item.title}</p>
          </div>
          <div className="gridContent_item_right">
            <div className="gridContent_item_star">
              <p>{item.rating}</p>
              <AiFillStar className="star" />
            </div>
            <p>{item.year}</p>
          </div>
        </div>
      </div>
      {id === item.id && stateClick ? (
        <Modal active={false}>
          <ModalContent>
            <ItemModal item={item} />
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

const ItemModal = props => {
  const item = props.item;
  const [value, setValue] = useState([]);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `/api/v2/movie_details.json?movie_id=${item.id}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            baseURL: "http://yts.torrentbay.to",
          },
        );

        setValue(res.data.data.movie);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetail();
  }, []);

  return (
    <div className="modal_item_list">
      <div className="modal_item">
        <div className="modal_item_info">
          <img
            style={{width: "80px"}}
            alt={item.title}
            src={item.medium_cover_image}
          />
          <div className="modal_item_container">
            <div className="modal_item_content">
              <h5>{item.title}</h5>
              <div className="gridContent_item_right">
                <div className="gridContent_item_star">
                  <p>{item.rating}</p>
                  <AiFillStar className="star" />
                </div>
                <p>{item.year}</p>
              </div>
            </div>
            <div className="modal_item_btn">
              <OutlineButton>
                <FcLike />
                Like
              </OutlineButton>
              <Button>
                <AiOutlineUser />
                follow
              </Button>
              <Button>
                <IoIosAddCircleOutline />
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="modal_item_bg text-center">
          <img src={item.large_cover_image} alt={item.title} />
          <p className="p-lg">{item.description_full}</p>
        </div>
        <div className="modal_item_bottom text-center">
          <h2>{item.title}</h2>
          <div className="modal_item_bottom_icon">
            <div className="h5">
              <FcLike />
              {item.like_count || 0}
            </div>
            <div className="h5">
              <AiFillEye />
              {item.runtime}
            </div>
            <div className="h5">
              <AiFillStar className="star" />
              {item.rating}
            </div>
          </div>
          <p>Publishing date : {item.year}</p>
          <div className="modal_item_bottom_btn">
            <OutlineButton>
              <FcLike />
              Like
            </OutlineButton>
            <Button>
              <IoIosAddCircleOutline />
              Add
            </Button>
          </div>
        </div>
      </div>
      <CommentModal />
    </div>
  );
};

const CommentModal = props => {
  return (
    <div className="comment">
      <div className="container">
        <div className="comment_container">
          <div className="comment_left">
            <h3>Comment</h3>
            <div className="comment_left-input">
              <Input
                className="comment-input"
                type="text"
                placeholder="Write a comment now......"
              />
              <Button>
                <FcRight />
              </Button>
            </div>
            <div className="comment_left_user">
              {userComment.map((item, i) => (
                <div className="comment_left_user_item">
                  <div className="comment_left_user_info">
                    <img src={logo} alt="img user" />
                    <div className="comment_left_user_content">
                      <h3 className="fz-header">{item.name}</h3>
                      <p>{item.date}</p>
                    </div>
                  </div>
                  <div className="comment_left_user_title">
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <OutlineButton className="comment_left-btn">
              <FcRight />
            </OutlineButton>
          </div>
          <div className="comment_right">
            <div className="comment_right_owner">
              <h6>Owner</h6>
              <div className="comment_right_owner_info">
                <img src={logo} alt="img user" />
                <div className="comment_right_owner_info_content">
                  <h3 className="fz-header">Kim Aeyong</h3>
                  <p>Korea, Republic of</p>
                </div>
              </div>
            </div>
            <div className="comment_right_portfolio">
              <h5 className="h5">The first portfolio movement.</h5>
              <div className="modal_item_bottom_icon">
                <div className="h5">
                  <FcLike />
                  18
                </div>
                <div className="h5">
                  <AiFillEye />
                  18
                </div>
                <div className="h5">
                  <AiFillStar className="star" />
                  18
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
