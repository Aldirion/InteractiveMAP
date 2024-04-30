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
      let response = await tokenVerify.ok;
      isAuthorized.value = response;

      if (tokenVerify.status === 401) {
        response = await refreshToken();
      }

      return response;
    }

    isAuthorized.value = false;
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
      isAuthorized.value = response;
      localStorage.setItem('access', response['access']);

      if (tokenRefresh.status === 401) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
      }

      return response;
    }

    isAuthorized.value = false;
    return false;
  }

  return { isAuthorized, checkIfUserIsAuthenticated };
});
