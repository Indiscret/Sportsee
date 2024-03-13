
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

const BASE_URL = "http://localhost:3000";

const useMock = true;


export async function userInfo(userId, mockData = USER_MAIN_DATA) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer les informations de l'utilisateur.");
      const userInfoMockData = mockData.find(user => user.id === parseInt(userId));
      if (userInfoMockData) {
        return userInfoMockData;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mockées.");
      }
    } else {
      const res = await fetch(`${BASE_URL}/user/${userId}`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
  }
}

export async function userActivity(userId, mockData = USER_ACTIVITY) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer l'activité de l'utilisateur.");
      const userActivityMockData = mockData.find(activity => activity.userId === parseInt(userId));
      if (userActivityMockData) {
        return userActivityMockData;
      } else {
        throw new Error("Activité de l'utilisateur non trouvée dans les données mockées.");
      }
    } else {
      const res = await fetch(`${BASE_URL}/user/${userId}/activity`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'activité de l'utilisateur:", error);
  }
}

export async function userAverageSessions(userId, mockData = USER_AVERAGE_SESSIONS) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer les sessions moyennes de l'utilisateur.");
      const userAverageSessionsMockData = mockData.find(averageSessions => averageSessions.userId === parseInt(userId));
      if (userAverageSessionsMockData) {
        return userAverageSessionsMockData;
      } else {
        throw new Error("Sessions moyennes de l'utilisateur non trouvées dans les données mockées.");
      }
    } else {
      const res = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des sessions moyennes de l'utilisateur:", error);
  }
}

export async function userPerformance(userId, mockData = USER_PERFORMANCE) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer la performance de l'utilisateur.");
      const userPerformanceMockData = mockData.find(performance => performance.userId === parseInt(userId));
      if (userPerformanceMockData) {
        return userPerformanceMockData;
      } else {
        throw new Error("Performance de l'utilisateur non trouvée dans les données mockées.");
      }
    } else {
      const res = await fetch(`${BASE_URL}/user/${userId}/performance`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la performance de l'utilisateur:", error);
  }
}



