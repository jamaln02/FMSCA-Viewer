import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  tableCellClasses,
  Box,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Papa from "papaparse";
import Filter from "./Filter";
import { blue } from "@mui/material/colors";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: blue[800],
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 500,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#0067c05e",
    },

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.csv");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const csvText = await response.text();
        const result = Papa.parse(csvText, { header: true });

        setData(result.data);
        setFilteredData(result.data);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearch =
        search === "" ||
        (item.legal_name &&
          item.legal_name.toLowerCase().includes(search.toLowerCase()));
      const matchesFilter = filter === "" || item.record_status === filter;
      return matchesSearch && matchesFilter;
    });

    setFilteredData(filtered);
  }, [search, filter, data]);
  return (
    <Paper>
      <Filter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Created_DT</StyledTableCell>
              <StyledTableCell>Modified_DT</StyledTableCell>
              <StyledTableCell>Entity</StyledTableCell>
              <StyledTableCell>Operating Status </StyledTableCell>
              <StyledTableCell>Legal Name</StyledTableCell>
              <StyledTableCell>DBA Name</StyledTableCell>
              <StyledTableCell>Physical Address</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>DOT</StyledTableCell>
              <StyledTableCell>MC/MX/FF</StyledTableCell>
              <StyledTableCell>Power Units</StyledTableCell>
              <StyledTableCell>Out of Service Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.created_dt}</StyledTableCell>
                  <StyledTableCell>
                    {row.data_source_modified_dt}
                  </StyledTableCell>
                  <StyledTableCell>{row.entity_type}</StyledTableCell>
                  <StyledTableCell>{row.record_status}</StyledTableCell>
                  <StyledTableCell>{row.legal_name}</StyledTableCell>
                  <StyledTableCell>{row.dba_name}</StyledTableCell>
                  <StyledTableCell>{row.physical_address}</StyledTableCell>
                  <StyledTableCell>{row.phone}</StyledTableCell>
                  <StyledTableCell>{row.usdot_number}</StyledTableCell>
                  <StyledTableCell>{row.mc_mx_ff_number}</StyledTableCell>
                  <StyledTableCell>{row.power_units}</StyledTableCell>
                  <StyledTableCell>{row.out_of_service_date}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} display="flex" justifyContent="center" marginBottom={4}>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </Box>
    </Paper>
  );
};

export default DataTable;
