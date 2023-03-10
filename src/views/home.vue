<template>
  <VContainer width="1250">
    <VSectionSreen />
    <VSectionMap />
    <VSectionParameter />
    <VSectionBenefits />
    <VSectionCollection />
    <VSectionTokenomics />
  </VContainer>
  <VSectionRoadmap />
  <VContainer width="1250">
    <VSectionTeam />
  </VContainer>
</template>

<script setup>
  import VContainer from '../components/UI/Container/VContainer.vue';
  import VSectionSreen from '../components/Sections/Screen/VSectionScreen.vue';
  import VSectionMap from '../components/Sections/Map/VSectionMap.vue';
  import VSectionParameter from '../components/Sections/Parameter/SectionParameter.vue';
  import VSectionBenefits from '../components/Sections/Benefits/VSectionBenefits.vue';
  import VSectionCollection from '../components/Sections/Collection/VSectionCollection.vue';
  import VSectionTokenomics from '../components/Sections/Tokenomics/VSectionTokenomics.vue';
  import VSectionRoadmap from '../components/Sections/Roadmap/VSectionRoadmap.vue';
  import VSectionTeam from '../components/Sections/Team/VSectionTeam.vue';
  import {onMounted} from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let sections = gsap.utils.toArray('section');
    let links = gsap.utils.toArray('.header_link');
    let linksMobile = gsap.utils.toArray('.burger-menu_link');

    sections.forEach((section, i) => {
      let mm = gsap.matchMedia();
      mm.add('(min-width: 1040px)', () => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',

          onToggle: (self) => {
            if (self.isActive) {
              links[i].classList.add('active');
            } else {
              links[i].classList.remove('active');
            }
          },
        });
      });
      mm.add('(max-width: 1040px)', () => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',

          onToggle: (self) => {
            if (self.isActive) {
              linksMobile[i].classList.add('active');
            } else {
              linksMobile[i].classList.remove('active');
            }
          },
        });
      });
    });
  });
</script>

<style lang="scss" scoped></style>
