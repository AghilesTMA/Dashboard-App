import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { DataGrid } from "@mui/x-data-grid";
import { DummyUsersThree } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";

const rows = [...DummyUsersThree];
const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "number", headerName: "PhoneNumber", flex: 1, minWidth: 150 },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: ({ row: { cost } }) => (
      <div className=" text-Neutral-green">{cost}</div>
    ),
    minWidth: 150,
  },
  { field: "date", headerName: "Date", flex: 1, minWidth: 150 },
];

const index = () => {
  const { dark } = useContext(darkTheme);
  return (
    <div className=" w-full h-full">
      <PageTop
        title={"Contacts"}
        text={"List of contacts for future references"}
      />
      <div className=" h-[500px] w-full desktop:p-8 p-2">
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          sx={{
            color: dark ? "white" : "#334155",
            overflow: scroll,
            "& .MuiTablePagination-selectLabel": {
              color: dark ? "white" : "#334155",
            },
            "& .MuiSelect-select": { color: dark ? "white" : "#334155" },
            "& .MuiTablePagination-displayedRows": {
              color: dark ? "white" : "#334155",
            },
            "& .MuiButtonBase-root": { color: dark ? "white" : "#334155" },
            "& .MuiSvgIcon-root": { color: dark ? "white" : "#334155" },
            "& .MuiSvgIcon-root": { color: dark ? "white" : "#334155" },
            "& .MuiDataGrid-columnHeaders,& .MuiDataGrid-footerContainer": {
              backgroundColor: "#9b98f2",
            },
          }}
        />
      </div>
    </div>
  );
};

export default index;
