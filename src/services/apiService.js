const BASE_URL = "http://localhost:3000";

export async function userInfo(userId) {
    try {
      const res = await fetch(`${BASE_URL}/user/${userId}`);
      const { data } = await res.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
      throw error; 
    }
  }