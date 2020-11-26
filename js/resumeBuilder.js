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
            "description": "Design and produce custom industrial stencils using a variety of stencil materials and automated cutters",
            "workdates":"2013-present"
        },
        {
            "name": "Cat's Meow",
            "title":"Pre-Production Artist",
            "location": "Des Peres, MO", 
            "description": "Created custom monograms for embroidered gifts. Designed size and style templates for each product to"
            + " maintain consistancy, enhance quality and streamline turnaround. Created new embroidery alphabet products to gain advantage over competition.",
            "workdates": "June 2009- December 2013"
        },
        {
            "name": "Imagineedles, Inc.",
            "title": "Owner & Operator",
            "location": "Belleville, IL",
            "description": "Create embroidery design files for use on computerized embroidery machines. "
                + "Created alphabets and patterns for a web-based catalog of embroidery design products "
                + "for commercial embroiderers and hobbyists. "
                + "Participated in Beta testing for Wilcom Australia (One of 5 testers in US). Provided" 
                + "feedback on existing features, reported inconsistencies in software, suggested improvements and new features for future versions.",
            "workdates": "August 1995- December 2010"
        },
        {   
            "name": "Concepts & Copy Graphic Design",
            "title": "Designer/Photographer",
            "location": "Belleville, IL",
            "description": "Develop, design and produce logos, signs &  printed promotional items."
                + "Product photography (art direction), event photography and photo editing.",
            "workdates": "June 1992- August 2005"
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
            "degree":"LC-101",
            "major": "Front-End (Python, Javascript)",
            "attended": "2017-2018",
            "gpa": ""
        },
        {
            "name": "SWIC",
            "city": "Belleville, IL",
            "degree":"AAS",
            "major": "Web Design & Development",
            "attended": "2013-2015",
            "gpa": "4.0"
        },
        {
            "name": "Art Institute of Atlanta",
            "city": "Atlanta, GA",
            "degree":"AA",
            "major": "Visual Communication",
            "attended": "1983-1985 ",
            "gpa": "3.8"
        }
    ],
    "online_courses": [
        {
            "name": "Udacity",
            "course": "Javascript Basics",
            "completion": "Certificate of Completion, 2020",
            "takeaways": "whatIlearned",
            "url": "https://classroom.udacity.com/courses/ud804"
        },
        {
            "name": "Udacity",
            "course": "Mobile Web Design Nanodegee",
            "completion": "Certificate of Completion, 2019",
            "takeaways": "whatIlearned",
            "url": "edX.org"
        },
        {   
            "name":  "MITx",
            "course": "Introduction to Computer Science and Programming Using Python",
            "completion": "Certificate of Completion, 2016",
            "takeaways": "whatIlearned",
            "url": "edX.org"
        }
    ] 
}

bio.display = function() {

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

 work.display = function() {

    work.employers.forEach( function(job) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.name);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmpTitle = formattedEmployer + formattedTitle;
        //append the previous entry to the "last" .work-entry class on the page
        // The last selector selects the last element https://www.w3schools.com/jquery/sel_last.asp
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location)
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.workdates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmpTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    })
}


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


education.display = function() {

    education.schools.forEach( function(school) {
        var formattedSchool = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.attended);
        var formattedSchoolandDegree = formattedSchool + formattedSchoolDegree;

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolandDegree);
        //$(".education-entry").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (school.gpa != "") {
            var formattedGPA = HTMLschoolGPA.replace("%data%", school.gpa);
            var formattedMajorandGPA = formattedSchoolMajor + formattedGPA;
            $(".education-entry:last").append(formattedMajorandGPA);
        } 
        else 
        $(".education-entry:last").append(formattedSchoolMajor);

    });

    $("#education").append(HTMLonlineClasses);

    education.online_courses.forEach( function(course){
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.name);
        var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", course.course + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.completion);
        var formattedOnlineTakeaways = HTMLonlineTakeaways.replace("%data%", course.takeaways);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineCourse);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineTakeaways);
    });
}

bio.display();
work.display(); 
projects.display();
education.display();

//append a map
$("#mapDiv").append(googleMap);