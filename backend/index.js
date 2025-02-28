require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const OrdersModel = require("./model/OrdersModel.js");

const HoldingsModel = require("./model/HoldingsModel.js")
const PositionsModel = require("./model/PositionsModel.js")
const UserModel = require("./model/UserModel.js")
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");


const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(
    cors({
      origin: ["http://localhost:5174", "http://localhost:5173"], // Allow only your frontend
      methods: "GET,POST,PUT,DELETE", // Allow specific methods
      credentials: true, // Allow cookies & sessions
    })
  );
  
app.use(bodyParser.json());

app.get("/allHoldings", async(req, res) => {
    let allHoldings =  await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions =  await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async(req, res) => {
    let allOrders =  await OrdersModel.find({});
    res.json(allOrders);
});

app.post("/newOrder", async(req, res) =>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order saved");
})

const sessionOptions = {
    secret : process.env.SECRET,
    resave : false,              // modified without changes
    saveUninitialized : true,     // not initialized also store
    cookie : {
        expires : Date.now() + 7 * 24 * 60 *60 * 1000,
        maxAge :  7 * 24 * 60 *60 * 1000,
        httpOnly : true,
    }
};
app.use(session(sessionOptions));

app.use(passport.initialize());    //setup
app.use(passport.session());      
passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());      //store in session
passport.deserializeUser(UserModel.deserializeUser());   // remove in session


app.post("/signup", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Log received data

        let { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }


        // Check if user already exists
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists. Please choose a different one." });
        }

        const newUser = new UserModel({ email, username });
        const registeredUser = await UserModel.register(newUser, password);

        // Automatically log in the user after successful registration
        req.login(registeredUser, (err) => {
            if (err) {
                return res.status(500).json({ error: "Login failed after registration." });
            }
            return res.json({ message: "Signup successful", user: registeredUser });
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.post("/signin", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: "Invalid username or password" });

        req.logIn(user, (loginErr) => {
            if (loginErr) return next(loginErr);
            return res.json({ message: "Login successful", user });
        });
    })(req, res, next);  // ✅ Call the function immediately
});


app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: "Logout failed" });
        }
        req.session.destroy(() => {
            res.clearCookie("connect.sid"); // Clear session cookie
            return res.json({ message: "Logout successful" });
        });
    });
});




app.listen(PORT, () => {
    console.log("App started!")
    mongoose.connect(URL);
    console.log("DB Connected!")
})