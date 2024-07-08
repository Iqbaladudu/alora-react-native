import { Account, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.iqbaladudu.aora",
  projectId: "66659c39001bdb73b92b",
  databaseId: "6688dc300004e2f96788",
  userCollectionId: "6688dc70002fc12647b9",
  videoCollectionId: "6688dca40026323521a0",
  storageId: "6688dee10006b790f719",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.
