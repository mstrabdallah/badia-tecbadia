export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        token: app.$cookies.get("token"),
      },
    },
  });

  axios.setBaseURL("https://api.tecbadia.com/");
  inject("axios", axios);
}
