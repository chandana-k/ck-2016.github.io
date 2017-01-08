var bio = {
    "name": "Chandana Katika",
    "role": "Software Developer",
    "contacts": {
    	"mobile" : "123456789",
        "email": "chandanakatika@gmail.com",
        "github": "ck-2016",
        "twitter": "@chandanakatika",
        "location": "Cary, North Carolina, USA"
    },
    "biopic": "images/smiley_emoticon.jpg",
    "welcomeMessage": "Hi, Welcome and Thanks for stopping by!",
    "skills": ["Python", "HTML5", "CSS3", "Javascript"]
};

var work = {
    "jobs": [{
            "employer": "Blackberry",
            "title": "Associate Software Developer",
            "location": "Cambridge, Boston, MA",
            "dates": "Jan 2012 - July 2013",
            "description": "Worked on Smartphone and Tablet applications for Blackberry. The Apps were published in the Blackberry App world. The App won a Blackberry Playbook Tablet and Z10 Smartphone."
        },
        {
            "employer": "Blackberry",
            "title": "Associate Software Developer",
            "location": "NYC, USA",
            "dates": "June 2012",
            "description": "Attended couple of developer conferences at NYC and Boston. Blackberry Jam Tour at NYC"
        },
        {
            "employer": "Dr.Bachar Saba",
            "title": "Dental Observership",
            "location": "Walpole, Boston, MA",
            "dates": "Jan 2012 - July 2012",
            "description": "Dental Observership under Dr. Bachar Saba, DDS"
        },

        {
            "employer": "Dr.Yamuna Bai, Dr. Srivastava",
            "title": "Associate Dentist",
            "location": "Bangalore, Karnataka, India",
            "dates": "Nov 2008 - nov 2010",
            "description": "Worked as Associate Dentist in a couple of dental clinics"
        },

        {
            "employer": "M.R. Ambedkar dental college and hospital",
            "title": "Dental Internship",
            "location": "Bangalore, Karnataka, India",
            "dates": "Jan 2007 - Oct 2008",
            "description": "As part of One year Internship, Conducted Dental Camps in rural parts of the state, schools and treated children with physical disability at spastic societies."
        }
    ]
};

var education = {
    "schools": [{
        "name": "Rajiv Gandhi University of Health Sciences",
        "dates": "2003 - 2008",
        "location": "Bangalore, Karnataka, India",
        "degree": "BDS, Bachelor of Dental Sciences",
        "GPA": "3.25/4.0",
        "major" : "Dental Sciences",
        "url" : "http://www.rguhs.ac.in/"
    }],
    "onlineCourses": [{
            "school": "Udacity",
            "title": "Introduction to Programming Nanodegree",
            "dates": "December 2016",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"

        },
        {
            "school": "Code Academy",
            "title": "Javascript",
            "dates": "September 2015",
            "url": "https://www.codecademy.com/learn/javascript"

        },
        {
            "school": "Code Academy",
            "title": "HTML, CSS3",
            "dates": "July 2015",
            "url": "https://www.codecademy.com/learn/web"

        },
        {
            "school": "Coursera",
            "title": "Python Programming",
            "dates": "March 2015",
            "url": "https://www.coursera.org/learn/python"

        },
        {
            "school": "Udacity",
            "title": "Basics in Computer Sciences",
            "dates": "August 2014",
            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"

        },

    ]
};

var projects = {
    "projects": [{
            "title": "Created an online movie website using HTML5 and CSS3",
            "dates": "August 2016",
            "description": "Created an online movie website using HTML5 and CSS3 as part of Udacity's Intro to Programming Nanodegree ",
            "url": "projects/fresh_tomatoes.html",
            "images": ["images/img1.png","images/img2.png" ]
        },
        {
            "title": "Online Portfolio",
            "dates": "December 2016",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " + "Nanodegree.",
            "url": "index.html",
            "images": ["images/img3.png"]
        },

    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i=0; i < bio.skills.length; i++) {
      if(bio.skills.hasOwnProperty(i)){
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      }
    }
    for (var i=0; i < formattedContactInfo.length; i++) {
      if(formattedContactInfo.hasOwnProperty(i)){
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
      }
    }
}

work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (var i=0; i < work.jobs.length; i++) {
          if(work.jobs.hasOwnProperty(i)){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkDescription);
          }
        }
    }
};
work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i=0; i < projects.projects.length; i++) {
          if(projects.projects.hasOwnProperty(i)){
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedProjecturl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
          }
        }
    }
};
projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i=0; i < education.schools.length; i++) {
          if(education.schools.hasOwnProperty(i)){
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolGPA = HTMLschoolGPA.replace("%data%", education.schools[i].GPA);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolGPA);
            $(".education-entry:last").append(formattedSchoolMajor);
          }
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var i=0; i < education.onlineCourses.length; i++) {
              if(education.onlineCourses.hasOwnProperty(i)){
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
            }
          }    
        }

    }
};
education.display();

$("#mapDiv").append(googleMap);