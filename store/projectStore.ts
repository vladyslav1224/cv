import {defineStore} from "pinia";
import {ProjectStore} from "~/types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 1,
            name: "Evolve - Task Manager",
            image: images["../assets/featured/evolve.png"],
            description:
                "Evolve is a manager for your productivity",
            tech: ["Vue.js", "TailwindCSS"],
            link: "https://evolvs.netlify.app/",
            featured: true,
        },
    ];

    const grave = [
        {
            id: 1,
            name: "Evolve App",
            image: images["../assets/featured/case_changer.jpg"],
            description:
                "A simple task manager.",
            tech: ["Vue 3", "Tailwind"],
            link: "https://github.com/vlxdsxd/evolve-app",
        },
        {
            id: 2,
            name: "To Do list",
            image: images["../assets/featured/tic_tac_toe.jpg"],
            description:
                "Default To Do list",
            tech: ["js"],
            link: "https://github.com/vlxdsxd/to-do-list",
        },
    ]

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
        getGraveProjects: grave.slice(),
    };
})

