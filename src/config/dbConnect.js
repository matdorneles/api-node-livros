import mongoose from "mongoose";

mongoose.connect("mongodb+srv://username:123@cluster0.zhd6d.mongodb.net/db-api-node");

let db = mongoose.connection;

export default db;