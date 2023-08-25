import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DummyUsersTwo } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";

const rows = DummyUsersTwo;
const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "registerId", headerName: "RegisterId", flex: 1, minWidth: 100 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 150 },
  { field: "address", headerName: "Address", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 100 },
  { field: "zipCode", headerName: "ZipCode", flex: 1, minWidth: 70 },
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
          slots={{ toolbar: GridToolbar }}
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
