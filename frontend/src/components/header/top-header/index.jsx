import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Typography, MenuItem } from "@mui/material";
import { styled } from "@mui/material";

import { Text20, Text16 } from "../../../global-styles";
import { setCategory } from "../../../slices/categorySlice";

const CustomLink = styled(Link)(({ theme }) => ({
  padding: "3px 15px",
  justifySelf: "flex-end",
  display: "block",
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
const CustomLink2 = styled("a")(({ theme }) => ({
  display: "inline-block",
  padding: "3px 15px",
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
const CustomBox = styled(Box)(({ theme }) => ({
  marginBottom: 26,
  width: "100%",
  display: "flex",
  // justifyContent: 'space-between',
  alignItems: "center",
  gap: "60px",
}));

const TopHeader = () => {
  const dispatch = useDispatch();

  return (
    <CustomBox>
      {/* <Box
        
      > */}
      <Link
        to="/"
        style={{ display: "flex", gap: "8px", textDecoration: "none" }}
        onClick={() => {
          dispatch(setCategory("advert"));
        }}
      >
        <img src="/images/uluusru_logo.svg" />
        <Typography
          sx={{
            fontFamily: "ArciformSansRegular",
            fontSize: 32,
            color: "#2C318F",
          }}
        >
          Uluus.ru
        </Typography>
      </Link>
      {/* </Box> */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
        }}
      >
        <MenuItem
          sx={{
            "&:hover p": {
              color: "#82B4FF",
            },
          }}
          onClick={() => window.open("https://sakhaconcert.ru/", "_blank")}
        >
          <Text20
            sx={{
              color: "#0D6EFD",
              width: "fit-content",
              textDecoration: "underline",
            }}
          >
            ??????????????????????.RU
          </Text20>
        </MenuItem>
      </Box>
      <CustomLink
        to="/ad-post"
        onClick={() => {
          dispatch(setCategory("advert"));
        }}
      >
        <Text20
          sx={{
            fontSize: "18px",
            color: "#FFF",
          }}
        >
          ???????????? ????????????????????
        </Text20>
      </CustomLink>
    </CustomBox>
  );
};

export default TopHeader;
