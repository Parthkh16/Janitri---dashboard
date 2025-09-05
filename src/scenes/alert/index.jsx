// src/scenes/alert/index.jsx
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
  Avatar,
  useTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { addAlert, updateAlert, deleteAlert, setAlerts } from "../../redux/alertSlice";
import { mockAlerts } from '../../data/mockData';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const AlertScene = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
 const { alerts } = useSelector(
  (state) => state.alert || { alerts: [] }
);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(setAlerts(mockAlerts));
  }, [dispatch]);

  const handleOpen = (item = null) => {
    setEditMode(!!item);
    setFormData(item || {
      deviceName: '',
      facility: '',
      alertType: 'Error',
      date: '',
      reportedBy: '',
      description: '',
      photo: null,
    });
    setFile(null);
    setErrors({});
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.deviceName) newErrors.deviceName = 'Required';
    if (!formData.facility) newErrors.facility = 'Required';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.reportedBy) newErrors.reportedBy = 'Required';
    if (!formData.description) newErrors.description = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const photoPath = file ? `/images/alerts/${file.name}` : formData.photo;

    const data = { ...formData, photo: photoPath };

    if (editMode) {
      dispatch(updateAlert(data));
    } else {
      const newId = alerts.length ? Math.max(...alerts.map(a => a.id)) + 1 : 1;
      dispatch(addAlert({ ...data, id: newId }));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this alert?')) {
      dispatch(deleteAlert(id));
    }
  };

  const columns = [
    { field: 'deviceName', headerName: 'Device', flex: 1 },
    { field: 'facility', headerName: 'Facility', flex: 1 },
    { field: 'alertType', headerName: 'Type', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'reportedBy', headerName: 'Reported By', flex: 1 },
    {
      field: 'photo',
      headerName: 'Photo',
      flex: 1,
      renderCell: (params) => params.value ? (
        <Avatar src={params.value} sx={{ width: 40, height: 40 }} />
      ) : '-',
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
        <Typography variant="h5">Alerts & Photo Logs</Typography>
        <Button startIcon={<AddIcon />} variant="contained" onClick={() => handleOpen()}>
          Log Alert
        </Button>
      </Box>

      <Box height="70vh">
        <DataGrid
          rows={alerts}
          columns={columns}
          getRowId={row => row.id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? 'Edit Alert' : 'Log New Alert'}</DialogTitle>
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
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.date}
                helperText={errors.date}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Alert Type"
                name="alertType"
                value={formData.alertType}
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                <option value="Error">Error</option>
                <option value="Warning">Warning</option>
                <option value="Service Due">Service Due</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reported By"
                name="reportedBy"
                value={formData.reportedBy}
                onChange={handleChange}
                error={!!errors.reportedBy}
                helperText={errors.reportedBy}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-photo"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="upload-photo">
                <Button component="span" startIcon={<CloudUploadIcon />} variant="outlined">
                  Upload Photo
                </Button>
              </label>
              {file && (
                <Typography mt={1} variant="body2" color="textSecondary">
                  {file.name}
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

export default AlertScene;