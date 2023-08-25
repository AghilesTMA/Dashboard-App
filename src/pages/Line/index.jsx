import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { ResponsiveLine } from "@nivo/line";
import { LineData as data } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";

const index = () => {
  const {dark} = useContext(darkTheme);
  return (
    <div className=" p-2">
      <PageTop title={"Line CHART"} text={"Line Pie Chart"} />
      <div className=" p-2 desktop:p-8  tablet:h-[500px] h-[250px] border-solid border-2 text-gray-700 border-gray-700 dark:border-white rounded-md bg-Primary-light-element dark:bg-Primary-dark-element mt-4">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
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
              ticks: {
                line: {
                  stroke: dark ? "white" : "#374151",
                },
                text: {
                  fill: dark ? "white" : "#374151",
                },
              },
            },
            grid: {
              line: {
                stroke: dark ? "white" : "#374151",
              },
            },
            legends: {
              title: {
                text: {
                  fill: dark ? "white" : "#374151",
                },
              },
              text: {
                fill: dark ? "white" : "#374151",
              },
              ticks: {
                text: {
                  fill: dark ? "white" : "#374151",
                },
              },
            },
            annotations: {
              text: {
                fill: dark ? "white" : "#374151",
              },
              link: {
                stroke: dark ? "white" : "#374151",
              },
              outline: {
                stroke: dark ? "white" : "#374151",
              },
              symbol: {
                fill: dark ? "white" : "#374151",
              },
            },
          }}
          lineWidth={3}
          pointSize={10}
          pointColor={"#ffffff"}
          pointBorderWidth={3}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          areaOpacity={0.3}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default index;
