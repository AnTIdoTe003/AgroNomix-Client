/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import clipboardCopy from "clipboard-copy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import { useParams } from "react-router-dom";
import brinjal1 from "../../assets/images/brinjal1.jpg";
import brinjal2 from "../../assets/images/brinjal2.jpg";
import brinjal3 from "../../assets/images/brinjal3.jpg";
import brinjal4 from "../../assets/images/brinjal4.jpg";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiShareAlt } from "react-icons/bi";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import {
  AiOutlineCopy,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const ProductDetails = () => {
  const [galleryImg, setGalleryImg] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopyClick = () => {
    clipboardCopy(window.location.href)
      .then(() => {
        toast.success("Link copied successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error("Link couldn't be copied", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
          });
      });
  };
  const dummyData = {
    title: "Fresh Brinjal Bharta (Bottle Shape), 500g",
    category: "Vegetables",
    rating: 3.3,
    ratingNumber: 120,
    storeId:"1",
    description:"Lorem Ipsum is simply dummy text for debugging purposes. Lorem Ipsum is a utility ",
    imageList: [
      {
        img: brinjal1,
      },
      {
        img: brinjal2,
      },
      {
        img: brinjal3,
      },
      {
        img: brinjal4,
      },
    ],
    price: 199,
    offerPrice: 149,
  };

  useEffect(() => {
    setGalleryImg(dummyData.imageList[0].img);
  },[dummyData.imageList]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };
  return (
    <>
      <div className="product-details-wrapper">
        <div className="product-details-container">
          <div className="product-details-content">
            <div className="product-details-left">
              <div className="product-details-gallery">
                {dummyData.imageList.map((ele, index) => {
                  return (
                    <img
                      onClick={() => {
                        setGalleryImg(ele.img);
                      }}
                      src={ele.img}
                      key={index}
                      alt="brinjal"
                    />
                  );
                })}
              </div>
              <div className="product-details-img">
                <img src={galleryImg} alt="" />
              </div>
            </div>

            <div className="product-details-right">
              <Stack direction={"row"} alignItems={"center"} gap={"1rem"}>
                <Typography variant="h1" color="initial" fontSize={"24px"}>
                  {dummyData.title}
                </Typography>
                <BiShareAlt cursor={"pointer"} onClick={handleOpen} />
              </Stack>
              <Typography variant="h1" color="initial" fontSize={"14px"}>
                See similar Products
              </Typography>
              <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <Rating precision={0.1} value={dummyData.rating} />
                <Typography variant="p" color="#bbb">
                  ({dummyData.ratingNumber})
                </Typography>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Typography variant="p" color="initial" fontSize={"28px"}>
                  Price :-{" "}
                </Typography>
                <Typography
                  variant="p"
                  color="initial"
                  fontSize={"24px"}
                  fontWeight={"600"}
                >
                  {dummyData.price}
                </Typography>
                <Typography
                  variant="p"
                  fontSize={"24px"}
                  fontWeight={"600"}
                  sx={{ textDecoration: "line-through" }}
                  color={"#bbb"}
                >
                  {dummyData.offerPrice}
                </Typography>
                <Box
                  bgcolor={"green"}
                  width={"100px"}
                  borderRadius={"6px"}
                  height={"30px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography variant="p" color="white">
                    {(
                      ((dummyData.price - dummyData.offerPrice) /
                        dummyData.price) *
                      100
                    ).toFixed(0)}
                    % off
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="p"
                color="initial"
                fontSize={"18px"}
                fontWeight={"500"}
              >
                You save:-{" "}
                <span style={{ color: "red" }}>
                  ₹ {dummyData.price - dummyData.offerPrice}
                </span>
              </Typography>
              <Box display={"flex"} sx={{ alignItems: "center" }} gap={"5px"}>
                <GrSecure />
                <Typography variant="p" color="initial">
                  {" "}
                  Secure Payments
                </Typography>
              </Box>
              <Box display={"flex"} sx={{ alignItems: "center" }} gap={"5px"}>
                <CiDeliveryTruck />
                <Typography variant="p" color="initial">
                  Fast Delivery
                </Typography>
              </Box>
              <div className="btn-rack">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Share the Product
            </Typography>
            <Stack direction={"row"} gap={"1rem"}>
              <Box
                fontSize={"34px"}
                bgcolor={"green"}
                borderRadius={"50%"}
                width={"55px"}
                height={"55px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"white"}
                cursor={"pointer"}
              >
                <AiOutlineCopy onClick={handleCopyClick} cursor={"pointer"} />
              </Box>
              <Box
                fontSize={"34px"}
                bgcolor={"green"}
                borderRadius={"50%"}
                width={"55px"}
                height={"55px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"white"}
                cursor={"pointer"}
              >
                <AiFillFacebook cursor={"pointer"} />
              </Box>
              <Box
                fontSize={"34px"}
                bgcolor={"green"}
                borderRadius={"50%"}
                width={"55px"}
                height={"55px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"white"}
                cursor={"pointer"}
              >
                <AiFillInstagram cursor={"pointer"} />
              </Box>
              <Box
                fontSize={"34px"}
                bgcolor={"green"}
                borderRadius={"50%"}
                width={"55px"}
                height={"55px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"white"}
                cursor={"pointer"}
              >
                <AiOutlineWhatsApp cursor={"pointer"} />
              </Box>
            </Stack>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
