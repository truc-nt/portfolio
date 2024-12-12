const experiences = [
  {
    title: "Junior Software Engineer",
    company: "ZALORA GROUP",
    logo: "./asset/img/logo-zalora.png",
    period: "November 2023 - November 2024",
    description: [
      "Worked in the order and warehouse management team, overseeing order fulfillment, inbound and outbound processes, and product inventory management.",
      "Played a key role in developing and optimizing workflows for operating the cross-docking business model, streamlining the process to ensure efficient product handling, inventory management, and timely order fulfillment.",
      "Collaborated with a team of 3 to develop a new feature for inventory disposal, resulting in a 10% reduction in warehouse space usage.",
      "Contributed to maintaining and improving the system to support warehouse management and order fulfillment for the internal application, over 5 external marketplaces and more than 6 partners.",
      "Enhanced system architecture to enable asynchronous execution of multiple tasks simultaneously, improving efficiency and performance.",
    ],
  },
  {
    title: " Software Engineering Intern",
    company: "ZALORA GROUP",
    logo: "./asset/img/logo-zalora.png",
    period: "April 2023 - November 2023",
    description: [
      "Worked in a 1SS team, collaborated with external partners and internal warehouse systems to streamline the order fulfillment process for external partners.",
      "Designed and implemented workflows to synchronize orders and stock from external systems to the internal system for two new brand partners, utilizing SQS and Golang, with worker communication via a message queue.",
      " Developed a solution to adapt data between services within a microservices architecture",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "BIG-O CODING",
    logo: "./asset/img/logo-bigocoding.png",
    period: "December 2021 - April 2024",
    description: [
      "Assisted in delivering 6 Elementary courses, guiding students through the fundamentals of programming, key language concepts, and some advanced data structures.",
      "Assisted 7 classes in learning Intermediate algorithms, guiding students in solving exercises related to course topics to reinforce key concepts and improve problem-solving skills.",
      "Supported students in learning and applying concepts across two programming languages: C++ and Python.",
    ],
  },
];

function renderProjectItem(experience, index) {
  const experienceItem = document.createElement("div");
  experienceItem.className = `flex justify-end ${
    index % 2 == 0 ? "md:justify-end" : "md:justify-start"
  } items-center w-full relative`;

  const circle = document.createElement("div");
  circle.className =
    "w-10 h-10 bg-white rounded-full absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10 flex justify-center items-center";
  experienceItem.appendChild(circle);

  const logo = document.createElement("img");
  logo.className = "border border-2 rounded-full";
  logo.src = experience.logo;
  circle.appendChild(logo);

  const card = document.createElement("div");
  card.className =
    "bg-white p-4 md:p-6 md:align-end rounded-lg shadow-md relative w-11/12 md:w-5/12";

  const title = document.createElement("h2");
  title.className = "text-base md:text-xl text-primary font-bold";
  title.textContent = experience.title;
  card.appendChild(title);

  const company = document.createElement("h3");
  company.className = "text-xs md:text-sm text-secondary font-bold";
  company.textContent = experience.company;
  card.appendChild(company);

  const description = document.createElement("ul");
  description.className = "text-xs md:text-sm text-black my-2 ml-4 list-disc";
  experience.description.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    description.appendChild(taskItem);
  });
  card.appendChild(description);

  const period = document.createElement("span");
  period.className = "text-xs md:text-sm text-secondary font-bold";
  period.textContent = experience.period;
  card.appendChild(period);

  const arrow = document.createElement("i");
  arrow.className = `fa-solid text-4xl absolute top-0 transform z-10 ${
    window.innerWidth < 763 ||
    experienceItem.classList.contains("md:justify-end")
      ? "fa-caret-left right-full translate-x-2"
      : "fa-caret-right left-full -translate-x-2"
  }`;
  card.appendChild(arrow);

  experienceItem.appendChild(card);
  return experienceItem;
}

function renderExperienceList() {
  const timeline = document.querySelector("#experience > div");
  timeline.className = "relative mx-auto pl-5 md:pl-0 flex flex-col space-y-4";

  while (timeline.firstChild) {
    timeline.removeChild(timeline.firstChild);
  }

  const line = document.createElement("div");
  line.className =
    "absolute w-1 bg-white h-full -translate-x-0.5 md:left-1/2 md:transform md:-translate-x-1/2";
  timeline.appendChild(line);

  experiences.forEach((experience, index) => {
    const experienceElement = renderProjectItem(experience, index);
    timeline.appendChild(experienceElement);
  });

  //animation
  document.querySelectorAll("#experience > div > div > div:last-child").forEach((card) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const parent = card.parentElement;
          if (
            window.innerWidth < 763 ||
            parent.classList.contains("md:justify-end")
          ) {
            card.classList.add("animate-slideInRight");
          } else {
            card.classList.add("animate-slideInLeft");
          }
        }
      });
    }).observe(card);
  });

  document.querySelectorAll("#experience > div > div img").forEach((logo) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add("animate-fadeIn");
        }
      });
    }).observe(logo);
  });
}

renderExperienceList();
window.addEventListener("resize", () => {
  renderExperienceList();
});
