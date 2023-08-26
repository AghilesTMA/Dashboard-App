import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { darkTheme } from "../../context/ThemeProvider";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ProgressCirle from "../../components/ProgressCirle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMoneyBill,
  faUserPlus,
  faTrafficLight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveChoropleth } from "@nivo/geo";
import {
  LineData,
  BarData,
  MapData,
  GeoCoordinates,
} from "../../data/DummyData";

const Card = ({ number, txt, prc, icon }) => {
  return (
    <div className=" w-full flex desktop:flex-row flex-col gap-2 justify-between items-center p-4 rounded-md bg-Primary-light-element dark:bg-Primary-dark-element max-w-sm ">
      <div className=" flex flex-col gap-1 desktop:items-start items-center">
        <FontAwesomeIcon icon={icon} className=" text-Neutral-green h-8 w-8" />
        <h3 className=" font-semibold text-lg">{number}</h3>
        <h4 className=" font-medium text-Neutral-green">{txt}</h4>
      </div>
      <div className=" flex flex-col gap-1  items-center">
        <div className=" h-24 w-24 rotate-[-90deg]">
          <ProgressCirle percentage={prc} />
        </div>
        <span className=" text-Neutral-green font-semibold">{`+${prc}%`}</span>
      </div>
    </div>
  );
};
const LongCard = ({ id, name, date, price }) => {
  return (
    <div className=" flex justify-between items-center bg-Primary-light-element dark:bg-Primary-dark-element p-4 rounded-md">
      <div className=" flex flex-col gap-1">
        <h3 className=" font-semibold text-lg text-Neutral-green">{id}</h3>
        <h4 className=" font-medium">{name}</h4>
      </div>
      <span>{date}</span>
      <span className=" px-4 py-2 rounded-md bg-Neutral-green text-white">{`$${price}`}</span>
    </div>
  );
};

const index = () => {
  const { dark } = useContext(darkTheme);
  return (
    <div className=" p-2">
      <div className=" flex flex-col tablet:flex-row items-center">
        <PageTop title={"DASHBOARD"} text={"Welcome to your dashboard"} />
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            bgcolor: "#9b98f2",
            width: "250px",
            "&:hover": { bgcolor: "#44b98e" },
          }}
        >
          DOWNLOAD REPORTS
        </Button>
      </div>
      <div className=" p-2 tablet:grid desktop:grid-cols-12 gap-2 tablet:grid-cols-2 flex flex-col ">
        <div className=" flex justify-center desktop:col-span-3">
          <Card
            icon={faEnvelope}
            txt={"Emails sent"}
            number={"12,361"}
            prc={14}
          />
        </div>
        <div className=" flex justify-center desktop:col-span-3">
          <Card
            icon={faMoneyBill}
            txt={"Sales Obtained"}
            number={"431,225"}
            prc={21}
          />
        </div>
        <div className=" flex justify-center desktop:col-span-3">
          <Card
            icon={faUserPlus}
            txt={"New Clients"}
            number={"32,441"}
            prc={5}
          />
        </div>
        <div className=" flex justify-center desktop:col-span-3">
          <Card
            icon={faTrafficLight}
            txt={"Traffic Received"}
            number={"1,325,134"}
            prc={43}
          />
        </div>
        <div className=" desktop:col-span-8 col-span-2 bg-Primary-light-element dark:bg-Primary-dark-element rounded-md p-2">
          <div className=" flex justify-between items-center">
            <div>
              <h3 className=" font-bold text-lg">Revenue Generated</h3>
              <h3 className=" font-bold text-lg text-Neutral-green">
                $59,342,32
              </h3>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className=" text-Neutral-green h-6 w-6"
            />
          </div>
          <div className=" h-[300px] text-gray-700">
            <ResponsiveLine
              data={LineData}
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
        <div className=" desktop:col-span-4 col-span-2 flex flex-col gap-1 rounded-md">
          <div className=" bg-Primary-light-element dark:bg-Primary-dark-element rounded-md p-2">
            Recent Transactions
          </div>
          <div className=" flex flex-col gap-1 overflow-y-auto max-h-96">
            <LongCard
              id={"2d912u"}
              name={"Mahmoud"}
              date={"29-06-2023"}
              price={"73.00"}
            />
            <LongCard
              id={"23aj34"}
              name={"Achraf"}
              date={"13-04-2021"}
              price={"120.3"}
            />
            <LongCard
              id={"s9xd2j"}
              name={"Anis"}
              date={"02-12-2022"}
              price={"320.99"}
            />
            <LongCard
              id={"44sss3"}
              name={"Mouiz"}
              date={"15-02-2020"}
              price={"45.15"}
            />
            <LongCard
              id={"f7s9s1"}
              name={"Yasser"}
              date={"12-09-2023"}
              price={"500.00"}
            />
          </div>
        </div>
        <div className=" tablet:col-span-2 desktop:col-span-4 bg-Primary-light-element dark:bg-Primary-dark-element rounded-md p-2">
          <div className=" font-semibold text-lg">Compaign</div>
          <div className=" flex flex-col items-center text-center">
            <div className=" w-1/2 rotate-[-90deg]">
              <ProgressCirle percentage={72.3} />
            </div>
            <h3 className=" text-Neutral-green font-semibold">
              $48,352 revenue generated
            </h3>
            <span>Includes extra misc expenditures costs</span>
          </div>
        </div>
        <div className=" h-80 desktop:h-auto tablet:col-span-2 desktop:col-span-4 bg-Primary-light-element dark:bg-Primary-dark-element rounded-md p-2 flex flex-col">
          <div className=" font-semibold text-lg">Select Quantity</div>
          <div className=" h-full text-gray-700">
            <ResponsiveBar
              data={BarData}
              keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
              ]}
              indexBy="country"
              margin={{ top: 50, right: 80, bottom: 50, left: 30 }}
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
                legend: undefined,
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: undefined,
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
        <div className=" h-80 desktop:h-auto flex flex-col tablet:col-span-2 desktop:col-span-4 bg-Primary-light-element dark:bg-Primary-dark-element rounded-md p-2">
          <div className=" font-semibold text-lg">Geography Based Traffic</div>
          <div className=" h-full  text-gray-700">
            <ResponsiveChoropleth
              data={MapData}
              features={GeoCoordinates.features}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              colors="nivo"
              domain={[0, 1000000]}
              unknownColor="#f0f1f2"
              label="properties.name"
              valueFormat=".2s"
              projectionScale={60}
              projectionTranslation={[0.45, 0.6]}
              projectionRotation={[0, 0, 0]}
              enableGraticule={true}
              graticuleLineColor={dark ? "white" : "#374151"}
              borderWidth={0.5}
              borderColor="#152538"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;