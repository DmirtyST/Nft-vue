<template>
  <div :class="burger === false ? 'burger-menu' : 'burger-menu active'">
    <div class="burger-menu_aside">
      <div class="burger-menu_image">
        <img :src="Leaf" alt="image" />
      </div>
      <div class="burger-menu_image">
        <img :src="Leaf2" alt="image" />
      </div>
      <div class="burger-menu_image">
        <img :src="Leaf2" alt="image" />
      </div>
      <ul class="burger-menu_lists">
        <li v-for="link in headerLinks" :key="link.id" class="burger-menu_list">
          <router-link
            @click="activeBurger"
            class="burger-menu_link"
            :to="`#${link.path}`"
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
      <ul class="burger-menu_icons">
        <li v-for="icon in headerIcons" :key="icon.id">
          <a class="burger-menu_icon" href="#">
            <component :is="icon.name" />
          </a>
        </li>
      </ul>
    </div>
    <div @click="activeBurger" class="burger-menu_substrate"></div>
  </div>
</template>

<script setup>
  import Leaf from '@/assets/leaf.png';
  import Leaf2 from '@/assets/leaf2.png';
  const props = defineProps({
    burger: {
      type: Boolean,
      default: false,
    },
    activeBurger: {
      type: Function,
    },
    headerLinks: {
      type: Array,
    },
    headerIcons: {
      type: Array,
    },
  });
</script>

<style lang="scss" scoped>
  .burger-menu {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    z-index: 50;
    visibility: hidden;
    transition: all linear 0.4s;
    &.active {
      transition: all linear 0.4s;
      visibility: visible;
      .burger-menu_aside {
        transform: translateX(-0%);
        transition: all linear 0.4s;
      }
      .burger-menu_substrate {
        display: block;
      }
    }
    &_icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    &_icon {
      color: #ffffff;
      font-size: 25px;
      transition: all ease 0.4s;
      &:hover {
        color: #c2e978;
        transition: all ease 0.4s;
      }
    }
    &_image {
      position: absolute;
      width: 80px;
      height: 80px;

      &:first-child {
        left: -5%;
        top: 0;
      }
      &:nth-child(2) {
        right: 0;
        bottom: 0%;
      }
      &:nth-child(3) {
        right: 0;
        top: 10%;
        transform: rotate(-90deg);
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &_aside {
      height: 100%;
      width: 40%;
      z-index: 0;
      background-color: black;
      padding: 30px;
      padding-top: 70px;
      overflow-y: auto;
      position: relative;
      transform: translateX(-100%);
      transition: all linear 0.4s;
    }
    &_lists {
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-bottom: 40px;
    }

    &_link {
      color: white;
      font-size: 22px;
      line-height: 25px;
      font-weight: 400;
      text-transform: uppercase;
      transition: all ease 0.4s;
      position: relative;
      z-index: 22;
      &.active {
        color: #c2e978;
        transition: all ease 0.4s;
      }
      &:hover {
        transition: all ease 0.4s;
        color: #c2e978;
      }
    }
    &_substrate {
      width: 60%;
      height: 100%;
      background-color: transparent;
      z-index: 22;
      display: none;
    }
  }
  @media (max-width: 576px) {
    .burger-menu {
      display: block;
      &_aside {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &::before {
          display: none;
        }
      }
      &_substrate {
        display: none;
      }
      &_lists {
        gap: 30px;
        margin-bottom: 80px;
      }
      &_list {
        text-align: center;
      }
      &_link {
        font-size: 16px;
        line-height: 20px;
      }

      &_icon {
        color: #ffffff;
        font-size: 20px;
        transition: all ease 0.4s;
        &:hover {
          color: #c2e978;
          transition: all ease 0.4s;
        }
      }
    }
  }
</style>
