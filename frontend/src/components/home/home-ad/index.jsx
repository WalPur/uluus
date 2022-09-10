import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Input,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Text16, Text20, Title } from "../../../global-styles";

import { AdCard } from "../../";
import { HashLink } from "react-router-hash-link";
import {Helmet} from "react-helmet";
import { HomeGold } from "../../";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { categorySelect } from "../../contants/categorySelect";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

const CustomHashLink = styled(HashLink)(({ theme }) => ({
  width: "15%",
  borderRadius: "4.8px",
  [theme.breakpoints.down("md")]: {
    width: "23%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "9px 17px",
  background: "#0D6EFD",
  //   width: "100%",
  //   height: "100%",
  "&:hover": {
    background: "#589CFF",
  },
  "&:active": {
    background: "#004FC4",
  },
  [theme.breakpoints.down("md")]: {
    padding: "9px 9px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 8px",
    gap: "4px",
  },
}));
const CustomInput = styled(Input)(({ theme }) => ({
  padding: "9px 17px",
  flexGrow: 1,
  background: "#FFFFFF",
  border: "1px solid #CED4DA",
  borderRadius: "4.8px",
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "150%",
  color: "#6C757D",
  [theme.breakpoints.down("sm")]: {
    padding: "4px 8px",
    fontSize: "16px",
  },
}));
const CustomForm = styled("form")(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "5px",
  },
}));
const CustomSelect = styled(Select)(({ theme }) => ({
  borderRadius: "4.8px",
  background: "#FFF",
  width: "30%",
  [theme.breakpoints.down("md")]: {
    // width: '75%',
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const HomeAd = () => {
  const category = useSelector((state) => state.category.value);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [adverts, setAdverts] = useState([]);
  const [uluus, setUluus] = useState([]);
  const [uluuses, setUluuses] = useState([]);
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(1);
  const scrollRef = React.createRef();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 300,
      },
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    variant: "menu",
  };

  const advertCount = 5;
  const isAllSelected =
    uluuses.length > 0 && selected.length === uluuses.length;

  useEffect(() => {
    axios
      .get(`https://uluus.ru/api/uluus/?limit=100`)
      .then((response) => {
        const request = response.data.results.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setUluuses(request.map((item) => (item = item.name)));
        setUluus(request);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    const uluusId = uluus
      .filter((item) => selected.includes(item.name))
      .map((item) => (item = item.id));
    const api =
      input || uluusId.length
        ? `https://uluus.ru/${input === "" ? "api/" : "search/"}${category}/${
            input ? input + "/" : ""
          }?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }&uluus=${uluusId.join(",")}`
        : `https://uluus.ru/api/${category}/?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }`;
    axios
      .get(api)
      .then((response) => {
        const request = response.data;
        setAdverts(request.results);
        setCount(Math.ceil(request.count / advertCount));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [category, page]);

  const handleSubmit = (event) => {
    window.scrollTo(0, scrollRef.current.offsetTop);
    const uluusId = uluus
      .filter((item) => selected.includes(item.name))
      .map((item) => (item = item.id));
    setPage(1);
    const api =
      input || uluusId.length
        ? `https://uluus.ru/${input === "" ? "api/" : "search/"}${category}/${
            input ? input + "/" : ""
          }?uluus=${uluusId.join(",")}`
        : `https://uluus.ru/api/${category}/?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }`;
    axios
      .get(api)
      .then((response) => {
        const request = response.data;
        setAdverts(request.results);
        setCount(Math.ceil(request.count / advertCount));
      })
      .catch((error) => {
        console.log("error", error);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === uluuses.length ? [] : uluuses);
      return;
    }
    setSelected(value);
  };

  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Uluus.ru - {categorySelect[category]}</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "33px",
          }}
        >
          <CustomForm onSubmit={handleSubmit}>
            <CustomSelect
              multiple
              displayEmpty
              value={selected}
              onChange={handleChange}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <Text20 sx={{ opacity: 0.5, color: "#6c757d" }}>
                      Выбрать улус
                    </Text20>
                  );
                }

                return (
                  <Box sx={{ display: "flex", width: "100%" }}>
                    <Text20 sx={{ width: "100%", overflow: "hidden" }}>
                      {selected.join(", ")}
                    </Text20>
                  </Box>
                );
              }}
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <Text20>Выбрать улус</Text20>
              </MenuItem>
              <MenuItem value="all">
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < uluuses.length
                    }
                  />
                </ListItemIcon>
                <Text20>Выбрать все</Text20>
              </MenuItem>
              {uluuses.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <Text20>{option}</Text20>
                </MenuItem>
              ))}
            </CustomSelect>
            <CustomInput
              sx={{ flexGrow: 1 }}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Поиск объявлений по ключевым словам"
            />
            <CustomButton type="submit">
              <SearchIcon
                sx={{
                  color: "#FFFFFF",
                  width: "22px",
                  height: "22px",
                }}
              />
              <Text20
                sx={{
                  color: "#FFF",
                  textTransform: "none",
                  lineHeight: "150%",
                }}
              >
                Найти
              </Text20>
            </CustomButton>
          </CustomForm>
          <Title>Доска объявлений</Title>
          <HomeGold />
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {adverts?.map((card, index) => (
              <AdCard data={card} key={index} />
            ))}
          </Box>
          <Pagination
            count={count}
            page={page}
            onChange={(e, value) => setPage(value)}
            variant="outlined"
            shape="rounded"
            sx={{
              alignSelf: "end",
              "&.MuiPagination-root ul li button": {
                backgroundColor: "#FFF",
              },
              "&.MuiPagination-root ul li button:hover": {
                backgroundColor: "#bbb7b7",
              },
              "&.MuiPagination-root ul li .Mui-selected": {
                backgroundColor: "#cdcdcd",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeAd;
