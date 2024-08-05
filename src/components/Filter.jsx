import React from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Box,
} from "@mui/material";

const Filter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <Box p={2}>
      <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            placeholder="Search by Legal Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🔍</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Filter by Operating Status</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
