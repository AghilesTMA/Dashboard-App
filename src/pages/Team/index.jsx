import React, { useContext } from "react";
import PageTop from "../../components/PageTop";
import { DataGrid } from "@mui/x-data-grid";
import { DummyUsers } from "../../data/DummyData";
import { darkTheme } from "../../context/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faUserShield,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

const rows = [...DummyUsers];
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 150 },
  { field: "phone", headerName: "Phone", flex: 1, minWidth: 150 },
  {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => <AccessComponent access={access} />,
    minWidth: 150,
  },
];

const AccessComponent = ({ access }) => {
  return (
    <div
      className={` font-semibold text-white flex justify-center flex-wrap items-center gap-2 p-2 ${
        access === "admin" ? " bg-purple-400" : ""
      } ${access === "manager" ? " bg-green-400" : ""} ${
        access === "user" ? " bg-green-600" : ""
      } rounded-md cursor-pointer w-3/4`}
    >
      {access === "admin" ? <FontAwesomeIcon icon={faCrown} /> : null}
      {access === "manager" ? <FontAwesomeIcon icon={faUserShield} /> : null}
      {access === "user" ? <FontAwesomeIcon icon={faUserLock} /> : null}
      {access}
    </div>
  );
};

const index = () => {
  const { dark } = useContext(darkTheme);
  return (
    <div className=" w-full h-full">
      <PageTop title={"TEAM"} text={"Managing the Team Members"} />
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
