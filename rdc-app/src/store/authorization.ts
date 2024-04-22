import { BASE_URL } from '@/interfaces/variables';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoreAuthorization = defineStore('storeAuthorization', () => {
  const isAuthorized = ref(false);

  async function checkIfUserIsAuthenticated() {
    const accessToken = localStorage.getItem('access');

    if (accessToken !== null) {
      const tokenVerify = await fetch(`${BASE_URL}/auth/token/verify/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: accessToken }),
      });
      const response = await tokenVerify.ok;

      if (tokenVerify.status === 401) {
        refreshToken();
        console.log(401);
      }

      return response;
    }
    return false;
  }

  async function refreshToken() {
    const refreshToken = localStorage.getItem('refresh');

    if (refreshToken !== null) {
      const tokenRefresh = await fetch(`${BASE_URL}/auth/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });
      const response = await tokenRefresh.json();
      localStorage.setItem('access', response['access']);

      return response;
    }
    return false;
  }

  checkIfUserIsAuthenticated();

  return { isAuthorized, checkIfUserIsAuthenticated };
});
