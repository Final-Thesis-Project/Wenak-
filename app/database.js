const mongoose = require("mongoose");
const URI = "mongodb+srv://Jar:a!123456789@cluster0-2appk.mongodb.net/test";
mongoose.set("useFindAndModify", false);
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

var db = mongoose.connection;
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("db connected");
});
//user schema
const UserSchema = Schema({
  mobilenum: { type: Number },
  name: { type: String },
  password: { type: String },
  type: { type: String },
});

const User = mongoose.model("User", UserSchema);

let save_user = user_ => {
  var user_model = new User({
    mobilenum: user_.mobilenum,
    password: user_.password,
    name: user_.name,
    type: user_.type,
  });
  user_model.save();
};
//customer schema
const CustomerSchema = Schema({
  //flower description schema
  customer_user: { type: Number },
  user_id: { type: ObjectId },
  name: { type: String },
  mobilenum: { type: Number },
  password: { type: String },
  email: { type: String },
  img: { type: String },
  address: { type: String },
});

const Customer = mongoose.model("Customer", CustomerSchema);

let save = user => {
  var customer_model = new Customer({
    name: user.name,
    mobilenum: user.mobilenum,
    password: user.password,
    email: user.email,
    img: user.img,
    address: user.address,
  });
  customer_model.save();
};

//driver schema
const DriverSchema = Schema({
  user_id: { type: ObjectId },
  driver_id: { type: Number },
  name: { type: String },
  mobilenum: { type: Number },
  password: { type: String },
});

const Driver = mongoose.model("Driver", DriverSchema);

let save_driver = driver => {
  var driver_model = new Driver({
    name: driver.name,
    mobilenum: driver.mobilenum,
    password: driver.password,
  });
  driver_model.save();
};

//order schema
const OrderSchema = Schema({
  driver_id: { type: ObjectId },
  user_id: { type: ObjectId },
  order_details: { type: String },
  location_start_lng: { type: Number },
  location_start_lat: { type: Number },
  location_end_lng: { type: Number },
  location_end_lat: { type: Number },
  reciver_name: { type: String },
  order_notes: { type: String },
  rate: { type: Number },
  state: { type: String },
  date: { type: Date },
  price: { type: Number },
});

const Order = mongoose.model("Order", OrderSchema);

let save_order = order => {
  var order_model = new Order({
    driver_id: order.driver_id,
    user_id: order.user_id,
    order_details: order.order_details,
    location_start_lng: order.location_start_lng,
    location_start_lat: order.location_start_lat,
    location_end_lng: order.location_end_lng,
    location_end_lat: order.location_end_lat,
    reciver_name: order.reciver_name,
    order_notes: order.order_notes,
    rate: order.rate,
    state: order.state,
    date: order.date,
    price: order.price,
  });
  order_model.save();
};

module.exports = {
  User,
  Customer,
  save,
  Driver,
  save_driver,
  Order,
  save_order,
  save_user,
};
