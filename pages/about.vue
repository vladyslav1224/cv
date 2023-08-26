<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-28 rounded-xl object-cover"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          I'm Vladyslav Pelykh, an Ukrainian based Vue.js developer/Student @ VTEI
          University, with never-stopping love for learning new tech. I am
          specialising in Web Development with Vue.js, Express, Node.js.
          I am passionate about the Internet and how we can design beautiful looking
          interfaces with programming languages.
        </SectionParagraph>
        <SectionParagraph>
          I'm currently working full-time for
          <LinkBtn link="https://trileotech.com/" text="DevOcean"/>, a cool web
          development company in Vinnytsia.
          I am also learning TS. Before this, I just
          used to create various Node.js web-apps/programs to fulfill my needs. It has helped me
          polish my web-development skills.
        </SectionParagraph>
        <SectionParagraph>
          I began delving into web development during my early high school years,
          initially getting acquainted with HTML and CSS. Swiftly, I commenced crafting basic
          webpages using simple HTML along with a touch of CSS. After high school, I embarked
          on a personal journey of exploration within the realm of web development. This voyage
          led me to encounter a plethora of frameworks, and among them, Vue.js resonated profoundly with me.
          From that point onward, I dedicated myself to mastering Vue.js, progressively incorporating additional
          tools like TailwindCSS and Express with each new project I undertook.
        </SectionParagraph>
        <SectionParagraph>
          You can find my projects on my
          <LinkBtn link="https://github.com/vlxdsxd" text="Github"/>
          or on my
          <LinkBtn link="/" text="Portfolio"/>
          page. I usually don't update my portfolio page but all my recent one's are on github.
        </SectionParagraph>
      </div>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <div class="flex flex-col gap-5">
        <SectionTitle>Work</SectionTitle>
        <NuxtLayout name="section">
          <WorkListItem v-for="work in works" :key="work.id" :work="work"/>
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
