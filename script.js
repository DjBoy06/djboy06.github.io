```javascript
/*
    SUDO-SIDD inspired portfolio
*/


/* =========================
   PROJECT DATA
========================= */

const projects = [

    {
        title: "Pkmn True-Scale AR",
        status: "Prototype",
        category: "games",

        description:
            "A true-scale Pokemon Augmented Reality demonstration built in Unity using spatial surface tracking and realistic real-world asset scaling.",

        technologies:
            ["Unity", "C#", "AR Foundation", "Mobile AR"],

        action: "Source Code"
    },


    {
        title: "BumperBlitz",
        status: "Prototype",
        category: "games",

        description:
            "Physics-based package delivery meets pure vehicular chaos. Deliver the goods, wreck the rest.",

        technologies:
            ["Unity", "C#", "Physics", "Driving"],

        action: "Play"
    },


    {
        title: "The Last Train Out of Here",
        status: "Prototype",
        category: "games",

        description:
            "A 4-day GMTK Game Jam submission. Play as a train conductor managing resources, passengers, and survival across 10 desperate days.",

        technologies:
            ["Godot", "GDScript", "Resource Management", "Game Jam"],

        action: "Play"
    },


    {
        title: "GLTFast WebP Support",
        status: "Completed",
        category: "tools",

        description:
            "An extension for the GLTFast addon in Unity to import GLTF/GLB files containing WebP textures.",

        technologies:
            ["Unity", "C#", "GLTFast", "WebP"],

        action: "Source Code"
    },


    {
        title: "ColdInfer",
        status: "Work in Progress",
        category: "ai",

        description:
            "A high-performance C-based inference engine optimized for fast local execution of machine learning models.",

        technologies:
            ["Machine Learning", "Systems Programming"],

        action: "Source Code"
    },


    {
        title: "3D Imitation Learning",
        status: "Prototype Completed",
        category: "ai",

        description:
            "A Godot 4 and Python AI framework to dynamically train 3D agents using live demonstrations with a BC-to-PPO RL pipeline.",

        technologies:
            ["Godot 4", "Python", "PPO", "PyTorch"],

        action: "Source Code"
    },


    {
        title: "GitHub Profile V-Pet",
        status: "Completed",
        category: "tools",

        description:
            "A virtual pet that lives in a GitHub profile README. Features interactive actions and real-time state updates via Actions.",

        technologies:
            ["GitHub Actions", "Python", "Pixel Art"],

        action: "Source Code"
    },


    {
        title: "Kernel Panic",
        status: "Released",
        category: "games",

        description:
            "A 2-player co-op game about procedural miscommunication under pressure.",

        technologies:
            ["2D", "Multiplayer", "Text based", "Puzzle"],

        action: "Play"
    },


    {
        title: "Unity TPC Stress Test",
        status: "Completed",
        category: "tools",

        description:
            "A full-cycle QA project auditing Unity's Third-Person Starter Asset, including camera clipping and physics collision issues.",

        technologies:
            ["Unity", "C#", "QA", "Cinemachine"],

        action: "Source Code"
    },


    {
        title: "Exam Ninja",
        status: "Prototype",
        category: "games",

        description:
            "A Fruit Ninja-style Unity game where players grade flying exam papers by swiping across the screen.",

        technologies:
            ["Unity", "C#", "Physics", "2D"],

        action: "Source Code"
    },


    {
        title: "Unity UI API Demo",
        status: "Prototype",
        category: "tools",

        description:
            "A demonstration of connecting Unity UI elements with an external API.",

        technologies:
            ["Unity", "C#", "UI", "API"],

        action: "Source Code"
    },


    {
        title: "Unwanted Guest",
        status: "Wishlist",
        category: "work",

        description:
            "Worked as a full-time remote intern at Easewin Gaming Private Limited, contributing to the prototype and early builds of this Steam-listed horror game.",

        technologies:
            ["Unity", "C#", "AI State Machines", "System Architecture"],

        action: "Watch Steam"
    },


    {
        title: "Fake It Till You Sink",
        status: "Ongoing",
        category: "games",

        description:
            "A co-op management-chaos game about running a cruise ship with friends, feeding passengers, keeping systems online, and surviving escalating disasters.",

        technologies:
            ["Godot", "Co-op", "Management", "Simulation"],

        action: ""
    },


    {
        title: "IMG to ASCII Converter",
        status: "Completed",
        category: "tools",

        description:
            "An interactive web application that converts uploaded images into customizable ASCII text art in real time.",

        technologies:
            ["HTML5", "JavaScript", "CSS", "Canvas API"],

        action: "Source Code"
    },


    {
        title: "Unity Tactical Grid Prototype",
        status: "Prototype",
        category: "games",

        description:
            "A 3D turn-based tactical grid prototype featuring procedural grid generation, custom editor tools, A* pathfinding, and enemy AI.",

        technologies:
            ["Unity", "C#", "Pathfinding", "Procedural Gen"],

        action: "Source Code"
    },


    {
        title: "Honknarok",
        status: "Completed",
        category: "games",

        description:
            "A short, physics-based rage game set on a treacherous mountain path to Valhalla.",

        technologies:
            ["Godot", "Physics", "Rage Game"],

        action: "Play"
    },


    {
        title: "Computer Vision & Attendance Systems",
        status: "Completed",
        category: "ai",

        description:
            "A suite of computer vision tools, face recognition pipelines, gallery management, and automated attendance tracking applications.",

        technologies:
            ["Python", "OpenCV", "Face Recognition", "Deep Learning"],

        action: "Source Code"
    },


    {
        title: "Tiny Wilds",
        status: "Prototype",
        category: "ai",

        description:
            "A predator-prey simulation and real-time evolution sandbox with autonomous agents built in Godot 4 and PyTorch.",

        technologies:
            ["Godot 4", "Evolution", "Sandbox", "AI"],

        action: "Source Code"
    },


    {
        title: "Image Comparison Application",
        status: "Completed",
        category: "tools",

        description:
            "A desktop application for pixel-level visual comparison, structural similarity assessment, and difference highlighting between image files.",

        technologies:
            ["Python", "OpenCV", "Computer Vision", "GUI"],

        action: "Source Code"
    },


    {
        title: "Fire Spread Simulation",
        status: "Completed",
        category: "tools",

        description:
            "A cellular automata simulation modeling dynamic wildfire propagation across terrain influenced by wind, moisture, and fuel density.",

        technologies:
            ["Python", "Cellular Automata", "Simulation", "Pygame"],

        action: "Source Code"
    },


    {
        title: "ARP Poisoning Demo",
        status: "Completed",
        category: "tools",

        description:
            "An educational cybersecurity project demonstrating ARP cache poisoning and network traffic observation.",

        technologies:
            ["Python", "Cybersecurity", "Networking", "Scapy"],

        action: "Source Code"
    },


    {
        title: "Product Price Prediction",
        status: "Completed",
        category: "ai",

        description:
            "An end-to-end machine learning project utilizing regression models to forecast e-commerce product pricing.",

        technologies:
            ["Python", "Jupyter", "Machine Learning", "Data Science"],

        action: "Source Code"
    },


    {
        title: "Conway's Game of Life",
        status: "Completed",
        category: "tools",

        description:
            "An interactive Python implementation of John Conway's cellular automaton with configurable initial grids and speed controls.",

        technologies:
            ["Python", "Cellular Automata", "Simulation"],

        action: "Source Code"
    },


    {
        title: "Traffic Flow Simulation",
        status: "Completed",
        category: "tools",

        description:
            "A cellular automata traffic model analyzing vehicle density, speed fluctuations, and phantom traffic jams.",

        technologies:
            ["Python", "Cellular Automata", "Traffic Modeling", "Simulation"],

        action: "Source Code"
    },


    {
        title: "Students Mental Health Analysis",
        status: "Completed",
        category: "ai",

        description:
            "A data science project analyzing student survey data to uncover statistical patterns and environmental factors.",

        technologies:
            ["Python", "Jupyter", "Data Science", "Data Analysis"],

        action: "Source Code"
    },


    {
        title: "Count-down",
        status: "Prototype",
        category: "games",

        description:
            "A platformer where your countdown affects the levels, activating and deactivating elements. Timing is the key.",

        technologies:
            ["Game Jam", "Platformer", "Puzzle"],

        action: "Play"
    }

];


/* =========================
   PROJECT RENDERING
========================= */

const projectContainer =
    document.getElementById("projectContainer");


let activeFilter = "all";


function renderProjects() {

    let visibleProjects =
        projects.filter(project => {

            if (activeFilter === "all") {
                return true;
            }

            return project.category === activeFilter;

        });


    projectContainer.innerHTML = "";


    visibleProjects.forEach(project => {

        const article =
            document.createElement("article");


        article.className = "project";


        const tags =
            project.technologies
                .map(
                    technology =>
                        `<span>${technology}</span>`
                )
                .join("");


        article.innerHTML = `

            <div class="project-top">

                <span class="project-status">
                    ${project.status}
                </span>

                <span class="project-category">
                    ${getCategoryName(project.category)}
                </span>

            </div>


            <h3>
                ${project.title}
            </h3>


            <p>
                ${project.description}
            </p>


            <div class="tags">
                ${tags}
            </div>


            ${
                project.action
                    ?
                    `<a
                        href="#"
                        class="project-action">
                        ${project.action.toUpperCase()} →
                    </a>`
                    :
                    ""
            }

        `;


        projectContainer.appendChild(article);

    });

}


function getCategoryName(category) {

    switch (category) {

        case "work":
            return "Work";

        case "games":
            return "Games";

        case "tools":
            return "Tools & Toys";

        case "ai":
            return "AI & ML";

        default:
            return "";

    }

}


/* =========================
   FILTER BUTTONS
========================= */

const filters =
    document.querySelectorAll(".filter");


filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        activeFilter =
            button.dataset.filter;


        renderProjects();

    });

});


/* =========================
   LIST / TIMELINE
========================= */

const viewButtons =
    document.querySelectorAll(".view-button");


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        viewButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        if (
            button.dataset.view ===
            "timeline"
        ) {

            projectContainer.classList.add(
                "timeline-mode"
            );

        } else {

            projectContainer.classList.remove(
                "timeline-mode"
            );

        }

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");


const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle("open");

    }
);


nav.querySelectorAll("a").forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove("open");

        }
    );

});


/* =========================
   YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* =========================
   INITIAL RENDER
========================= */

renderProjects();
```
