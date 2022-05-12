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
import {AiFillStar, AiOutlineUser} from "react-icons/ai";
import {FcLike} from "react-icons/fc";
import {IoIosAddCircleOutline} from "react-icons/io";
import Button, {OutlineButton} from "../button/Button";
import Modal, {ModalContent} from "../modal/Modal";
import "./gridItem.scss";
/* eslint-disable arrow-body-style */
// eslint-disable-next-line linebreak-style

const GridItem = props => {
  // const onClick = props.onClick;
  const item = props.item;
  const [id, setId] = useState();
  const [stateClick, setStateClick] = useState(false);
  const itemClick = id === item.id;
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
              <ItemModal item={item}/>
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

  return (
      <div className="modal_item">
          <div className="modal_item_info">
              <img style={{width: "80px"}} alt={item.title} src={item.medium_cover_image} />
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
                      Like
                      <FcLike />
                    </OutlineButton>
                    <Button>
                      follow
                      <AiOutlineUser />
                    </Button>
                    <Button>
                      follow
                      <IoIosAddCircleOutline />
                    </Button>
                </div>
              </div>
          </div>
      </div>
  );
};

export default GridItem;
