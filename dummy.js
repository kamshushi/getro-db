const existingDummy = [
  //   {
  //     id: 13,
  //     created_at: "2022-04-24T19:23:53.872897+00:00",
  //     title: "Account Executive",
  //     url: "https://au.indeed.com/cmp/Coviu/jobs?jk=2f4c717dda20290b",
  //     getro_created_at: "2022-04-24T11:03:25.000Z",
  //     getro_id: 12985367,
  //   },
  {
    id: 14,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Food Scientist Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4468853004",
    getro_created_at: "2022-04-23T09:31:52.000Z",
    getro_id: 12953019,
  },
  {
    id: 15,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Data Scientist Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4468794004",
    getro_created_at: "2022-04-23T09:31:52.000Z",
    getro_id: 12953018,
  },
  {
    id: 16,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "BioProcess Engineering Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4484225004",
    getro_created_at: "2022-04-23T09:31:52.000Z",
    getro_id: 12953017,
  },
  {
    id: 17,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Flavour Scientist",
    url: "https://www.linkedin.com/jobs/view/2990481309/",
    getro_created_at: "2022-04-22T16:50:26.000Z",
    getro_id: 12947418,
  },
  {
    id: 18,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Senior Security Engineer (remote) - West Coast USA",
    url: "https://jobs.lever.co/kasada/e64c3803-f5ef-4cc9-a919-edec120a26a5",
    getro_created_at: "2022-04-22T14:57:34.000Z",
    getro_id: 12939535,
  },
  {
    id: 19,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=bd6e36ae8aba1ff6",
    getro_created_at: "2022-04-22T14:31:37.000Z",
    getro_id: 12937258,
  },
  {
    id: 20,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=056b5738ed4e3c44",
    getro_created_at: "2022-04-22T14:31:37.000Z",
    getro_id: 12937255,
  },
  {
    id: 21,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=ace5b1fcef74f3cd",
    getro_created_at: "2022-04-22T14:31:36.000Z",
    getro_id: 12937252,
  },
  {
    id: 22,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=b2ded20d4a058cd7",
    getro_created_at: "2022-04-22T14:31:36.000Z",
    getro_id: 12937249,
  },
  {
    id: 23,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Project Manager - Battery Systems",
    url: "https://apply.workable.com/relectrify/j/DCB0A3175E/",
    getro_created_at: "2022-04-22T13:55:59.000Z",
    getro_id: 12933108,
  },
  {
    id: 24,
    created_at: "2022-04-24T19:23:53.872897+00:00",
    title: "Sales Development Representative",
    url: "https://jobs.lever.co/Emesent/99ddbcba-5a3e-466f-ad91-707a5dfb5958",
    getro_created_at: "2022-04-22T12:43:02.000Z",
    getro_id: 12925496,
  },
];

const newDummy = [
  {
    created_at: "2022-04-24T11:03:25.000Z",
    job_functions: ["Sales & Business Development"],
    locations: [],
    title: "Account Executive",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=2f4c717dda20290b",
    id: 12985367,
    company: {
      id: 17508,
      name: "Coviu",
      logo_url: "https://cdn.filepicker.io/api/file/qRGlw0XgSpmZi5Yg4F57",
      slug: "coviu-2",
      topics: ["saas", "telehealth", "telemedicine", "software"],
    },
  },
  {
    created_at: "2022-04-23T09:31:52.000Z",
    job_functions: [],
    locations: ["South San Francisco, CA, USA"],
    title: "Food Scientist Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4468853004",
    id: 12953019,
    company: {
      id: 8686,
      name: "Clara Foods",
      logo_url: "https://cdn.filepicker.io/api/file/izBZwW7ETB2bzQRJRYaX",
      slug: "clara-foods",
      topics: [],
    },
  },
  {
    created_at: "2022-04-23T09:31:52.000Z",
    job_functions: ["Data Science"],
    locations: ["South San Francisco, CA, USA"],
    title: "Data Scientist Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4468794004",
    id: 12953018,
    company: {
      id: 8686,
      name: "Clara Foods",
      logo_url: "https://cdn.filepicker.io/api/file/izBZwW7ETB2bzQRJRYaX",
      slug: "clara-foods",
      topics: [],
    },
  },
  {
    created_at: "2022-04-23T09:31:52.000Z",
    job_functions: [],
    locations: ["South San Francisco, CA, USA"],
    title: "BioProcess Engineering Intern",
    url: "https://boards.greenhouse.io/theeverycompany/jobs/4484225004",
    id: 12953017,
    company: {
      id: 8686,
      name: "Clara Foods",
      logo_url: "https://cdn.filepicker.io/api/file/izBZwW7ETB2bzQRJRYaX",
      slug: "clara-foods",
      topics: [],
    },
  },
  {
    created_at: "2022-04-22T16:50:26.000Z",
    job_functions: [],
    locations: ["Adelaide SA, Australia"],
    title: "Flavour Scientist",
    url: "https://www.linkedin.com/jobs/view/2990481309/",
    id: 12947418,
    company: {
      id: 23084,
      name: "v2food",
      logo_url: "https://cdn.filestackcontent.com/8QmUqBDRWGZ3M8Zx7p87",
      slug: "v2food",
      topics: ["agtech", "foodtech"],
    },
  },
  {
    created_at: "2022-04-22T14:57:34.000Z",
    job_functions: [],
    locations: ["San Francisco, CA, USA"],
    title: "Senior Security Engineer (remote) - West Coast USA",
    url: "https://jobs.lever.co/kasada/e64c3803-f5ef-4cc9-a919-edec120a26a5",
    id: 12939535,
    company: {
      id: 12481,
      name: "Kasada",
      logo_url: "https://cdn.filepicker.io/api/file/DrsOUN67THK0Lr5Q78QG",
      slug: "kasada",
      topics: ["saas", "cybersecurity", "ai"],
    },
  },
  {
    created_at: "2022-04-22T14:31:37.000Z",
    job_functions: ["Software Engineering"],
    locations: ["Perth WA, Australia"],
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=bd6e36ae8aba1ff6",
    id: 12937258,
    company: {
      id: 17508,
      name: "Coviu",
      logo_url: "https://cdn.filepicker.io/api/file/qRGlw0XgSpmZi5Yg4F57",
      slug: "coviu-2",
      topics: ["saas", "telehealth", "telemedicine", "software"],
    },
  },
  {
    created_at: "2022-04-22T14:31:37.000Z",
    job_functions: ["Software Engineering"],
    locations: ["Brisbane QLD, Australia"],
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=056b5738ed4e3c44",
    id: 12937255,
    company: {
      id: 17508,
      name: "Coviu",
      logo_url: "https://cdn.filepicker.io/api/file/qRGlw0XgSpmZi5Yg4F57",
      slug: "coviu-2",
      topics: ["saas", "telehealth", "telemedicine", "software"],
    },
  },
  {
    created_at: "2022-04-22T14:31:36.000Z",
    job_functions: ["Software Engineering"],
    locations: [],
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=ace5b1fcef74f3cd",
    id: 12937252,
    company: {
      id: 17508,
      name: "Coviu",
      logo_url: "https://cdn.filepicker.io/api/file/qRGlw0XgSpmZi5Yg4F57",
      slug: "coviu-2",
      topics: ["saas", "telehealth", "telemedicine", "software"],
    },
  },
  {
    created_at: "2022-04-22T14:31:36.000Z",
    job_functions: ["Software Engineering"],
    locations: ["Melbourne VIC, Australia"],
    title: "Full Stack Software Engineer - Remote Role",
    url: "https://au.indeed.com/cmp/Coviu/jobs?jk=b2ded20d4a058cd7",
    id: 12937249,
    company: {
      id: 17508,
      name: "Coviu",
      logo_url: "https://cdn.filepicker.io/api/file/qRGlw0XgSpmZi5Yg4F57",
      slug: "coviu-2",
      topics: ["saas", "telehealth", "telemedicine", "software"],
    },
  },
  {
    created_at: "2022-04-22T13:55:59.000Z",
    job_functions: ["Operations"],
    locations: ["Melbourne VIC, Australia"],
    title: "Project Manager - Battery Systems",
    url: "https://apply.workable.com/relectrify/j/DCB0A3175E/",
    id: 12933108,
    company: {
      id: 58891,
      name: "Relectrify",
      logo_url: "https://cdn.filestackcontent.com/rtanPCrjSwmRnckP1A5K",
      slug: "relectrify",
      topics: [],
    },
  },
  {
    created_at: "2022-04-22T12:43:02.000Z",
    job_functions: ["Sales & Business Development"],
    locations: ["United Kingdom"],
    title: "Sales Development Representative",
    url: "https://jobs.lever.co/Emesent/99ddbcba-5a3e-466f-ad91-707a5dfb5958",
    id: 12925496,
    company: {
      id: 17504,
      name: "Emesent",
      logo_url: "https://cdn.filestackcontent.com/R0s94Cx1Rv233UfWpLHi",
      slug: "emesent",
      topics: [
        "saas",
        "robotics",
        "uavs",
        "autonomous systems",
        "hardware",
        "software",
        "ai",
      ],
    },
  },
];

module.exports = { newDummy, existingDummy };
