import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Input,
  InputLabel,
  Menu,
  ListItemIcon,
  MenuItem,
  Pagination,
  Select,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Text16, Text20, Title } from "../../../global-styles";

import Cookies from "js-cookie";

import { AdCard } from "../../";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
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
  const [uluuses, setUluuses] = useState([]);
  const [selected, setSelected] = useState(
    JSON.parse(Cookies.get("selectedUluuses"))
  );

  const [count, setCount] = useState(1);
  const [showPag, setShowPag] = useState(0);
  const [goldCount, setGoldCount] = useState();
  const [open, setOpen] = useState(false);
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
        setUluuses(request);
        //   setUluus(request);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    const api =
      input || selected.length
        ? `https://uluus.ru/${input === "" ? "api/" : "search/"}${category}/${
            input ? input + "/" : ""
          }?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }&uluus=${selected.join(",")}`
        : `https://uluus.ru/api/${category}/?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }`;

    axios
      .get(api)
      .then((response) => {
        const request = response.data;
        setAdverts(request.results);
        setCount(Math.ceil(request.count / advertCount));
        setShowPag(request.results.length);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [category, page]);

  const handleSubmit = (event) => {
    window.scrollTo(0, scrollRef.current.offsetTop);

    const api =
      input || selected.length
        ? `https://uluus.ru/${input === "" ? "api/" : "search/"}${category}/${
            input ? input + "/" : ""
          }?uluus=${selected.join(",")}`
        : `https://uluus.ru/api/${category}/?limit=${advertCount}&offset=${
            (page - 1) * advertCount
          }`;

    axios
      .get(api)
      .then((response) => {
        const request = response.data;
        setAdverts(request.results);
        setCount(Math.ceil(request.count / advertCount));
        setShowPag(request.results.length);
      })
      .catch((error) => {
        console.log("error", error);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === uluuses.length
          ? []
          : uluuses.map((item) => (item = item.id))
      );
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
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <Text20 sx={{ opacity: 0.5, color: "#6c757d" }}>
                      Выбрать район(-ы)
                    </Text20>
                  );
                }

                return (
                  <Box sx={{ display: "flex", width: "100%" }}>
                    <Text20 sx={{ width: "100%", overflow: "hidden" }}>
                      {uluuses
                        .filter((item) => selected.includes(item.id))
                        .map((item) => item.name)
                        .join(", ")}
                    </Text20>
                  </Box>
                );
              }}
              MenuProps={MenuProps}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 10px 0 30px",
                }}
              >
                <Text20 sx={{ opacity: "0.5" }}>Выбрать улус</Text20>
                <Button
                  sx={{
                    marginRight: "5px",
                  }}
                  variant="contained"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Ок
                </Button>
              </Box>
              {/* <MenuItem disabled value="">
                <Text20>Выбрать улус</Text20>
              </MenuItem> */}
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
                <MenuItem key={option.id} value={option.id}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option.id) > -1} />
                  </ListItemIcon>
                  <Text20>{option.name}</Text20>
                </MenuItem>
              ))}
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    marginRight: "15px",
                  }}
                  variant="contained"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Ок
                </Button>
              </Box>
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
          {goldCount ? <HomeGold setGoldCount={setGoldCount} /> : <></>}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {showPag ? (
              adverts?.map((card, index) => <AdCard data={card} key={index} />)
            ) : (
              <Text20>
                К сожалению по вашему запросу в данном районе(-ах) ничего не
                найдено
              </Text20>
            )}
          </Box>
          {showPag ? (
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
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeAd;
