import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import axios from "axios";

import {
  Box,
  Button,
  Select,
  Checkbox,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/system";

import { Title, Text20, Text16 } from "../../global-styles";

const CustomBox = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.5)",
  width: 720,
  gap: "20px",
  padding: "40px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down(750)]: {
    margin: "0 20px",
  },
}));
const CustomTitle = styled(Title)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down(500)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(380)]: {
    fontSize: "18px",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "9px 17px",
  background: "#0D6EFD",
  borderRadius: "4.8px",
  "&:hover": {
    background: "#589CFF",
  },
  "&:active": {
    background: "#004FC4",
  },
}));
const CustomMultipleSelect = styled(Select)(({ theme }) => ({
  borderRadius: "4.8px",
  background: "#FFF",
  width: "330px",
  border: "1px solid #CED4DA",
  "&.MuiOutlinedInput-root .MuiSelect-select.MuiSelect-outlined": {
    padding: "9px 32px 9px 17px",
  },
  [theme.breakpoints.down(400)]: {
    width: "100%",
  },
}));

const FirstEntryComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uluusOptions, setUluusOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios
      .get("https://uluus.ru/api/uluus/?limit=100")
      .then((response) => {
        const request = response.data.results.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setUluusOptions(request);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

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

  const isAllSelected =
    uluusOptions.length > 0 && selected.length === uluusOptions.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === uluusOptions.length
          ? []
          : uluusOptions.map((item) => (item = item.id))
      );
      return;
    }
    setSelected(value);
  };

  const handleClick = () => {
    if (selected.length) {
      Cookies.set("isFirstEntry", false);
      Cookies.set("selectedUluuses", JSON.stringify(selected));
      document.location.reload();
    }
  };

  return (
    <Box
      sx={{
        background: "url('/images/firstEntry_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomBox>
        <CustomTitle>Пожалуйста, выберите ваш район(-ы)</CustomTitle>
        <CustomMultipleSelect
          multiple
          displayEmpty
          value={selected}
          onChange={handleChange}
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
                  {uluusOptions
                    .filter((item) => selected.includes(item.id))
                    .map((item) => item.name)
                    .join(", ")}
                </Text20>
              </Box>
            );
          }}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <Text20>Выбрать улус(ы)</Text20>
          </MenuItem>
          <MenuItem value="all">
            <ListItemIcon>
              <Checkbox
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < uluusOptions.length
                }
              />
            </ListItemIcon>
            <Text20>Выбрать все</Text20>
          </MenuItem>
          {uluusOptions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option.id) > -1} />
              </ListItemIcon>
              <Text20>{option.name}</Text20>
            </MenuItem>
          ))}
        </CustomMultipleSelect>
        <CustomButton onClick={handleClick}>
          <Text16 sx={{ color: "#FFFFFF" }}>Применить</Text16>
        </CustomButton>
      </CustomBox>
    </Box>
  );
};

export default FirstEntryComponent;
