import mongoose from "mongoose";

mongoose.connect("<sua conexão MongoDB>");

let db = mongoose.connection;

export default db;