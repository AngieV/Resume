 /*
 The Online Resume project uses javaScript Object Literals rather than JSON 
 to define your objects. The syntax is very similar, but javaScript Object Literals permit
 the inclusion of functions as properties and JSON does not.
 */

 //JSON - validate at https://jsonlint.com/

// add bio object
var bio = {
    "name": "Angela Volluz",
    "role": "Web Development and Design",
    "contacts": {
       "cellphone": "(618) 979-2097",
       "email": "angiev@me.com",
       "github": "angieV",
       "linkedIn": "angelavolluz",
       "location": "Swansea, IL"
    },
    "welcomeMsg": "welcome",
    "bioPic": "images/me.jpg",
    "skills": ["awesomeness", "meeting deadlines", "aspiring bug exterminator"],
}

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
            "workdates":"2009-2013"
        }
    ]
};

var education = {
    "schools": [  
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