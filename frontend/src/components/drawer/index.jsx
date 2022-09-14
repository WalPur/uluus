import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Box, SwipeableDrawer, Divider, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

import { Text16 } from "../../global-styles";
import { setCategory } from "../../slices/categorySlice";

const CustomLink = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "10px 12px",
  "&:hover": {
    background: "#0D6EFD",
  },
  "&:hover p": {
    color: "#FFFFFF",
  },
  "&:hover .drawer-img": {
    display: "none",
  },
  "&:hover .drawer-img-hovered": {
    display: "block",
  },
}));
const CustomButton = styled(Link)(({ theme }) => ({
  padding: "3px 15px",
  justifySelf: "flex-end",
  display: "inline-block",
  borderRadius: "4.8px",
  textDecoration: "none",
  background: "#0D6EFD",
  "&:hover": {
    background: "#589CFF",
  },
  "&:active": {
    background: "#004FC4",
  },
}));
const CustomButton2 = styled("a")(({ theme }) => ({
  margin: "32px 12px",
  padding: "3px 15px",
  justifySelf: "flex-end",
  display: "inline-block",
  borderRadius: "4.8px",
  textDecoration: "none",
  background: "#0D6EFD",
  "&:hover": {
    background: "#589CFF",
  },
  "&:active": {
    background: "#004FC4",
  },
}));

const Drawer = (props) => {
  const data = props.data;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setOpen(true);
    }
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const toggleDrawer2 = (open, value) => (event) => {
    dispatch(setCategory(value));
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (data) => (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HashLink
          to="/"
          onClick={toggleDrawer2(false, "advert")}
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src="/images/uluusru_logo.svg" />
          <Typography
            sx={{
              fontFamily: "ArciformSansRegular",
              fontSize: "20px",
              lineHeight: "20px",
              color: "#2C318F",
            }}
          >
            Uluus.ru
          </Typography>
        </HashLink>
        <CloseIcon fontSize="large" onClick={toggleDrawer(false)} />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((item, index) => (
          <Box key={index}>
            <CustomLink to="/" onClick={toggleDrawer2(false, item.value)}>
              <Box
                sx={{ maxWidth: "29px", maxHeight: "29px" }}
                className="drawer-img"
              >
                <img style={{ width: "100%", height: "100%" }} src={item.img} />
              </Box>
              <Box
                sx={{ maxWidth: "29px", maxHeight: "29px", display: "none" }}
                className="drawer-img-hovered"
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.img_hovered}
                />
              </Box>
              <Text16>{item.label}</Text16>
            </CustomLink>
            <Divider />
          </Box>
        ))}
      </Box>
      <CustomButton2
        href="https://sakhaconcert.ru/"
        target="_blank"
        onClick={toggleDrawer(false)}
      >
        <Text16
          sx={{
            color: "#FFF",
          }}
        >
          Мероприятия
        </Text16>
      </CustomButton2>
    </Box>
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MenuIcon
          fontSize="large"
          sx={{ cursor: "pointer", color: "#0D6EFD" }}
          onClick={toggleDrawer(true)}
        />
        <Box>
          <CustomButton to="/ad-post" onClick={toggleDrawer(false)}>
            <Text16
              sx={{
                color: "#FFF",
              }}
            >
              Подать объявление
            </Text16>
          </CustomButton>
        </Box>
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list(data)}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Drawer;

// export { toggleDrawer }
