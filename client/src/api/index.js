import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:8080/api/",
});

const url = 'http://localhost:8000';

export const UserSignUp = async (data) => {
  try {
      await axios.post(`${url}/user/signup`, data);
  } catch (error) {
      console.log('Error while UserSignUp API ', error.message);
  }
}

//export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });