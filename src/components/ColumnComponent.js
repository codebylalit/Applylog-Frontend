import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Badge,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PlusIcon } from "@heroicons/react/outline";

const Column = ({ title, jobs, updateJob, deleteJob, toggleForm }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");

  const handleMenuOpen = (event, job) => {
    event.stopPropagation();
    setMenuAnchorEl(event.currentTarget);
    setSelectedJob(job);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUpdate = () => {
    if (selectedJob) {
      setFormData({ ...selectedJob });
      setStatus(selectedJob.status);
      setEditFormOpen(true);
    }
    handleMenuClose();
  };

  const handleDelete = () => {
    if (selectedJob) {
      deleteJob(selectedJob._id);
    }
    handleMenuClose();
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
    setFormData({});
    setSelectedJob(null);
  };

  const handleEditFormSubmit = () => {
    if (selectedJob) {
      updateJob(selectedJob._id, { ...formData, status });
    }
    handleEditFormClose();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getBadgeColor = (title) => {
    switch (title) {
      case "Applied":
        return "#4682B4"; // Bright Yellow
      case "Interview":
        return "#009688"; // Deep Orange
      case "Wishlist":
        return "#673AB7"; // Deep Purple
      case "Offered":
        return "#006400"; // Green
      case "Rejected":
        return "#FF0000"; // Red
      default:
        return "#FF9800"; // Orange
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        margin: "0 10px",
        backgroundColor: "#ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            {title}
          </Typography>
          <Badge
            badgeContent={jobs.length}
            sx={{
              marginLeft: "8px",
              color: "white",
              borderRadius: "50%",
              height: "24px",
              minWidth: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiBadge-badge": {
                right: 15,
                top: 11,
                padding: 0,
                height: "24px",
                minWidth: "24px",
                borderRadius: "50%",
                backgroundColor: getBadgeColor(title),
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          />
        </Box>
        <IconButton size="small" onClick={toggleForm}>
          <PlusIcon className="h-5 w-5 inline-block mr-1 text-gray-700" />
        </IconButton>
      </Box>
      {jobs.map((job) => (
        <Card
          key={job._id}
          sx={{
            marginBottom: "10px",
            position: "relative",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "fff",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {job.category}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {job.position}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {job.company}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {job.location}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuOpen(e, job)}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleUpdate}>
                    <EditIcon fontSize="small" /> Update
                  </MenuItem>
                  <MenuItem onClick={handleDelete}>
                    <DeleteIcon fontSize="small" /> Delete
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
      <Dialog open={editFormOpen} onClose={handleEditFormClose}>
        <DialogTitle>Edit Job Details</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="company"
            label="Company Name"
            name="company"
            value={formData.company || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="position"
            label="Position"
            name="position"
            value={formData.position || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="location"
            label="Location"
            name="location"
            value={formData.location || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="salary"
            label="Salary"
            name="salary"
            value={formData.salary || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={formData.description || ""}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="status"
            label="Status"
            name="status"
            value={status || ""}
            onChange={(e) => setStatus(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditFormSubmit} color="primary">
            Save
          </Button>
          <Button onClick={handleEditFormClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Column;
