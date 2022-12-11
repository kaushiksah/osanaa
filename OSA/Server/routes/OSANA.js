var express = require("express");
var router = express.Router();

const InsertUser = require("../controllers/InsertUser");
const UpdateUser = require("../controllers/UpdateUser");
const ViewUser = require("../controllers/ViewUser");
const UserValidation = require("../controllers/UserValidation");
const SearchUserdetails = require("../controllers/SearchUserdetails");
const CheckinEvent = require("../controllers/CheckinEvent");
const UserFoodUserValidationV3 = require("../controllers/UserFoodUserValidationV3");
const EditCheckinEventV2 = require("../controllers/EditCheckinEventV2");
const UserFoodBillV2 = require("../controllers/UserFoodBillV2");
const ListCheckinEvent = require("../controllers/ListCheckinEvent");
const InsertRegistationForm = require("../controllers/InsertRegistationForm");
const Resetpassword = require("../controllers/Resetpassword");
const forgetpassword = require("../controllers/forgetpassword");
const InsertUser2 = require("../controllers/InsertUser2");
const Orderhistroy = require("../controllers/Orderhistroy");
const Eventformconst = require("../controllers/Eventformconst");
const Checkinview = require("../controllers/Checkinview");
const Checkinview2 = require("../controllers/Checkinview2");
const Checkinview3 = require("../controllers/Checkinview3");
const EventPersonaldetails = require("../controllers/EventPersonaldetails");
const RegistrationForm = require ("../controllers/RegistrationForm");
const CheckinSearch = require("../controllers/CheckinSearch");
/* GET home page. */

router.get("/view-user", ViewUser);

router.get("/check-in-event", CheckinEvent);

router.get("/user-validation", UserValidation);

router.get("/search-user-details", SearchUserdetails);

router.put("/update-user", UpdateUser);

router.put("/edit-check-in-eventV2", EditCheckinEventV2);

router.post("/insert-user", InsertUser);

router.post("/Insert-User2", InsertUser2);

router.post("/user-food-billV2", UserFoodBillV2);

router.get("/user-food-user-validationV3", UserFoodUserValidationV3);

router.get("/list-check-in-event", ListCheckinEvent);

router.post("/insert-registation-form", InsertRegistationForm);

router.put("/Reset-password", Resetpassword);

router.get("/forget-password", forgetpassword);

router.get("/Order-histroy", Orderhistroy);

router.get("/Event-form-const", Eventformconst);

router.get("/Check-in-view", Checkinview);

router.get("/Check-in-view2", Checkinview2);

router.get("/Check-in-view3", Checkinview3);

router.get("/event-personal-details", EventPersonaldetails);

router.post("/registration-form", RegistrationForm);

router.get("/checkin-Search", CheckinSearch);

module.exports = router;
