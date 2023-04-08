// function login(req, res){
//     if(isNaN(req.isAuthenticated)){
//         // throw new Error('login error');
//         res.redirect("/");
//     }
//     res.render("login", {
//         user: null,
//       });;
// }
// module.exports ={
//     login
// }

// app.get("/login", function (req, res) {
//     if (req.isAuthenticated()) {
//       res.redirect("/");
//     } else {
//       res.render("login", {
//         user: null,
//       });
//     }
//   });

// userSchema.plugin(passportLocalMongoose);
// const User = new mongoose.model("User", userSchema);
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// function login (req, res) {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   req.login(user, async function (err) {
//     if(isNull(user) || isNumber(user.username)){
//             throw new Error('tài khoản không tồn tại');
//           }
//     if (err) {
//       throw new Error(err);
//     } else {
//       await passport.authenticate("local")(req, res, function () {
//         return 'login thành công';
//       });
//     }
//   });
// }

// module.exports ={
//   login
// }

// test app

require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const session = require("express-session");
const flash = require("express-flash");
const MongoDbStore = require("connect-mongo")(session);
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cloudinary = require("cloudinary").v2;
const stripe = require("stripe")(process.env.STRIPE_SKEY);

//
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(express.json());
cloudinary.config({
  cloud_name: process.env.CLD_CLOUD_NAME,
  api_key: process.env.CLD_API_KEY,
  api_secret: process.env.CLD_API_SECRET,
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
const connection = mongoose.connection;
let mongoStore = new MongoDbStore({
  mongooseConnection: connection,
  collection: "sessions",
});
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    }, //24hrs
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  admin: Boolean,
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const productSchema = new mongoose.Schema({
  title: String,
  imgurl: String,
  imgid: String,
  price: String,
});

productSchema.virtual("coverImagePath").get(function () {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${
      this.coverImageType
    };charset=utf-8;base64,${this.coverImage.toString("base64")}`;
  }
});

const Product = new mongoose.model("Product", productSchema);

// author
const authorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

authorSchema.pre("remove", function (next) {
  Book.find({ author: this.id }, (err, books) => {
    if (err) {
      next(err);
    } else if (books.length > 0) {
      next(new Error("This author has books still"));
    } else {
      next();
    }
  });
});

module.exports = mongoose.model("Author", authorSchema);
//
const categorySchema = new mongoose.Schema({
  title: String,
});
const Category = new mongoose.model("Category", categorySchema);

const orderSchema = new mongoose.Schema({
  date: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  items: Object,
  phone: String,
  address: String,
  paymentType: {
    type: String,
    default: "COD",
  },
  status: {
    type: String,
    default: "đã giao hàng",
  },
});
const Order = new mongoose.model("Order", orderSchema);

// 
// app.post("/login", function (req, res) {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   req.login(user, async function (err) {
//     if(isNull(user) || isNumber(user.username)){
//             throw new Error('tài khoản không tồn tại');
//           }
//     if (err) {
//       throw new Error(err);
//     } else {
//       await passport.authenticate("local")(req, res, function () {
//         return 'login thành công';
//       });
//     }
//   });
// });
const {isNull} = require("lodash");

function login (username, password) {
  if (username.isAuthenticated()) {
    return 'fales';
  } else {
    username.render("login", {
      user: null,
    });
  }
  return 'true';
}

function login (username, password) {
  const user = new User({
    username: username,
    password: password,
  });
  if(isNull(user)){
    throw new Error('tài khoản không tồn tại')
  }
  return 'thành công';
  // login(user, async function (err) {
  //   if(isNull(user) || isNumber(user.username)){
  //           throw new Error('tài khoản không tồn tại');
  //         }
  //   if (err) {
  //     throw new Error(err);
  //   } else {
  //     await passport.authenticate("local")(req, res, function () {
  //       return 'login thành công';
  //     });
  //   }
  // });
}

module.exports ={
  login
}