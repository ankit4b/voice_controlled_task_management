import { Client, Account } from "appwrite";

export const client = new Client();

const PROJECT_ID = "66b878a6003c756ade1b";

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
