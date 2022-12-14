import { Box, Container } from "@mui/material";
import { Text14, Text16, Text20 } from "../../global-styles";
import { useEffect, useState } from "react";

import { AdDetailSlider } from "../";
import {Helmet} from "react-helmet";
import axios from "axios";
import categories from "../../data/categories.json";
import { styled } from "@mui/system";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const CustomBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  padding: "20px 85px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 40px",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
    flexWrap: "wrap",
  },
}));

const CustomImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "70%",
  },
}));

const AdDetail = (props) => {
  const category = props?.category;
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState();
  const [uluus, setUluus] = useState();
  const categoryInfo = categories.filter(
    (item) => item.category.value === category.toUpperCase()
  )[0];

  useEffect(() => {
    axios
      .get("https://uluus.ru/api/" + category + "/" + id + "/")
      .then((response) => {
        const request = response.data[0];
        setData(request);
      })
      .catch((error) => {
        console.log("error", error);
      });
    axios
      .get("https://uluus.ru/api/uluus/")
      .then((response) => {
        const request = response.data;
        setUluus(request);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Uluus.ru - {categoryInfo.category.label}</title>
        <meta name="description" content={data?.description} />
      </Helmet>
      <Container maxWidth="lg">
        <CustomBox>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Text16>{categoryInfo.category.label}</Text16>
            <Text16>
              {
                categoryInfo.subcategory.filter(
                  (item) => item.value === data?.subcategory
                )[0]?.label
              }
            </Text16>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Text20>
              {
                categoryInfo.action.filter(
                  (item) => item.value === data?.action
                )[0]?.label
              }
            </Text20>
            <Text20>{data?.name}</Text20>
          </Box>
          {data?.image.length ? <AdDetailSlider images={data?.image} /> : <></>}
          <Text20>{data?.price} ??????.</Text20>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {data ? (
              categoryInfo.add?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <Text16>{item.label + ":"}</Text16>
                  <Text16>
                    {
                      item.values.filter(
                        (value) => value.value === data[item.register]
                      )[0].label
                    }
                  </Text16>
                </Box>
              ))
            ) : (
              <></>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Text16
              sx={{
                fontWeight: 700,
              }}
            >
              ????????????????
            </Text16>
            <Text14>{data?.description}</Text14>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Text16
              sx={{
                fontWeight: 700,
              }}
            >
              ???????????????????? ??????????:
            </Text16>
            <Text16>{data?.settlement}</Text16>
          </Box>
          <ImageBox>
            <a target="_blank" href={"tel:" + data?.phone}>
              <CustomImage src="/images/call_icon.svg" />
            </a>
            {data?.is_whatsapp ? (
              <a
                target="_blank"
                href={
                  "https://wa.me/" +
                  (data?.phone?.charAt(0) === "8"
                    ? data?.phone?.replace("8", "7")
                    : data?.phone)
                }
              >
                <CustomImage src="/images/whatsapp_icon.svg" />
              </a>
            ) : (
              <></>
            )}
            <Text20>{data?.phone}</Text20>
          </ImageBox>
          <Text20>{data?.user_name}</Text20>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default AdDetail;
