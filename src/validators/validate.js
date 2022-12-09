const mongoose = require("mongoose");

//validate mongoose Id
const isValidObjectId = (objectId)=> mongoose.Types.ObjectId.isValid(objectId)

//validate fname 
function isFname(x) {
    if (!x) return "Mandatory First Name is missing";
    if (typeof x !== "string") return "First Name must be a string type";
    if (x.length > 64) return "First Name exceeded maximum charaters limit which is 64";
    const regEx = /^[a-zA-Z]+\s?[a-zA-Z]+\s?[a-zA-Z]{1,20}$/;
    if (!regEx.test(x)) return "Please check your First Name"
    return true;
}

//validate lname 
function isLname(x) {
    if (!x) return "Mandatory Last Name is missing";
    if (typeof x !== "string") return "Last Name must be a string type";
    if (x.length > 64) return "Last Name exceeded maximum charaters limit which is 64";
    const regEx = /^[a-zA-Z]+\s?[a-zA-Z]+\s?[a-zA-Z]{1,20}$/;
    if (!regEx.test(x)) return "Please check your Last Name"
    return true;
}

//validate Uname 
function isUname(x) {
    if (!x) return "Mandatory User Name is missing";
    if (typeof x !== "string") return "User Name must be a string type";
    if (x.length > 64) return "User Name exceeded maximum charaters limit which is 64";
    return true;
}

//validate email
function isEmail(x) {
    if (!x) return "Email is mandatory";
    if (typeof x !== "string") return "Email must be a string type";
    const regEx =  /^[a-zA-Z]{1}[A-Za-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/;
    if (!regEx.test(x)) return "Please check your Email";
    if (x.length > 64) return "Email exceeded the maximum characters limit which is 64";
    return true;
}

//validate phone
function isPhone(x) {
    if (!x) return "Phone Number is mandatory";
    if (typeof x !== "string") return "Phone Number must be a string type";
    const regEx = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!regEx.test(x)) return "Invalid Phone Number";
    return true;
}

//validate dob
function isDob(x) {
    if (!x) return "Mandatory DOB is missing";
    if (typeof x !== "string") return "DOB must be a string type";
    const regEx = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!regEx.test(x)) return "Invalid DOB format";
    return true;
}

//validate gender 
function isGender(x) {
    if (!x) return "Please specify you Gender";
    if (typeof x !== "string") return "Gender must be a string type";
    const gen = ["Male", "Female", "Others"];
    if (!gen.includes(x)) return `${x} is not a valid Gender, choices are : ${gen}`;
    return true;
}

//validate password
function isPassword(x) {
    if (!x) return "Password & confirm Password field can not be empty";
    if (typeof x !== "string") return "Password & confirm Password must be a string type";
    if (x.length<8 || x.length>15) {
        return res.status(400).send({status: false,message:"Password & confirm Password should be 8 to 15 characters"});
    }
    return true;
}

//validate address line 1
function isAddressLine(x) {
    if (!x) return "Address Line 1 is missing";
    if (typeof x !== "string") return "Address Line 1 must be a string type";
    const regEx = /^[a-zA-Z0-9]/;;
    if (!regEx.test(x)) return "Invalid address Line 1 format";
    return true;
}

//validate city,state,country
function isValidAddress(x) {
    if (!x) return "All Address fields have to be filled";
    if (typeof x !== "string") return "All address fields must be a string type";
    const regEx = /^[a-zA-Z0-9]/;
    if (!regEx.test(x)) return "Please check all Address fields and fill it properly";
    return true;
};

//validate zipcode
function isZipCode(x) {
    if (!x) return "Mandatory Zipcode is missing";
    if (typeof x !== "string") return "Zipcode must be a string type";
    const regEx = /^[123456789][0-9]{5}$/;
    if (!regEx.test(x)) return "Invalid Zipcode";
    return true;
}

//validate image file
function isImageFile(x) {
    if (x === undefined || x === null || x.length === 0) return "Image is missing"; 
    const name = x[0].originalname;
    const regEx = /\.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$/;
    const checkImage = name.toLowerCase().match(regEx);
    if (checkImage === null) return "Provided Image is not an image file,please check the format";
    return true;
}

module.exports = { isImageFile, isFname, isLname, isUname, isEmail, isPhone, isDob, isGender, isPassword, isValidObjectId,isValidAddress, isAddressLine, isZipCode,isImageFile };