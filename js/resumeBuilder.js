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

//replace the %data% with bio object variables to format Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cellphone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

// Prepend the new variables in reverse order from which they will appear
// Append in order of appearance
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);

//add skills if there are any 
/*  for-in loops are considered to be general bad practice when writing JavaScript because 
    it has some inconsistent behavior with arrays and objects.

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    for (skill in bio.skills) {
        var formattedSkill = (HTMLskills.replace("%data%", bio.skills[skill]));
        $("#skills").append(formattedSkill);
    }
} */

//add skills if there are any--for loop

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(var i=0; i<bio.skills.length; i++){
        var formattedSkill = (HTMLskills.replace("%data%", bio.skills[i]));
        $("#skills").append(formattedSkill);
    }
}

$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formatedGithub);
$("#footerContacts").append(formattedlinkedIn);

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
 
function displayWork() {

    for (employer in work.employers) {
        
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[employer].name);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[employer].title);
        var formattedEmpTitle = formattedEmployer + formattedTitle;
        //append the previous entry to the "last" .work-entry class on the page
        $(".work-entry:last").append(formattedEmpTitle);
        //append remaining properties
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.employers[employer].location)
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.employers[employer].workdates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.employers[employer].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displayWork();

// ----------------------PROJECTS---------------------------
var projects = {
    "project": [
        {
            "name": "",
            "description": ""
        },
        {
            "name": "",
            "description": ""
        },
        {
            "name": "",
            "description": ""
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
    "online courses": [
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