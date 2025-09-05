// src/scenes/service/index.jsx
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
  Link,
  useTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { addVisit, updateVisit, deleteVisit, setVisits } from '../../redux/serviceSlice';
import { mockServiceVisits } from '../../data/mockData';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ServiceScene = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { visits } = useSelector((state) => state.service ?? { visits: [] });


  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);

  useEffect(() => {
    dispatch(setVisits(mockServiceVisits));
  }, [dispatch]);

  const handleOpen = (item = null) => {
    setEditMode(!!item);
    setFormData(item || {
      deviceName: '',
      facility: '',
      serviceDate: '',
      serviceType: 'Preventive',
      engineerName: '',
      notes: '',
      attachments: [],
    });
    setFiles([]);
    setErrors({});
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.deviceName) newErrors.deviceName = 'Required';
    if (!formData.facility) newErrors.facility = 'Required';
    if (!formData.serviceDate) newErrors.serviceDate = 'Required';
    if (!formData.engineerName) newErrors.engineerName = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const attachmentPaths = files.map(f => `/reports/uploaded/${f.name}`);
    const data = { ...formData, attachments: [...formData.attachments, ...attachmentPaths] };

    if (editMode) {
      dispatch(updateVisit(data));
    } else {
      const newId = visits.length ? Math.max(...visits.map(v => v.id)) + 1 : 1;
      dispatch(addVisit({ ...data, id: newId }));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this service visit?')) {
      dispatch(deleteVisit(id));
    }
  };

  const columns = [
    { field: 'deviceName', headerName: 'Device', flex: 1 },
    { field: 'facility', headerName: 'Facility', flex: 1 },
    { field: 'serviceDate', headerName: 'Date', flex: 1 },
    { field: 'serviceType', headerName: 'Type', flex: 1 },
    { field: 'engineerName', headerName: 'Engineer', flex: 1 },
    {
      field: 'attachments',
      headerName: 'Attachments',
      flex: 1,
      renderCell: (params) => (
        <Box>
          {params.value?.map((file, i) => (
            <Link key={i} href={file} target="_blank" variant="body2">
              File {i + 1}
            </Link>
          ))}
        </Box>
      ),
    },
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
        <Typography variant="h5">Service Visit Logs</Typography>
        <Button startIcon={<AddIcon />} variant="contained" onClick={() => handleOpen()}>
          Log Visit
        </Button>
      </Box>

      <Box height="70vh">
        <DataGrid
          rows={visits}
          columns={columns}
          getRowId={row => row.id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? 'Edit Visit' : 'Log New Visit'}</DialogTitle>
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
                fullWidth
                type="date"
                label="Service Date"
                name="serviceDate"
                value={formData.serviceDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.serviceDate}
                helperText={errors.serviceDate}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Service Type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                <option value="Preventive">Preventive</option>
                <option value="Breakdown">Breakdown</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Engineer Name"
                name="engineerName"
                value={formData.engineerName}
                onChange={handleChange}
                error={!!errors.engineerName}
                helperText={errors.engineerName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*,.pdf"
                style={{ display: 'none' }}
                id="upload-attachment"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="upload-attachment">
                <Button component="span" startIcon={<CloudUploadIcon />} variant="outlined">
                  Attach Files
                </Button>
              </label>
              {files.length > 0 && (
                <Typography mt={1} variant="body2" color="textSecondary">
                  {files.length} file(s) selected
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editMode ? 'Update' : 'Log'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServiceScene;