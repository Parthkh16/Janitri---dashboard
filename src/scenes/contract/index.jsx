// src/scenes/contract/index.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { addContract, updateContract, deleteContract, setContracts } from "../../redux/contractSlice";
import { mockContracts } from '../../data/mockData';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ContractScene = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { contracts } = useSelector(
  (state) => state.contract || { contracts: [] }
);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(setContracts(mockContracts));
  }, [dispatch]);

  const handleOpen = (item = null) => {
    setEditMode(!!item);
    setFormData(item || {
      deviceName: '',
      facility: '',
      contractType: 'AMC',
      startDate: '',
      expiryDate: '',
      cost: '',
    });
    setErrors({});
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.deviceName) newErrors.deviceName = 'Required';
    if (!formData.facility) newErrors.facility = 'Required';
    if (!formData.startDate) newErrors.startDate = 'Required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Required';
    if (!formData.cost) newErrors.cost = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const status = new Date(formData.expiryDate) < new Date() ? 'Expired' :
      new Date(formData.expiryDate) - Date.now() < 30 * 24 * 60 * 60 * 1000 ? 'Expiring' : 'Active';

    const data = { ...formData, status, cost: Number(formData.cost) };

    if (editMode) {
      dispatch(updateContract(data));
    } else {
      const newId = contracts.length ? Math.max(...contracts.map(c => c.id)) + 1 : 1;
      dispatch(addContract({ ...data, id: newId }));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this contract?')) {
      dispatch(deleteContract(id));
    }
  };

  const exportToCSV = () => {
    const headers = ['Device', 'Facility', 'Type', 'Start', 'Expiry', 'Status', 'Cost'];
    const rows = contracts.map(c => [
      c.deviceName,
      c.facility,
      c.contractType,
      c.startDate,
      c.expiryDate,
      c.status,
      c.cost,
    ]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contracts.csv';
    a.click();
  };

  const columns = [
    { field: 'deviceName', headerName: 'Device', flex: 1 },
    { field: 'facility', headerName: 'Facility', flex: 1 },
    { field: 'contractType', headerName: 'Type', flex: 1 },
    { field: 'startDate', headerName: 'Start Date', flex: 1 },
    { field: 'expiryDate', headerName: 'Expiry Date', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'Active' ? 'success' :
            params.value === 'Expiring' ? 'warning' : 'error'
          }
          size="small"
        />
      ),
    },
    { field: 'cost', headerName: 'Cost ($)', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton size="small" onClick={() => handleOpen(params.row)}>
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h5">AMC/CMC Tracker</Typography>
        <Box>
          <Button startIcon={<AddIcon />} variant="contained" onClick={() => handleOpen()} sx={{ mr: 1 }}>
            Add Contract
          </Button>
          <Button startIcon={<FileDownloadIcon />} variant="outlined" onClick={exportToCSV}>
            Export CSV
          </Button>
        </Box>
      </Box>

      <Box height="70vh">
        <DataGrid
          rows={contracts}
          columns={columns}
          getRowId={row => row.id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? 'Edit Contract' : 'Add New Contract'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Device Name"
                name="deviceName"
                value={formData.deviceName}
                onChange={handleChange}
                error={!!errors.deviceName}
                helperText={errors.deviceName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Facility"
                name="facility"
                value={formData.facility}
                onChange={handleChange}
                error={!!errors.facility}
                helperText={errors.facility}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Contract Type"
                name="contractType"
                value={formData.contractType}
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                <option value="AMC">AMC</option>
                <option value="CMC">CMC</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Cost ($)"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                error={!!errors.cost}
                helperText={errors.cost}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Start Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.startDate}
                helperText={errors.startDate}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editMode ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContractScene;