// src/scenes/installation/index.jsx
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
import { addInstallation, updateInstallation, deleteInstallation, setInstallations } from "../../redux/installationSlice";

import { mockInstallations } from '../../data/mockData';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const InstallationScene = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { installations } = useSelector((state) => state.installation ?? { installations: [] });


  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);

  useEffect(() => {
    dispatch(setInstallations(mockInstallations));
  }, [dispatch]);

  const handleOpen = (item = null) => {
    setEditMode(!!item);
    setFormData(item || {
      deviceName: '',
      facility: '',
      installationDate: '',
      installedBy: '',
      trainingStatus: 'Pending',
      trainingNotes: '',
      photos: [],
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
    if (!formData.installationDate) newErrors.installationDate = 'Required';
    if (!formData.installedBy) newErrors.installedBy = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const photoPaths = files.map(f => `/images/uploaded/${f.name}`);
    const data = { ...formData, photos: [...formData.photos, ...photoPaths] };

    if (editMode) {
      dispatch(updateInstallation(data));
    } else {
      const newId = installations.length ? Math.max(...installations.map(i => i.id)) + 1 : 1;
      dispatch(addInstallation({ ...data, id: newId }));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this installation?')) {
      dispatch(deleteInstallation(id));
    }
  };

  const columns = [
    { field: 'deviceName', headerName: 'Device', flex: 1 },
    { field: 'facility', headerName: 'Facility', flex: 1 },
    { field: 'installationDate', headerName: 'Installed On', flex: 1 },
    { field: 'installedBy', headerName: 'Installed By', flex: 1 },
    { field: 'trainingStatus', headerName: 'Training', flex: 1 },
    {
      field: 'photos',
      headerName: 'Photos',
      flex: 1,
      renderCell: (params) => (
        <Box>
          {params.value?.slice(0, 2).map((src, i) => (
            <Avatar key={i} src={src} sx={{ width: 30, height: 30, ml: i }} />
          ))}
          {params.value?.length > 2 && ` +${params.value.length - 2}`}
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
        <Typography variant="h5">Installation & Training</Typography>
        <Button startIcon={<AddIcon />} variant="contained" onClick={() => handleOpen()}>
          Add Installation
        </Button>
      </Box>

      <Box height="70vh">
        <DataGrid
          rows={installations}
          columns={columns}
          getRowId={row => row.id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Box>

      {/* Dialog Form */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? 'Edit Installation' : 'Add New Installation'}</DialogTitle>
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
                label="Installation Date"
                name="installationDate"
                value={formData.installationDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.installationDate}
                helperText={errors.installationDate}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Installed By"
                name="installedBy"
                value={formData.installedBy}
                onChange={handleChange}
                error={!!errors.installedBy}
                helperText={errors.installedBy}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Training Status"
                name="trainingStatus"
                value={formData.trainingStatus}
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Training Notes"
                name="trainingNotes"
                value={formData.trainingNotes}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-photo"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="upload-photo">
                <Button
                  component="span"
                  startIcon={<CloudUploadIcon />}
                  variant="outlined"
                >
                  Upload Photos
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
            {editMode ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InstallationScene;