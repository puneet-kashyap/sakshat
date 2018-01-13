import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDh9XJ13Lv_AyuV9LSlRfHMeCcCigDWBDc",
  authDomain: "sakshat-4eda9.firebaseapp.com",
  databaseURL: "https://sakshat-4eda9.firebaseio.com",
  projectId: "sakshat-4eda9",
};
export const fire = firebase.initializeApp(config);
const fireDB = firebase.database();

export const writeInquiryData = (form) => {
  fireDB.ref('Inquiry/' + form.Name).set({
    name: form.Name,
    phone: form.Phone,
    email: form.Email,
    date: form.date,
    time: form.time,
    comments: form.Comments
  });
}
