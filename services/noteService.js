import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

// Appwrite database and collection id
const dbid = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colid = process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTION_ID;

const noteService = {
  // List all notes
  async getNotes() {
    try {
      const notes = await databaseService.listDocuments(dbid, colid);
      /*  if (notes.error) {
        console.error("Error listing notes:", notes.error);
        return { error: notes.error };
      } */
      return { data: notes };
    } catch (error) {
      console.error("Error listing notes:", error.message);
      return { error: error.message || "Error listing notes" };
    }
  },
  // Create a new note
  async createNote(note) {
    try {
      const response = await databaseService.createDocument(
        dbid,
        colid,
        ID.unique(),
        note
      );
      return response;
    } catch (error) {
      console.error("Error creating note:", error.message);
      return { error: error.message };
    }
  },
  // Update a note
  async updateNote(note) {
    try {
      const response = await databaseService.updateDocument(
        dbid,
        colid,
        note.$id,
        note
      );
      return response;
    } catch (error) {
      console.error("Error updating note:", error.message);
      return { error: error.message };
    }
  },
  // Delete a note
  async deleteNote(note) {
    try {
      const response = await databaseService.deleteDocument(
        dbid,
        colid,
        note.$id
      );
      return response;
    } catch (error) {
      console.error("Error deleting note:", error.message);
      return { error: error.message };
    }
  },
};

export default noteService;
