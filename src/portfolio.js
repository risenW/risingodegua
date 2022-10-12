/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rising Odegua",
  title: "Hi all, I'm Rising",
  subTitle: emoji(
    "A full stack software and machine learning engineer. I combine my experience as a software engineer with data science to build data driven applications."
  ),
  resumeLink:
    "",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/risenW",
  linkedin: "https://www.linkedin.com/in/risingdeveloper",
  gmail: "risingodegua@gmail.com",
  twitter: "http://twitter.com/risingodegua",
  medium: "https://medium.com/@risingdeveloper",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "DATA SCIENCE, MACHINE LEARNING, SOFTWARE ENGINEERING AND RESEARCH",
  skills: [
    emoji("⚡ Create data-driven products leveraging cutting edge ML tools"),
    emoji(
      "⚡ Develop highly efficient web and mobile applications with ML capabilities"
    ),
    emoji("⚡ Deployment and scaling of machine learning models/applications"),
    emoji("⚡ Product research, development and documentation"),
    emoji("⚡ Dev advocacy and technical writing on new products/tools"),
    emoji("⚡ Integration of third party services such as Firebase/ GCP/ AWS"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fab fa-tumblr",
    },
    {
      skillName: "tensorflow.js",
      fontAwesomeClassname: "fab fa-tumblr",
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fab fa-kickstarter",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Neo4j",
      fontAwesomeClassname: "fas fa-project-diagram",
    },
    {
      skillName: "Cassandra",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "Graphql",
      fontAwesomeClassname: "fas fa-project-diagram",
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineering", //Insert stack or technology you have experience in
      // progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      // progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      // progressPercentage: "70%"
    },
    {
      Stack: "Cloud Data Engineer",
      // progressPercentage: "60%"
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Nossa Data",
      companylogo: require("./assets/images/nossa.webp"),
      date: "April 2022 – Present",
      desc:
      "Nossa Data is revolutionising ESG data management and analytics with the aim to become a global leader in providing environmental, social and governance [ESG] technology.",
      descBullets: [
        "Building a data-driven platform for ESG data reporting, management and analytics",
        "Works at the intersection of data science, software engineering, and product development",
      ],
    },
    {
      role: "Engineering Lead",
      company: "Philanthrolab",
      companylogo: require("./assets/images/philan-logo.svg"),
      date: "Jan 2020 – March 2022",
      desc:
        "PhilanthroLab is a company on a mission to empower people and enterprise with meaningful innovation, at scale. I currently:",
      descBullets: [
        "I currently lead the development of a social service search and management engine integrated with knowledge graphs, full-text search, and location-based service recommendations.",
        "I currently lead the development of a data archiving and visualization portal.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Datopian",
      companylogo: require("./assets/images/datopian-bash-png.png"),
      date: "Oct 2020 – Present",
      desc:
        "Datopian are experts in data management and work with organizations of all sizes to design, develop and scale solutions to unlock their data’s potential. I currently work on:",
      descBullets: [
        "Building and maintaning open source data tools like frictionless.js, datapub and CKAN",
        "Building data portals as wells as data publishers for clients including Govt & Non-profit organisations",
      ],
    },
    {
      role: "AI Engineer",
      company: "Crevatal",
      companylogo: require("./assets/images/crevatal.png"),
      date: "July 2020 – September 2020",
      desc:
        "Crevatal works on project relating to UI/UX, Still and Motion Graphics Designs, web and mobile app programs, Blockchain integration, CyberSecurity, SEO and social media marketing for Start-ups and SMEs. As an AI engineer at Crevatal, I currently work on:",
      descBullets: [
        "Designing and implementing a Recommendation Engine for food vendors. This includes data pipeline design and data features selection.",
        "Researching ways to Incorporate AI and Data Science to improve software products.",
      ],
    },
    {
      role: "Data Scientist",
      company: "Data Science Nigeria",
      companylogo: require("./assets/images/dsn.jpg"),
      date: "Jan 2020 – July 2020",
      desc:
        "Data Science Nigeria is a non-profit. Its vision is to develop Nigeria’s AI ecosystem and position the country as a world-class AI skill, research and outsourcing destination. As a Data Scientist at DSN, I worked on the following",
      descBullets: [
        "Led a team of 7 to develop a deep learning sentiment classifier for Nigerian consumer brands. The task includes mining of social media data, data preparation, modeling, data serving, and white paper publication.",
        "Led a team of 3 to work on financial inclusion analytics in developing countries using big data and spatial analysis.",
        "Research, writing, and presentation of research papers on cutting edge machine learning and deep learning.",
      ],
    },
    {
      role: "Software Engineer",
      company: "IRSL Consulting",
      companylogo: require("./assets/images/irsl.png"),
      date: "Dec 2015 – Oct 2017",
      desc:
        "IRSL Consulting is a focused shop for ERP, GRC, IT Audit, SAP Audit and Security services.",
      descBullets: [
        "Led and managed the web development team that created an online learning portal for the company.",
        "Supervised and led the redesign of two of the company's websites.",
        "Researched and Introduced new features to the company's website that helped increase growth and customer retention.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_PERSONAL_WEBSITE_TOKEN,
  githubUserName: "risenW", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Publications and Preprints",
//   subtitle: "A COUPLE OF RESEARCH PROJECTS I HAVE WORKED ON",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       link: "http://saayahealth.com/"
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       link: "http://nextu.se/"
//     }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Github Star",
      subtitle:
        "The GitHub Stars program offers impactful developers an opportunity to showcase their work, reach more people, and shape the future of GitHub.",
      image: require("./assets/images/gitstar.png"),
      footerLink: [
        {
          name: "Recognition Link",
          url:
            "https://stars.github.com/profiles/risenw/",
        },
      ],
    },
    {
      title: "Google Developer Expert in Machine Learning",
      subtitle:
        "The Google Developers Experts program is a global network of highly experienced technology experts, influencers and thought leaders who actively support developers, companies and tech communities by speaking at events, publishing content. ",
      image: require("./assets/images/experts.jpeg"),
      footerLink: [
        {
          name: "Recognition Link",
          url:
            "https://developers.google.com/community/experts/directory/profile/profile-rising_odegua",
        },
      ],
    },
    {
      title: "Machine Learning with TensorFlow on Google Cloud Platform",
      subtitle:
        "This five-course online specialization teaches course participants how to write distributed machine learning models that scale in Tensorflow, scale out the training of those models. and offer highperformance predictions. ",
      image: require("./assets/images/gcp.png"),
      footerLink: [
        {
          name: "Certification Link",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/X4QPVEWC2GN6",
        },
      ],
    },
    {
      title: "Microsoft Professional Data Science Program",
      subtitle:
        "A professional, 12 course, hands-on approach to data science and machine learning in Python",
      image: require("./assets/images/microsoft.webp"),
      footerLink: [
        {
          name: "Certification Link",
          url:
            "https://drive.google.com/file/d/1d_89CqEM-mjtdIODZ_OhQBJwbwAIGKmC/view?usp=sharing",
        },
      ],
    },
    {
      title: "Google Africa Scholarship Mobile Web Specialist Course",
      subtitle:
        "The best Poster award was issued at the 2019 DSN bootcamp. It is given to the participant with the best Research poster presented.",
      image: require("./assets/images/alc.png"),
      footerLink: [
        {
          name: "Certification Link",
          url:
            "https://drive.google.com/file/d/1r-mo-klEqktqTMA50ca8L2cjFFnN4yA_/view?usp=sharing",
        },
      ],
    },
    {
      title: "Winner of 2018 Access Bank DataHack",
      subtitle:
        "I led the team that won the Access bank of Nigeria DataHack challenge, by building the best model for credit scoring and also having the best visualization.",
      image: require("./assets/images/access.jpeg"),
      footerLink: [],
    },
    {
      title: "Winner of the 2019 DSN Mr Algorithm Award",
      subtitle:
        "The Mr Algorithm award is awarded to individual who share community values by building tools, helping people, and mentoring beginners.",
      image: require("./assets/images/algo.jpeg"),
      footerLink: [],
    },

    {
      title: "Retina-AI Best Poster Award",
      subtitle:
        "The best Poster award was issued at the 2019 DSN bootcamp. It is given to the participant with the best Research poster presented.",
      image: require("./assets/images/poster.jpeg"),
      footerLink: [],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and teach others what I have learnt. Find some of my recent articles below:",

  blogs: [
    {
      url:
        "https://stackoverflow.blog/2020/10/12/how-to-put-machine-learning-models-into-production/?utm_source=Iterable&utm_medium=email&utm_campaign=the_overflow_newsletter",
      title:
        "How to put machine learning models into production",
      description:
        "An opinion piece curating best guide in putting machine learning models in production",
    },
    {
      url:
        "https://neptune.ai/blog/how-to-serve-machine-learning-models-with-tensorflow-serving-and-docker",
      title:
        "How to Serve Machine Learning Models with TensorFlow Serving and Docker",
      description:
        "Learn how efficiently serve machine learning models with Tensorflow serving",
    },
    {
      url:
        "https://neptune.ai/blog/deep-dive-into-ml-models-in-production-using-tfx-and-kubeflow?utm_source=madewithml&utm_medium=post&utm_campaign=blog-deep-dive-into-ml-models-in-production-using-tfx-and-kubeflow",
      title:
        "Deep Dive into ML Models in Production Using Tensorflow Extended (TFX) and Kubeflow",
      description:
        "An end-to-end tutorial that shows you how to deploy, scale and monitor deep learning models with Tensorflow Extended and Kubeflow on GCP",
    },
    {
      url:
        "https://heartbeat.fritz.ai/build-train-and-deploy-a-book-recommender-system-using-keras-tensorflow-js-b96944b936a7",
      title:
        "Build, Train, and Deploy a Book Recommender System Using Keras, TensorFlow.js, Node.js, and Firebase",
      description:
        "An end-to-end tutorial that explains how to train, save, and deploy a recommender system",
    },
    {
      url:
        "https://heartbeat.fritz.ai/constructing-a-3d-face-mesh-from-face-landmarks-in-real-time-with-tensorflow-js-and-plot-js-62b177abcf9f",
      title:
        "Constructing a 3D Face Mesh from Face Landmarks in Real-Time with TensorFlow.js and Plot.js",
      description:
        "Learn how to use TensorFlow’s face landmark detection model to predict 486 3D facial landmarks that can infer the approximate surface geometry of human faces in real-time.",
    },
    {
      url:
        "https://medium.com/swlh/introduction-to-data-visualization-with-seaborn-6232b70e9b30",
      title: "Introduction to Data Visualization With Seaborn",
      description:
        "In this article, I’m going to introduce you to the world of data visualization and interpretation using Python.",
    },
    {
      url:
        "https://heartbeat.fritz.ai/deep-learning-with-javascript-part-1-c9a83fe0f063",
      title: "Predict forest fire areas with JavaScript using TensorFlow.js",
      description:
        "Learn how to build a simple regression model with TensorFlow.js to predict areas of forest that have been burned by fire. ",
    },
    {
      url:
        "https://heartbeat.fritz.ai/deep-learning-in-javascript-part-2-a2823defd3d9",
      title: "Hand-drawn character recognition using TensorFlow.js",
      description:
        "In this article, we’re going to create an application that can recognize hand-drawn digits in the browser.",
    },
    {
      url:
        "https://heartbeat.fritz.ai/deep-learning-in-javascript-part-4-294c53cbe28",
      title:
        "Build a Custom Real-Time Image Classifier Using Transfer Learning",
      description:
        "Learn how to build a powerful, custom, real-time image classifier that can recognize any specified posture via the webcam, in the browser.",
    },
    {
      url:
        "https://medium.com/swlh/creating-reproducible-data-science-projects-a38a15920f2a",
      title: "Creating Reproducible Data Science Projects",
      description:
        "Learn Data science version control using tools like Git, Jupytext, Vscode and Datasist",
    },
    {
      url:
        "https://heartbeat.fritz.ai/converting-tensorflow-keras-models-built-in-python-to-javascript-4ae4f7bcac86",
      title:
        "Converting TensorFlow / Keras models built in Python to JavaScript",
      description:
        "Learn how to easily embed any TensorFlow/Keras model in a web app",
    },
    {
      url:
        "https://heartbeat.fritz.ai/building-a-neural-network-from-scratch-using-python-part-1-6d399df8d432",
      title: "Building a Neural Network From Scratch Using Python",
      description:
        "Learn how to build a deep neural network from scratch in Python",
    },
    {
      url:
        "https://heartbeat.fritz.ai/a-practical-guide-to-feature-engineering-in-python-8326e40747c8",
      title: "A Practical Guide to Feature Engineering in Python",
      description:
        "Learn the underlying techniques and tools for effective Feature Engineering in Python",
    },
    {
      url:
        "https://heartbeat.fritz.ai/ensemble-learning-techniques-demystified-e57ee5714996",
      title: "Ensemble Learning Techniques Demystified",
      description:
        "A detailed tutorial on ensemble algorithms for machine learning",
    },
    {
      url:
        "https://towardsdatascience.com/image-detection-from-scratch-in-keras-f314872006c9",
      title: "Image classification in keras",
      description:
        "Learn how to create a dog vs cat image classifier using keras on kaggle kernels",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO TALK ABOUT DATA SCIENCE, MACHINE LEARNING AND AI 😅"
  ),

  talks: [
    {
      title: "Building your First Open Source Python Library",
      subtitle: "PyCon Africa 2020",
      slides_url: "https://youtu.be/mmx3JIAtUKA",
      event_url: "https://africa.pycon.org/speakers/rising-odegua",
    },
    {
      title: "Building a Neural Networks from Scratch",
      subtitle: "DSN Master Class",
      slides_url: "https://www.youtube.com/watch?v=eFAkdxRiaOA",
      event_url: "",
    },
    {
      title: "Optimal Model Improvement and Feature Engineering",
      subtitle: "PH-School of AI",
      slides_url: "https://www.youtube.com/watch?v=M9xQASZ5BCg",
      event_url: "",
    },
    {
      title: "Introduction to Datasist library",
      subtitle: "PHSCI-NEURIPS Meetup",
      slides_url: "https://www.youtube.com/watch?v=qlTNfk_YN4E",
      event_url: "",
    },
    {
      title: "Masterclass on Feature Engineering",
      subtitle: "AI-Plus UI",
      slides_url: "https://www.youtube.com/watch?v=P0t2w60HVgw",
      event_url: "",
    },
    {
      title: "Build Image Classifier in Tensorflow js",
      subtitle: "AI-Camp 2020",
      slides_url: "https://www.youtube.com/watch?v=wmxyFMyRbEQ",
      event_url: "https://learn.xnextcon.com/event/eventdetails/W20071709",
    },
  ],
};

const paperSection = {
  title: "Research Papers",
  subtitle: "I have carried out and been involved in a couple of research",

  blogs: [
    {
      url:
        "https://www.researchgate.net/publication/340267238_Optimizing_Health_Facilities_Allocation_for_COVID-19_Management_Using_Social_Vulnerability_Index_and_Spatial_Data_Analysis",
      title:
        "Optimizing Health Facilities Allocation for COVID-19 Management Using Social Vulnerability Index and Spatial Data Analysis",
      description:
        "This study recognises that building new health centers would be slow and expensive in preparation for the pandemic and as such uses social vulnerability index, demographic and environmental statistics to propose suitable existing centers that needs to be re-equipped.",
    },
    {
      url: "https://arxiv.org/abs/1911.03655",
      title:
        "DataSist: A Python-based library for easy data analysis, visualization and modeling",
      description:
        "This paper presents a new python-based library, DataSist, which offers high level, intuitive and easy to use functions, and methods that helps data scientists/analyst to quickly analyze, mine and visualize big data sets",
    },
    {
      url: "https://arxiv.org/abs/2002.02011",
      title: "Predicting Bank Loan Default with Extreme Gradient Boosting",
      description:
        " This paper provides an effective basis for loan credit approval in order to identify risky customers from a large number of loan applications using predictive modeling.",
    },
    {
      url:
        "https://www.researchgate.net/publication/338681895_Applied_Machine_Learning_for_Supermarket_Sales_Prediction",
      title: "Applied Machine Learning for Supermarket Sales Prediction",
      description:
        " In this paper, we investigate forecasting sales for a supermarket chainstore, with three machine learning algorithms (K-Nearest Neighbor, Gradient Boosting and Random forest).",
    },
    {
      url:
        "https://www.researchgate.net/publication/338681864_An_Empirical_Study_of_Ensemble_Techniques_Bagging_Boosting_and_Stacking",
      title:
        "An Empirical Study of Ensemble Techniques (Bagging, Boosting and Stacking)",
      description:
        "In this paper, we evaluated these ensembles on 9 data sets. From our results, we observed the following. First, an ensemble is always more accurate than a single base model. Secondly, we observed that Boosting ensembles is on the average better than Bagging while Stacking  (meta-learning) is on the average more accurate than Boosting and Bagging.",
    },
    {
      url:
        "https://www.researchgate.net/publication/338681432_WeboDoc_A_Web_Based_Application_for_Classifying_Pneumonia_and_Malaria_Infected_Images",
      title:
        "WeboDoc: A Web Based Application for Classifying Pneumonia and Malaria Infected Images",
      description:
        "In this work, we trained two convolutional neural network on Malaria and Pneumonia images and embed it into a web application that can run locally.",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I HAVE APPEARED ON A COUPLE OF PODCAST",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/african-data-scientist/embed/episodes/3---Insights-in-AI-and-Data-Science-with-Rising-Odegua-Data-Scientist-and-Researcher-at-Data-Science-Nigeria-efhg7o/a-a2g2385",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi? My Inbox is open for all.",
  email_address: "risingodegua@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "risingodegua", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  paperSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
