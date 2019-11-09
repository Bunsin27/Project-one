
// Initialize firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyDHPtEjXkRnF_bRUI-EJmlFL77nibS4IQo",
    authDomain: "bikal-test-project.firebaseapp.com",
    databaseURL: "https://bikal-test-project.firebaseio.com",
    projectId: "bikal-test-project",
    storageBucket: "bikal-test-project.appspot.com",
    messagingSenderId: "554067494118",
    appId: "1:554067494118:web:5895f76a5bf0c39ee2e727",
    measurementId: "G-01CFYFZEY6"
};

let appointments = new Array()

$(document).ready(function() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    //Get list of set appointments
    database.ref('/Appointment').on('value', function(snapshot) {
        appointments = new Array()
        snapshot.forEach(element => {
            appointments.push(element.val().appoinment)
        })
    })


    //Add Button listeners
    $("#submitForm-date").on("click", function (event) {
        debugger;
        event.preventDefault();
        // Grab user input
        let appointDate = $("#appointment").val().trim();
    
        // creating local "temp" object to hold users data
        const usersDate = {
            appoinment: appointDate
        };
    
        // Uploads user infoto the database
        for(let i=0; i<appointments.length; i++) {
            let apt = moment(appointments[i])
            let newApt = moment(usersDate.appoinment)
            if (apt.diff(newApt, 'minutes') < 15) {
                $('#error-model').modal('show')
                return;
            }
        }
        database.ref('/Appointment').push(usersDate.appoinment);
        // Clears all of the text-boxes
        $("#appointment").val("");
    
    });

    $("#submitForm").on("click", function (event) {
        event.preventDefault();
    
        // Grab user input
        let userName = $("#firstName").val().trim();
        let userPhoneNumber = $("#phoneNumber").val().trim();
        let userEmail = $("#email").val().trim();
        let userFeedback = $("#description").val().trim();
    
        // creating local "temp" object to hold users data
        const usersFeedback = {
            name: userName,
            phoneNumber: userPhoneNumber,
            email: userEmail,
            feedback: userFeedback,
    
        };
    
        // Uploads user infoto the database
        database.ref('/Feedback').push(usersFeedback);
    
        // Clears all of the text-boxes
        $("#firstName").val("");
        $("#phoneNumber").val("");
        $("#email").val("");
        $("#description").val("");
    
    });

    //  Create Firebase event for adding users info to the database  when a user adds an entry
    database.ref('/Appointment').on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());
    });

    //  Create Firebase event for adding users info to the database  when a user adds an entry
    database.ref('/Feedback').on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

    });

})



