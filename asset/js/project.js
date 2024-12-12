const projects = [
  {
    title: "Streamconnect",
    description: "A multi-platform live streaming e-commerce system using Video SDK",
    technology: ["next.js", "go", "videosdk", "socket.io", "postgreSQL"],
    url: "http://github.com/truc-nt"
  },
  {
    title: "EnviroConnect",
    description: "A mobile app that connects eco-conscious students, green clubs, NPOs, and companies to carry out eco-friendly activities",
    technology: ["nodejs, react native, expo, google maps API"],
    url: "http://github.com/truc-nt"
  },
  {
    title: "Fiction Home",
    description: "A mobile app that interacts with Adafruit server to control the devices through user interface",
    technology: ["nodejs", "mongodb", "react native", "expo"],
    url: "http://github.com/truc-nt"
  },
  {
    title: "Delta Shoes",
    description: "A comprehensive e-commerce website for footwear using the MVC architectural pattern",
    technology: ["php", "ajax", "mysql"],
    url: "http://github.com/truc-nt"
  },
];

function renderProjectItem(project) {
  const projectItem = document.createElement("div");
  projectItem.className =
    "bg-secondaryBg w-full sm:w-80 md:w-96 p-4 md:p-6 md:align-end rounded-lg shadow-md";

  const link = document.createElement("a");
  link.href = project.url;
  link.target = "_blank";
  projectItem.appendChild(link);

  /*const imgContainer = document.createElement("div");
  imgContainer.className = "w-full h-48";
  const img = document.createElement("img");
  img.className = "w-full h-full object-cover rounded-lg";
  img.src = project.img;
  imgContainer.appendChild(img);
  link.appendChild(imgContainer);*/

  const title = document.createElement("h3");
  title.className = "text-base md:text-xl text-primary font-bold mt-2";
  title.textContent = project.title;
  link.appendChild(title);

  const description = document.createElement("p");
  description.className = "text-xs md:text-sm my-2";
  description.textContent = project.description;
  link.appendChild(description);

  const technology = document.createElement("div");
  technology.className = "flex flex-row flex-wrap gap-2";
  project.technology.forEach((tech) => {
    const techItem = document.createElement("span");
    techItem.className = "text-xs md:text-sm text-secondary font-bold";
    techItem.textContent = tech;
    technology.appendChild(techItem);
  });
  link.appendChild(technology);

  projectItem.addEventListener("mousemove", (e) => {
    const rect = projectItem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * -15;
    projectItem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  projectItem.addEventListener("mouseleave", () => {
    projectItem.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });

  return projectItem;
}

function renderProjectList() {
  const list = document.querySelector("#project > div");
  list.className = "flex flex-row flex-wrap gap-4 justify-between";

  projects.forEach((project) => {
    const projectItem = renderProjectItem(project);
    list.appendChild(projectItem);
  });

  document.querySelectorAll("#project > div > div").forEach((card) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          card.classList.add("animate-slideFromBottom");
        }
      });
    }).observe(card);
  });
}

renderProjectList();
