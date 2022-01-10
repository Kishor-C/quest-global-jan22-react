let sixDigitsPhoneNumber = "998811";
let tenDigitsPhoneNumber = sixDigitsPhoneNumber.padEnd(10, 'x');
document.write(`<p>Phone No = ${tenDigitsPhoneNumber}</p>`);

let fourDigitsOtp = "1321";
let sixDigitsOtp = fourDigitsOtp.padStart(6, '0');
document.write(`<p>OTP = ${sixDigitsOtp}</p>`);

let str1 = "7729930093";
let str2 = str1.padEnd(10, 'x');
document.write(`<p>Str2 = ${str2}</p>`);