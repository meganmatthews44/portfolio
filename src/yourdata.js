// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import nodeIcon from "./images/node.svg"
import djangoIcon from "./images/django.svg"
import pythonIcon from "./images/python.svg"
import postgresqlIcon from "./images/postgresql.svg"
import mongoIcon from "./images/mongodb.svg"


// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "megan",
  headerTagline: [
    //Line 1 For Header
    "Full Stack Developer",
    //Line 2 For Header
    //Line 3 For Header
    
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a software developer with a background in sales and account management. I am motivated by making my clients’ jobs easier by creating automated processes to help them build out marketing software initiatives for customer acquisition and retention.",

  //Contact Email
  contactEmail: "meganmatthews44@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Lakeview Coffee Shops", //Project Title - Add Your Project Title Here
      para:
        "Full CRUD application for reviewing local coffee shops. Built with Express, Node, Javascript, CSS, HTML, EJS, MongoDB Atlas, and Google oAuth. Deployed with Heroku.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/3hd38iUl.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://quiet-journey-55388.herokuapp.com/",
    },
    {
      title: "Block and Roll", //Project Title - Add Your Project Title Here
      para:
        "A Brick Breaker style game using HTML, CSS, and Javascript.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/rqASq4w.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://meganmatthews44.github.io/Block-Roll/",
    },
    {
      title: "Melophied", //Project Title - Add Your Project Title Here
      para:
        "A social site for music lovers. Built using React, Spotify API, Node, Express, and MongoDB Atlas. Used GitHub for version controlling with a team of six. Deployed with Heroku.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/i1Ap5UOl.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://melophied.herokuapp.com/",
    },
    {
      title: "FLEXipes", //Project Title - Add Your Project Title Here
      para:
        "An application that allows you to search for recipes based on what ingredients you have on hand. Built using Django, Python, Spoonacular API, Postgres SQL, Materialize, HTML, and CSS. Deployed with Heroku.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/VvFAGAzl.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://flexipes.herokuapp.com/",
    },
   /*  {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "",
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "",
      //Project URL - Add Your Project Url Here
      url: "",
    }, */

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    'I have a background in automobile and technology sales, as well as account management experience for a SaaS company. I have always enjoyed problem solving and helping customers get to the root of their issues, and I thought, "I could really enjoy making a career out of making things work better for people!" ',
  aboutParaTwo:
    "I joined General Assembly's Software Engineering Immersive in November 2020 and spent six months not only learning how to code, but how to think like a programmer. I thoroughly enjoy a challenge and watching what I create come to life on a screen.",
  aboutParaThree:
    "I look forward to taking the soft skills I have learned in sales and account management like communication, empathy, adaptability, critical thinking and creativity and pairing them with the coding skills I have learned to be a fully rounded software engineer.",
  aboutImage:
    "https://i.imgur.com/9mSa8nVl.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: pythonIcon,
      para:
        "Python",
    },
    {
      img: nodeIcon,
      para:
        "nodejs",
    },
    {
      img: djangoIcon,
      para:
        "django",
    },
    {
      img: postgresqlIcon,
      para:
        "PostgreSQL",
    },
    {
      img: mongoIcon,
      para:
        "MongoDB",
    },
    {
      img: githubIcon,
      para:
        "GitHub",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's work together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/meganmatthews44" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/meganmatthews44/" },
  ],

  // End Contact Section ---------------
}

