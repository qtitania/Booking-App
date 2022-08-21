import express from "express";
import { createError } from "../utils/error.js";
import { createUser } from "../controllers/user.js";
import { updateUser } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";
import { getUser } from "../controllers/user.js";
import { getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user, you are logged in");
});

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your acc");
});

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin, you are logged in and you can delete all accs");
});

//create
router.post("/", createUser);
//update
router.put("/:id", verifyUser, updateUser);
//delete
router.delete("/:id", verifyUser, deleteUser);
//get
router.get("/:id", verifyUser, getUser);
//get all
router.get("/", verifyAdmin, getUsers);

export default router;