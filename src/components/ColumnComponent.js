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
import { format } from "date-fns";

const Column = ({
  title,
  jobs,
  updateJob,
  deleteJob,
  toggleForm,
  searchQuery,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");
  const [jobDetailsOpen, setJobDetailsOpen] = useState(false);

  const handleMenuOpen = (event, job) => {
    event.stopPropagation();
    setMenuAnchorEl(event.currentTarget);
    setSelectedJob(job);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUpdate = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent card click
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
        return "#4BC0C0"; // Bright Red
      case "Interview":
        return "#36A2EB"; // Bright Blue
      case "Wishlist":
        return "#9966FF"; // Bright Purple
      case "Offered":
        return "#FFCE56"; // Bright Yellow
      case "Rejected":
        return "#FF6384"; // Bright Green
      case "Follow-up":
        return "#FF9F40"; // Bright Orange
      default:
        return "#FFD180"; // Default color
    }
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm.trim()) {
      return text;
    }
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setJobDetailsOpen(true); // Ensure job details dialog opens
  };

  const closeJobDetails = () => {
    setJobDetailsOpen(false);
  };

  return (
    <Box
      sx={{
        flex: 1,
        margin: "0 10px",
        backgroundColor: "#333",
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
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray" }}>
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
                color: "black",
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
      {jobs.map((job) =>
        // Apply conditional rendering based on searchQuery
        searchQuery &&
        !(
          job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase())
        ) ? null : (
          <Card
            key={job._id} // Use a unique identifier for key
            sx={{
              marginBottom: "10px",
              position: "relative",
              color: "white",
              borderRadius: "8px",
              backgroundColor: getBadgeColor(title),
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
              },
              cursor: "pointer", // Ensure card is clickable
            }}
            onClick={() => openJobDetails(job)} // Open details on card click
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
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(job.position, searchQuery),
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#333" }}
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(job.company, searchQuery),
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#333" }}
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(job.location, searchQuery),
                    }}
                  />

                  {job.deadline && (
                    <Typography sx={{ color: "text.secondary" }}>
                      {format(new Date(job.deadline), "yyyy-MM-dd")}
                    </Typography>
                  )}
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
                    <MenuItem
                      onClick={() => {
                        handleDelete();
                      }}
                    >
                      <DeleteIcon fontSize="small" /> Delete
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )
      )}
      {/* Dialog/Modal for Job Details */}
      <Dialog
        open={jobDetailsOpen}
        onClose={closeJobDetails}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "1rem",
          },
        }} // Custom Tailwind styles for the dialog
      >
        <DialogTitle className="text-2xl font-bold text-center text-white mb-4 bg-gray-100">
          Job Details
        </DialogTitle>
        <DialogContent dividers className="space-y-4 bg-gray-100 text-white">
          <Typography variant="body1" className="text-lg">
            <strong>Company:</strong> {selectedJob?.company}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Position:</strong> {selectedJob?.position}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Location:</strong> {selectedJob?.location}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Salary:</strong> {selectedJob?.salary}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Description:</strong> {selectedJob?.description}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Deadline:</strong>{" "}
            {selectedJob?.deadline
              ? format(new Date(selectedJob?.deadline), "yyyy-MM-dd")
              : ""}
          </Typography>
          <Typography variant="body1" className="text-lg">
            <strong>Status:</strong> {selectedJob?.status}
          </Typography>
        </DialogContent>
        <DialogActions className="bg-gray-100">
          <Button
            onClick={closeJobDetails}
            className="text-white py-2 px-4 rounded-md"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Form Dialog */}
      <Dialog
        open={editFormOpen}
        onClose={handleEditFormClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "1rem",
          },
        }}
      >
        <DialogTitle className="text-2xl font-bold text-center text-white bg-gray-100 mb-4">
          Edit Job Details
        </DialogTitle>
        <DialogContent className="space-y-4 bg-gray-100">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="company"
            label="Company Name"
            name="company"
            value={formData.company || ""}
            onChange={handleInputChange}
            className="bg-white rounded-md"
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
            className="bg-white rounded-md"
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
            className="bg-white rounded-md"
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
            className="bg-white rounded-md"
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
            className="bg-white rounded-md"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="deadline"
            label="Deadline"
            name="deadline"
            value={formData.deadline || ""}
            onChange={handleInputChange}
            className="bg-white rounded-md"
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
            className="bg-white rounded-md"
          />
        </DialogContent>
        <DialogActions className="justify-center bg-gray-100">
          <Button
            onClick={handleEditFormSubmit}
            className="bg-green-400 text-white py-2 px-4 rounded-md"
          >
            Save
          </Button>
          <Button
            onClick={handleEditFormClose}
            className="bg-gray-400 text-white py-2 px-4 rounded-md"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Column;
