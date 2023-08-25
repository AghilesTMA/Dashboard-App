import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { darkTheme } from "../../context/ThemeProvider";

const ListItem = ({ title }) => {
  const { dark } = useContext(darkTheme);
  return (
    <Accordion
      sx={{
        background: dark ? "#2f3f5c" : "#e0dedf",
        color: dark ? "white" : "#374151",
        "& .MuiSvgIcon-root": { color: dark ? "white" : "#374151" },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h3 className=" font-semibold text-lg text-Neutral-green">{title}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className=" max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

const index = () => {
  return (
    <div className=" p-2">
      <PageTop title={"FAQ"} text={"Frequently Asked Questions Page"} />
      <div className=" p-4 desktop:p-8">
        <ListItem title={"An Important Question"} />
        <ListItem title={"Another Important Question"} />
        <ListItem title={"Your Favorite Question"} />
        <ListItem title={"Some Random Question"} />
        <ListItem title={"The Final Question"} />
      </div>
    </div>
  );
};

export default index;
