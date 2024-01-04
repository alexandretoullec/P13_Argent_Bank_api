import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/";

/**
 * Get the connexion token
 * @param {string} email
 * @param {string} password
 * @returns
 */

export async function signIn(email: string, password: string): Promise<any> {
  try {
    const response = await axios.post(baseUrl + "user/login", {
      email,
      password,
    });
    return response.data.body.token;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfile(token = null): Promise<any> {
  try {
    const response = await axios.post(
      baseUrl + "user/profile",
      {
        firstName: "",
        lastName: "",
      },
      {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token")
              ? localStorage.getItem("token")
              : token
          }`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserProfile(
  firstName: string,
  lastName: string
): Promise<any> {
  try {
    const response = await axios.put(
      baseUrl + "user/profile",
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
  }
}
