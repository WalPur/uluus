import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import TopHeader from "./top-header";
import BottomHeader from "./bottom-header";
import { Drawer } from "../";

const HeaderDesktopBox = styled(Box)(({ theme }) => ({
  padding: "15px 0 0 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const HeaderMobileBox = styled(Box)(({ theme }) => ({
  padding: "15px 0",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const HeaderBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  borderBottom: "2px solid #CED4DA",
  [theme.breakpoints.down("md")]: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
}));

function Header() {
  const data = [
    {
      img: "/images/nedvizhimost.svg",
      img_hovered: "/images/nedvizhimost_hovered.svg",
      label: "Недвижимость",
      value: "rent",
    },
    {
      img: "/images/auto.svg",
      img_hovered: "/images/auto_hovered.svg",
      label: "Авто",
      value: "car",
    },
    {
      img: "/images/uslugi.svg",
      img_hovered: "/images/uslugi_hovered.svg",
      label: "Услуги",
      value: "service",
    },
    {
      img: "/images/for_home.svg",
      img_hovered: "/images/for_home_hovered.svg",
      label: "Для дома",
      value: "home",
    },
    {
      img: "/images/food.svg",
      img_hovered: "/images/food_hovered.svg",
      label: "Продукты питания",
      value: "food",
    },
    {
      img: "/images/vacancy.svg",
      img_hovered: "/images/vacancy_hovered.svg",
      label: "Вакансии",
      value: "jobs",
    },
    {
      img: "/images/building.svg",
      img_hovered: "/images/building_hovered.svg",
      label: "Ремонт и строительство",
      value: "remont",
    },
  ];
  return (
    <HeaderBox>
      <Container maxWidth="lg">
        <HeaderDesktopBox>
          <TopHeader />
          <BottomHeader data={data} />
        </HeaderDesktopBox>
        <HeaderMobileBox>
          <Drawer data={data} />
        </HeaderMobileBox>
      </Container>
    </HeaderBox>
  );
}

export default Header;
