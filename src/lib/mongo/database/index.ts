import { realm } from "../init";

const client = realm.currentUser?.mongoClient("mongodb-atlas");

export const db = client?.db("medimate");
