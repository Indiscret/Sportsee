import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

// URL de base pour les requêtes API
const BASE_URL = "http://localhost:3000";

// Variable pour activer ou désactiver l'utilisation des données mockées
const useMock = true;

// Fonction pour récupérer les informations de l'utilisateur
export async function userInfo(userId, mockData = USER_MAIN_DATA) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer les informations de l'utilisateur.");
      // Recherche des informations de l'utilisateur dans les données mockées
      const userInfoMockData = mockData.find(user => user.id === parseInt(userId));
      if (userInfoMockData) {
        return userInfoMockData;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mockées.");
      }
    } else {
      // Requête à l'API pour récupérer les informations de l'utilisateur
      const res = await fetch(`${BASE_URL}/user/${userId}`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
  }
}

// Fonction pour récupérer l'activité de l'utilisateur
export async function userActivity(userId, mockData = USER_ACTIVITY) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer l'activité de l'utilisateur.");
      // Recherche de l'activité de l'utilisateur dans les données mockées
      const userActivityMockData = mockData.find(activity => activity.userId === parseInt(userId));
      if (userActivityMockData) {
        return userActivityMockData;
      } else {
        throw new Error("Activité de l'utilisateur non trouvée dans les données mockées.");
      }
    } else {
      // Requête à l'API pour récupérer l'activité de l'utilisateur
      const res = await fetch(`${BASE_URL}/user/${userId}/activity`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'activité de l'utilisateur:", error);
  }
}

// Fonction pour récupérer les sessions moyennes de l'utilisateur
export async function userAverageSessions(userId, mockData = USER_AVERAGE_SESSIONS) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer les sessions moyennes de l'utilisateur.");
      // Recherche des sessions moyennes de l'utilisateur dans les données mockées
      const userAverageSessionsMockData = mockData.find(averageSessions => averageSessions.userId === parseInt(userId));
      if (userAverageSessionsMockData) {
        return userAverageSessionsMockData;
      } else {
        throw new Error("Sessions moyennes de l'utilisateur non trouvées dans les données mockées.");
      }
    } else {
      // Requête à l'API pour récupérer les sessions moyennes de l'utilisateur
      const res = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des sessions moyennes de l'utilisateur:", error);
  }
}

// Fonction pour récupérer la performance de l'utilisateur
export async function userPerformance(userId, mockData = USER_PERFORMANCE) {
  try {
    if (useMock) {
      console.log("Utilisation des données mockées pour récupérer la performance de l'utilisateur.");
      // Recherche de la performance de l'utilisateur dans les données mockées
      const userPerformanceMockData = mockData.find(performance => performance.userId === parseInt(userId));
      if (userPerformanceMockData) {
        return userPerformanceMockData;
      } else {
        throw new Error("Performance de l'utilisateur non trouvée dans les données mockées.");
      }
    } else {
      // Requête à l'API pour récupérer la performance de l'utilisateur
      const res = await fetch(`${BASE_URL}/user/${userId}/performance`);
      const { data } = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la performance de l'utilisateur:", error);
  }
}