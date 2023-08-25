import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { ResponsiveChoropleth } from "@nivo/geo";
import { GeoCoordinates } from "../../data/DummyData";
import { MapData as data } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";


const index = () => {
  const {dark} = useContext(darkTheme)
  return (
    <div className=" p-2">
      <PageTop title={"GEOGRAPHY CHART"} text={"Simple Geography Chart"} />
      <div className=" p-2 desktop:p-8  tablet:h-[500px] h-[250px] border-solid border-2 text-gray-700 border-gray-700 dark:border-white rounded-md bg-Primary-light-element dark:bg-Primary-dark-element mt-4">
        <ResponsiveChoropleth
          data={data}
          features={GeoCoordinates.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#f0f1f2"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor={dark?"white":"#374151"}
          borderWidth={0.5}
          borderColor="#152538"
          
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor:dark?"white":"#374151" ,
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
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
