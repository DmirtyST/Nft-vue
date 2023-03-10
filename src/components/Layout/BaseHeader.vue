<template>
  <div class="header">
    <div class="header_line"></div>
    <div class="header_row">
      <div class="header_box">
        <div class="header_logo">
          <router-link to="/">
            <img :src="Logo" alt="SequoiaNft" />
          </router-link>
        </div>
        <nav class="header_nav">
          <ul class="header_lists">
            <li class="header_list" v-for="item in data" :key="item.id">
              <router-link class="header_link" :to="`#${item.path}`">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <ul class="header_social">
        <li v-for="item in dataSocial" :key="item.id">
          <a class="header-social_link" href="#">
            <component :is="item.name" />
          </a>
        </li>
      </ul>
      <div
        @click="activeBurger"
        :class="burger === false ? 'header_burger' : 'header_burger active'"
      >
        <div class="header_lines"></div>
      </div>
    </div>

    <BaseBurgerMenu
      :headerIcons="dataSocial"
      :headerLinks="data"
      :activeBurger="activeBurger"
      :burger="burger"
    />
  </div>
</template>

<script setup>
  import Logo from '@/assets/Logo.png';
  import IconTwitters from '~icons/radix-icons/twitter-logo';
  import IconFacebook from '~icons/iconoir/facebook-tag';
  import IconInst from '~icons/ri/instagram-line';
  import IconYTube from '~icons/uit/youtube';
  import BaseBurgerMenu from './BaseBurgerMenu.vue';
  import {ref} from 'vue';
  import {onMounted} from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const burger = ref(false);
  const activeBurger = () => {
    burger.value = !burger.value;
    if (burger.value === true) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  };
  const data = [
    {id: 0, title: 'home', path: 'home'},
    {id: 1, title: 'sequoia', path: 'sequoia'},
    {id: 2, title: 'parameters', path: 'parameters'},
    {id: 3, title: 'purchasing', path: 'purchasing'},
    {id: 4, title: 'collection', path: 'collection'},
    {id: 5, title: 'tokemonics', path: 'tokemonics'},
    {id: 6, title: 'roadmap', path: 'roadmap'},
    {id: 7, title: 'team', path: 'team'},
  ];
  const dataSocial = [
    {id: 0, name: IconTwitters},
    {id: 1, name: IconFacebook},
    {id: 2, name: IconInst},
    {id: 3, name: IconYTube},
  ];

  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1050px)', () => {
      gsap.fromTo(
        '.header',
        {},
        {
          padding: '15px 0',
          duration: 1,
          scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            toggleActions: 'restart none none reverse',
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        '.header_line',
        {opacity: 0},
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            toggleActions: 'restart none none reverse',
            scrub: 1,
          },
        },
      );
    });
  });
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    z-index: 9999;
    background-color: black;
    overflow: hidden;

    &_line {
      width: 100%;
      height: 2px;
      background-color: rgba(#c2e978, 0.4);
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &_row {
      padding: 0 15px;
      max-width: 1124px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    &_nav {
      font-family: 'Playfair Display';
      display: none;
    }
    &_lists {
      display: flex;
      gap: 24px;
    }

    &_link {
      color: #ffffff;
      transition: all linear 0.4s;

      &.active {
        color: #c2e978;
        transition: all linear 0.4s;
      }
      &:hover {
        transition: all linear 0.4s;
        color: #c2e978;
      }
    }
    &_svg {
      transition: all ease 0.4s;
      height: 22px;
      fill: #e5e5e5;

      &:hover {
        fill: #c2e978;
        transition: all ease 0.4s;
        transform: scale(1.2);
      }
    }
    &_logo {
      width: 64px;
      height: 64px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
      }
    }
    &_box {
      display: flex;
      gap: 24px;
      align-items: center;
    }
    &_social {
      position: relative;
      top: 4px;
      gap: 24px;
      display: none;
    }
    &-social {
      &_link {
        color: #ffffff;
        font-size: 18px;
        transition: all ease 0.4s;
        &:hover {
          color: #c2e978;
          transition: all ease 0.4s;
        }
      }
    }

    &_burger {
      height: 20px;
      width: 25px;
      position: relative;
      display: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 9999;
      overflow: hidden;
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: white;
        border-radius: 10px;
        transition: all ease 0.4s;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }

      &.active {
        &:before,
        &:after {
          transition: all ease 0.4s;
        }
        &::before {
          transform: rotate(-45deg);
          top: 5px;
          left: 1px;
        }

        &::after {
          transform: rotate(45deg);
          bottom: 12px;
          right: 2px;
        }
        .header_lines {
          transition: all ease 0.4s;
          transform: translate(-100%);
        }
      }
    }

    &_lines {
      background-color: #1db954;
      width: 100%;
      height: 0.2rem;
      border-radius: 1rem;
      transition: all ease 0.4s;
    }
  }
  @media (max-width: 1040px) {
    .header {
      overflow: visible;
      padding: 10px 0;
      &_burger {
        display: flex;
      }
      &_menu-mobile {
        display: contents;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9999;
        background-color: red;
        width: 30%;
      }

      &_logo {
        width: 54px;
        height: 54px;
      }
    }
  }
  @media (min-width: 1050px) {
    .header {
      padding: 45px 0px;
      &_social {
        display: flex;
      }
      &_menu-mobile {
        display: none;
      }
      &_nav {
        display: contents;
      }
    }
  }
</style>
