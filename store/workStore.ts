import {defineStore} from "pinia";
import {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 2,
            name: "Sincos Development",
            position: "Frontend Developer",
            from: "2023",
            to: "Cur.",
            link: "http://sincos.tech/",
        },
        {
            id: 1,
            name: "DevOcean",
            position: "Frontend Developer",
            from: "2023",
            to: "2023",
            link: "https://devocean.pro/",
        },
        {
            id: 3,
            name: "ElephantsLab",
            position: "Frontend Developer",
            from: "2022",
            to: "2023",
            link: "https://elephantslab.com/",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})