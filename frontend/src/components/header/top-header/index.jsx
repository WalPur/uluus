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

const TopHeader = (props) => {
  const uluus = props.uluus;
  const dispatch = useDispatch();

  return (
    <CustomBox>
      <Link
        to="/"
        style={{ display: "flex", gap: "8px", textDecoration: "none" }}
        onClick={dispatch(setCategory("advert"))}
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
            САХАКОНЦЕРТ.RU
          </Text20>
        </MenuItem>
      </Box>
      <CustomLink to="/ad-post" onClick={dispatch(setCategory("advert"))}>
        <Text20
          sx={{
            fontSize: "18px",
            color: "#FFF",
          }}
        >
          Подать объявление
        </Text20>
      </CustomLink>
      <CustomLink to="/set-uluus" onClick={dispatch(setCategory("advert"))}>
        <Text20
          sx={{
            fontSize: "18px",
            color: "#FFF",
          }}
        >
          Выбрать улус
        </Text20>
      </CustomLink>
    </CustomBox>
  );
};

export default TopHeader;
