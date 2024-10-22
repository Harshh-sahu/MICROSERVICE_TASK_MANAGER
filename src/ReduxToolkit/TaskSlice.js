import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/tasks", {
        params: { status },
      });
      console.log("fetch tasks", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const fetchUsersTasks = createAsyncThunk(
  "task/fetchUsersTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/tasks/user", {
        params: { status },
      });
      console.log("fetch users tasks", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const fetchTasksById = createAsyncThunk(
  "task/fetchTasksById",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get(`/api/tasks/${taskId}`);
      console.log("fetch tasks by ID", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskData) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.post(`/api/tasks`, taskData);
      console.log("created tasks", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ id, updattedTaskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.put(`/api/tasks/${id}`, updattedTaskData);
      console.log("updated tasks", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const assignedTaskToUser = createAsyncThunk(
  "task/assignedTaskToUser",
  async ({ taskId, userId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.put(
        `/api/tasks/${taskId}/user/${userId}/assigned`
      );
      console.log("assigned tasks", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async ({ taskId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.delete(`/api/tasks/${taskId}`);
      console.log("task delete successfully");
      return taskId;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.datae.error);
    }
  }
);

const taskS1ice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
    taskDetai1s: null,
    usersTask: [],
  },
  reducer: {},
  extraReducer: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        (state.error = action.error.message), (state.loading = false);
      })
      .addCase(fetchUsersTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.usersTask = action.payload;
      })
      .addCase(fetchUsersTasks.rejected, (state, action) => {
        (state.error = action.error.message), (state.loading = false);
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        (state.error = action.error.message), (state.loading = false);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updateTask } : task
        );
      });
  },
});
