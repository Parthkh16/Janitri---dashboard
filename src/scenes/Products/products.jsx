import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockProducts } from "../../data/mockData";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.4 },
    {
      field: "image",
      headerName: "Image",
      flex: 0.8,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.name}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      ),
    },
    { field: "name", headerName: "Product Name", flex: 1.2 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "model", headerName: "Model", flex: 1 },
    { field: "price", headerName: "Price (INR)", type: "number", flex: 1 },
    { field: "stock", headerName: "Stock", type: "number", flex: 0.8 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "facility", headerName: "Facility", flex: 1.2 },
  ];

  return (
    <Box m="20px">
      <Typography variant="h3" color={colors.grey[100]} gutterBottom>
        Product Catalog
      </Typography>
      <Box
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <DataGrid rows={mockProducts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
