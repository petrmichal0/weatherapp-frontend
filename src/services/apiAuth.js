/* eslint-disable no-undef */
import axios from "axios";

const backendUrl = "https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com";

export async function signup({ name, email, password, passwordConfirm }) {
  const response = await axios.post(`${backendUrl}/api/v1/user/signup`, {
    name,
    email,
    password,
    passwordConfirm,
  });
  return response.data;
}

export async function login({ email, password }) {
  const response = await axios.post(
    `${backendUrl}/api/v1/user/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return response.data;
}

export async function logout() {
  const response = await axios.get(`${backendUrl}/api/v1/user/logout`, {
    withCredentials: true,
  });
  return response.data;
}

export async function getCurrentUser() {
  const response = await axios.get(`${backendUrl}/api/v1/user/currentUser`, {
    withCredentials: true,
  });
  return response.data.data.user;
}

export async function updatePassword({
  passwordCurrent,
  password,
  passwordConfirm,
}) {
  const response = await axios.patch(
    `${backendUrl}/api/v1/user/updateMyPassword`,
    {
      passwordCurrent,
      password,
      passwordConfirm,
    }
  );
  return response.data;
}

export async function addFavoriteCity(city) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/v1/user/favorites`,
      { ...city },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error adding favorite city:",
      error.response || error.message
    );
    throw error;
  }
}

export async function removeFavoriteCity(city) {
  try {
    const response = await axios.delete(
      `${backendUrl}/api/v1/user/favorites`,
      { data: { cityName: city.cityName, country: city.country } },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error removing favorite city:",
      error.response || error.message
    );
    throw error;
  }
}

export const resetPassword = async ({ email }) => {
  const response = await axios.post(
    `${backendUrl}/api/v1/user/forgotPassword`,
    { email }
  );
  return response.data;
};

export const resetPasswordConfirm = async ({
  token,
  password,
  passwordConfirm,
}) => {
  const response = await axios.patch(
    `${backendUrl}/api/v1/user/resetPassword/${token}`,
    {
      password,
      passwordConfirm,
    }
  );
  return response.data;
};
