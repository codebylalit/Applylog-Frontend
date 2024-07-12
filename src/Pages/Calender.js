import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Sidebar from "../components/Sidebar"; // Assuming Sidebar is your sidebar component
import axios from "axios";

const Calendar = () => {
  const [username, setUsername] = useState("User");
  const [authToken, setAuthToken] = useState("");
  const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const [events, setEvents] = useState({});
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [newEvent, setNewEvent] = useState({
    date: "",
    description: "",
    tag: "",
    index: null,
  });

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const dates = Array.from({ length: 6 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const dayOfMonth = weekIndex * 7 + dayIndex - firstDayIndex + 1;
      return dayOfMonth > 0 && dayOfMonth <= daysInMonth ? dayOfMonth : null;
    })
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchUsername(token);
      fetchEvents(token);
    }
  }, []);

  const fetchUsername = async (token) => {
    try {
      const response = await axios.get(
        "https://applylog-backend.onrender.com/api/auth/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const fetchEvents = async (token) => {
    try {
      const response = await axios.get(
        "https://applylog-backend.onrender.com/api/events",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Fetched events:", response.data);

      const eventsByDate = response.data.reduce((acc, event) => {
        const { date, ...eventData } = event;
        const dateString = date.toString(); // Ensure date is a string
        if (!acc[dateString]) {
          acc[dateString] = [];
        }
        acc[dateString].push(eventData);
        return acc;
      }, {});

      setEvents(eventsByDate);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewEvent({ date: "", description: "", tag: "", index: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: name === "date" ? value : value.toString(), // Convert to string only for description
    }));
  };

  const handleSubmit = async () => {
    const { date, description, tag } = newEvent;
    if (!date || !description) return;

    try {
      const response = await axios.post(
        "https://applylog-backend.onrender.com/api/events",
        { date: date.toString(), description, tag },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      console.log("Event added:", response.data);

      setEvents((prevEvents) => {
        const newEvents = { ...prevEvents };
        const dateString = date.toString(); // Ensure date is a string
        if (newEvents[dateString]) {
          newEvents[dateString].push({
            _id: response.data._id,
            description,
            tag,
          });
        } else {
          newEvents[dateString] = [
            { _id: response.data._id, description, tag },
          ];
        }
        return newEvents;
      });
      handleClose();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleUpdate = async () => {
    const { date, index, description, tag } = newEvent;
    const dateString = date.toString(); // Ensure date is a string

    if (
      !dateString ||
      index === null ||
      index < 0 ||
      !events[dateString] ||
      !Array.isArray(events[dateString])
    ) {
      console.error(
        "Invalid update request:",
        dateString,
        index,
        events[dateString]
      );
      return;
    }

    const eventToUpdate = events[dateString][index];
    // Ensure eventToUpdate is defined before proceeding with update
    if (!eventToUpdate) {
      console.error(
        "Event to update not found:",
        dateString,
        index,
        events[dateString]
      );
      return;
    }

    try {
      const response = await axios.put(
        `https://applylog-backend.onrender.com/api/events/${eventToUpdate._id}`,
        { description, tag },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      console.log("Event updated:", response.data);

      // Update state with the updated event
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        updatedEvents[dateString][index] = {
          ...eventToUpdate,
          description,
          tag,
        };
        return updatedEvents;
      });

      handleClose(); // Close the dialog after successful update
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async (date, eventIndex) => {
    const eventToDelete = events[date][eventIndex];

    try {
      const response = await axios.delete(
        `https://applylog-backend.onrender.com/api/events/${eventToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      console.log("Event deleted:", response.data);

      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        updatedEvents[date] = updatedEvents[date].filter(
          (_, index) => index !== eventIndex
        );
        return updatedEvents;
      });
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="flex min-h-screen font-body-18 bg-gray-100 text-black">
      <Sidebar onLogout={() => {}} setCurrentView={() => {}} />

      <div className="flex-1 flex flex-col ml-52">
        <Box p={3}>
          <div className="flex justify-between items-center">
            <Typography
              variant="h4"
              gutterBottom
              className="text-white text-center"
            >
              {currentDate.toLocaleString("default", { month: "long" })},{" "}
              {currentYear}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setNewEvent({
                  date: "",
                  description: "",
                  tag: "",
                  index: null,
                });
                handleClickOpen();
              }}
            >
              Add Event
            </Button>
          </div>

          {/* <Typography variant="h6" className="text-white">
            {username}
          </Typography> */}

          <Grid container spacing={2} className="mt-2">
            {days.map((day, index) => (
              <Grid item xs={1.7} key={index}>
                <Typography variant="h6" align="center">
                  {day}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {dates.map((week, weekIndex) => (
            <Grid container spacing={2} key={weekIndex}>
              {week.map((date, dateIndex) => (
                <Grid item xs={1.7} key={dateIndex}>
                  {date && (
                    <Box
                      border={1}
                      borderRadius={2}
                      p={2}
                      m={1}
                      minHeight={100}
                      bgcolor="#333"
                    >
                      <Typography variant="body1" align="center">
                        {date}
                      </Typography>
                      {Array.isArray(events[date.toString()])
                        ? events[date.toString()].map((event, eventIndex) => (
                            <Box
                              key={event._id}
                              bgcolor={
                                event.tag === "Design"
                                  ? "#42a5f5"
                                  : event.tag === "Development"
                                  ? "#ef5350"
                                  : event.tag === "Edit file"
                                  ? "#ff7043"
                                  : event.tag === "Green Tag"
                                  ? "#66bb6a"
                                  : event.tag === "Note taking"
                                  ? "#8d6e63"
                                  : event.tag === "Regular Tag"
                                  ? "#bdbdbd"
                                  : event.tag === "Blue Tag"
                                  ? "#29b6f6"
                                  : event.tag === "Orange Tag"
                                  ? "#ffa726"
                                  : "#9e9e9e"
                              }
                              color="white"
                              borderRadius={1}
                              p={0.5}
                              mt={0.5}
                            >
                              <Typography variant="body2" align="center">
                                {event.description}
                              </Typography>
                              <div className="flex justify-end mt-1">
                                <IconButton
                                  size="small"
                                  onClick={(event) =>
                                    setAnchorEl(event.currentTarget)
                                  }
                                >
                                  <MoreVertIcon fontSize="small" />
                                </IconButton>
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={() => setAnchorEl(null)}
                                >
                                  <MenuItem
                                    onClick={() => {
                                      setNewEvent({
                                        date: date.toString(),
                                        index: eventIndex,
                                        description: event.description,
                                        tag: event.tag,
                                      });
                                      handleClickOpen();
                                      setAnchorEl(null);
                                    }}
                                  >
                                    Edit
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      handleDelete(date.toString(), eventIndex);
                                      setAnchorEl(null);
                                    }}
                                  >
                                    Delete
                                  </MenuItem>
                                </Menu>
                              </div>
                            </Box>
                          ))
                        : null}
                    </Box>
                  )}
                </Grid>
              ))}
            </Grid>
          ))}

          <Dialog
            open={open}
            onClose={handleClose}
            className="text-white rounded-md"
          >
            <DialogTitle className="bg-gray-100 text-white">
              {newEvent.index !== null ? "Update Event" : "Add Event"}
            </DialogTitle>
            <DialogContent className="bg-gray-100 text-white">
              <TextField
                autoFocus
                margin="dense"
                name="date"
                label="Date"
                type="number"
                fullWidth
                value={newEvent.date}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="description"
                label="Description"
                type="text"
                fullWidth
                value={newEvent.description}
                onChange={handleChange}
              />
              <TextField
                select
                margin="dense"
                name="tag"
                label="Tag"
                fullWidth
                value={newEvent.tag}
                onChange={handleChange}
              >
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
                <MenuItem value="Edit file">Edit file</MenuItem>
                <MenuItem value="Green Tag">Green Tag</MenuItem>
                <MenuItem value="Note taking">Note taking</MenuItem>
                <MenuItem value="Regular Tag">Regular Tag</MenuItem>
                <MenuItem value="Blue Tag">Blue Tag</MenuItem>
                <MenuItem value="Orange Tag">Orange Tag</MenuItem>
              </TextField>
            </DialogContent>
            <DialogActions className="bg-gray-100 text-white">
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              {newEvent.index !== null ? (
                <Button onClick={handleUpdate} color="primary">
                  Update
                </Button>
              ) : (
                <Button onClick={handleSubmit} color="primary">
                  Add
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </div>
  );
};

export default Calendar;
