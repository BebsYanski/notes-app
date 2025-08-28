import { database } from "./appwrite";

const databaseService = {
  // List Documents
  async listDocuments(dbid, collectionid) {
    try {
      const response = await database.listDocuments(dbid, collectionid);
      return response.documents || [];
    } catch (error) {
      console.error("Error listing documents:", error.message);
      return { error: error.message };
    }
  },
};
export default databaseService;
