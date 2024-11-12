import { Client, Account } from "appwrite";

export const client = new Client();

const PROJECT_ID = "6731ec590023ada982a8";

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
