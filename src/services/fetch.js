import axios from 'axios';
axios.defaults.baseURL = `https://64495a88e7eb3378ca471ae3.mockapi.io`;

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (event) {
    return alert(event.message);
  }
};

export const updateUsers = async (id, isFollowing, followers) => {
  try {
    const response = await axios.put(`/users/${id}`, {
      following: isFollowing,
      followers: followers,
    });
    return response.data;
  } catch (event) {
    return alert(event.message);
  }
};
