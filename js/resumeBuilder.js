 /*
 The Online Resume project uses javaScript Object Literals rather than JSON 
 to define your objects. The syntax is very similar, but javaScript Object Literals permit
 the inclusion of functions as properties and JSON does not.
 */

 //JSON - validate at https://jsonlint.com/

// ----------------------HEADER---------------------------

// add bio object

var bio = {
    "name": "Angela Volluz",
    "role": "Web Development & Design",
    "contacts": {
       "cellphone": "(618) 979-2097",
       "email": "angiev@me.com",
       "github": "angieV",
       "linkedIn": "angelavolluz",
       "twitter": "Only used to stalk Lord Stanley's Cup",
       "location": "Swansea, IL"
    },
    "welcomeMsg": "welcome",
    "bioPic": "images/me.jpg",
    "skills": ["awesomeness", "meeting deadlines", "aspiring bug exterminator"],
}

// ----------------------WORK EXPERIENCE---------------------------
var work = {
    "employers": [
        {
            "name": "Custom Cut Stencil Company",
            "title":"Laser Operator",
            "location": "Belleville, IL", 
            "description": "Created and produced custom stencils using various plotters and laser cutters",
            "workdates":"2013-present"
        },
        {
            "name": "Cat's Meow",
            "title":"Pre-Production Artist",
            "location": "Des Peres, MO", 
            "description": "Set up custom monograms for embroidered gifts, created size and style templates for each product to maintain consistancy, created new alphabets for in-store use",
            "workdates":"June 2009- December 2013"
        },
        {
            "name": "Imagineedles, Inc.",
            "title": "Owner & Operator",
            "location": "Belleville, IL",
            "description": "",
            "workdates":"June 1995- December 2010"
        }
    ]
};

// ----------------------PROJECTS---------------------------

var projects = {
    
    "project": [
        {
            "title": "Portfolio",
            "dates": "November 2020",
            "description": "Presents multiple projects as a portfolio",
            "images": "list"
        },
        {
            "title": "Exotic Wagering Calculator",
            "dates": "2019",
            "description": "whatItdoes",
            "images": "list"
        },
        {
            "title": "Restaurant Reviews",
            "dates": "2018",
            "description": "whatItdoes",
            "image": "list"
        },
    ]
}

// ----------------------EDUCATION---------------------------
var education = {
    "schools": [  // array
        {
            "name": "LaunchCode",
            "city": "St. Louis, MO",
            "degree":"LaunchCode 101 Cohort",
            "major": "Front-End (focus on Python and Javascript)",
            "years": "2017-2018"
        },
        {
            "name": "SWIC",
            "city": "Belleville, IL",
            "degree":"AAS",
            "major": "Web Design & Development",
            "attended": "2003-2006"
        },
        {
            "name": "Art Institute of Atlanta",
            "city": "Atlanta, GA",
            "degree":"AA",
            "major": "Visual Communication",
            "attended": "1983-1985 "
        }
    ],
    "online_courses": [
        {
            "name": "Udacity",
            "course": "Javascript Basics",
            "completion": "Certificate of Completion, 2020"
        },
        {
            "name": "Udacity",
            "course": "Mobile Web Design Nanodegee",
            "completion": "Certificate of Completion, 2019"
        },
        {   
            "name":  "MITx",
            "course": "Introduction to Computer Science and Programming Using Python",
            "completion": "Certificate of Completion, 2016"
        }
    ]
}

//replace the %data% with bio object variables to format Header

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cellphone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

// Prepend the new variables in reverse order from which they will appear
// Append in order of appearance

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedlinkedIn);

/*  
   add skills if there are any--for loop
   for-in loops are considered to be general bad practice in JavaScript 
   and has shown inconsistent behavior with arrays and objects.
*/

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for(var i=0; i<bio.skills.length; i++){
        var formattedSkill = (HTMLskills.replace("%data%", bio.skills[i]));
        $("#skills").append(formattedSkill);
    }
}

//Internationalize the name 
function inName(n) {
    var n = n.trim().split(" ");
    n= n[0].slice(0,1).toUpperCase() + n[0].slice(1).toLowerCase() + " " + n[1].toUpperCase();
    console.log(n);
    return n;
}
//append the Internationalize Name button
$("#main").append(internationalizeButton);

/* work.display = function() {

}
work.display(); */
    
function displayWork() {

    for (employer in work.employers) {
        
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[employer].name);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[employer].title);
        var formattedEmpTitle = formattedEmployer + formattedTitle;
        //append the previous entry to the "last" .work-entry class on the page
        // The last selector selects the last element https://www.w3schools.com/jquery/sel_last.asp
        $(".work-entry:last").append(formattedEmpTitle);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.employers[employer].location)
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.employers[employer].workdates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.employers[employer].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displayWork();


projects.display = function() {

    projects.project.forEach( function(project) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
    });
}
projects.display();

//append a map
//$("#mapDiv").append(googleMap);