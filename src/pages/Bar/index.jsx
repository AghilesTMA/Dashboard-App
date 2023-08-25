import React, { useContext } from "react";
import { ResponsiveBar } from "@nivo/bar";
import PageTop from "../../components/PageTop";
import { BarData as data } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";

const index = () => {
  const { dark } = useContext(darkTheme);
  return (
    <div className=" p-2">
      <PageTop title={"BAR CHART"} text={"Simple Bar Chart"} />
      <div className=" p-2 desktop:p-8  tablet:h-[500px] h-[250px] border-solid border-2 text-gray-700 border-gray-700 dark:border-white rounded-md bg-Primary-light-element dark:bg-Primary-dark-element mt-4">
        <ResponsiveBar
          data={data}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          theme={{
            text: {
              fill: dark ? "white" : "#374151",
            },
            axis: {
              domain: {
                line: {
                  stroke: dark ? "white" : "#374151",
                },
              },
              legend: {
                text: dark ? "white" : "#374151",
              },
              ticks:{
                line:{
                  stroke:dark?"white":"#374151"
                },
                text:{
                  fill:dark?"white":"#374151"
                }
              },
            },
            grid:{
              line:{
                stroke:dark?"white":"#374151"
              }
            },
            legends:{
              title:{
                text:{
                  fill:dark?"white":"#374151"
                }
              },
              text:{
                fill:dark?"white":"#374151"
              },
              ticks:{
                text:{
                  fill:dark?"white":"#374151"
                }
              }
            },
            annotations:{
              text:{
                fill:dark?"white":"#374151"
              },
              link:{
                stroke:dark?"white":"#374151"
              },
              outline:{
                stroke:dark?"white":"#374151"
              },
              symbol:{
                fill:dark?"white":"#374151"
              }
            },
          }}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", "1.4"]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 2,
              symbolSize: 20,
              itemDirection: "left-to-right",
            },
          ]}
          role="application"
          isFocusable={true}
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
    </div>
  );
};

export default index;