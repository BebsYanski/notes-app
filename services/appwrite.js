import { Client, Databases } from "react-native-appwrite";
import { Platform } from "react-native";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  apiKey: process.env.EXPO_PUBLIC_APPWRITE_API_KEY,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  collectionId: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTION_ID,
  },
};
const client = new Client()
  .setEndpoint(config.endpoint) // Your API Endpoint
  .setProject(config.projectId); // Your project ID

switch (Platform.OS) {
  case "ios":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID); // For iOS only, remove this line for production
    break;
  case "android":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME); // For Android only, remove this line for production
    break;
  default:
    break;
}

const database = new Databases(client);
// You can also export the client if you need it elsewhere
export { client, config, database };
