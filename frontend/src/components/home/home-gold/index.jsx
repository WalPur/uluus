import { useState, useEffect } from "react";

import axios from "axios";

import { Box, Container, Grid } from "@mui/material";

import { GoldCard } from "../../";
import { Title } from "../../../global-styles";

const HomeGold = ({ setGoldCount }) => {
  const [gold, setGold] = useState();

  useEffect(() => {
    axios.get("https://uluus.ru/api/premium/?limit=5").then((response) => {
      const request = response.data;
      setGold(request.results);
      setGoldCount(request.count);
    });
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {gold?.map((card, index) => (
          <Grid key={index} item xl={2.4} lg={2.4} md={2.4} sm={4} xs={12}>
            <GoldCard data={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeGold;
