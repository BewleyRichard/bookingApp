/* The Express app is created here, connections and routes are registered here. 
The mongoDB URI and PORT are stored in '.env' as a security measure. */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';


const PORT = process.env.PORT || 8800;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, "..", "public");




app.use(express.static(publicPath));
app.get('*',(req,res)=>  {
  res.sendFile(path.join(publicPath,'index.html'));
});




// dotenv.config({ path: path.resolve(__dirname, './.env') });

// if (process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, 'client/build')));
//     app.get('*',(req,res)=>  {res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//   });
// }

// Connect to mongoDB.
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDB");
    } catch(error) {
        throw error; 
    }
};

// If mongoDB disconnects it alerts the dev. 
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

// Middleware.
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Middleware that handles CRUD mongodb errors.
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus, 
      message: errorMessage,
      stack: err.stack,
    });
  });

// Listen for request. 
app.listen(PORT, () => {
    connect();
    console.log("Listening on port: 8800")
  });