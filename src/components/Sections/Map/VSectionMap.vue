<template>
  <section id="sequoia">
    <div name="sequoia" class="sectionMap">
      <img class="sectionMap_img" :src="SectionMapBg" alt="image-map" />
      <VSectionMapAnimation />
      <VContainer width="950">
        <div class="sectionMap_row">
          <div class="sectionMap_title">
            <VHtag size="xl" size-sub="xl">
              Another NFT collection?
              <template v-slot:span>
                <div class="sectionMap-title_sub">NOt only!</div>
              </template>
            </VHtag>
          </div>
          <div class="sectionMap_image">
            <picture>
              <source :srcset="SectionMapImageWebp" />
              <img :src="SectionMapImage" alt="mapimg" />
            </picture>
          </div>
          <div class="sectionMap_description">
            <VTypography size="xl" size-span="xl">
              <span>Sequoia NFT Park</span> is <span>1,000</span> sequoia seedlings
              planted on a <span>50-hectare</span> plot of land in Albota de Sus, Moldova
            </VTypography>
            <VButton color="minimal">Explore NFT Park</VButton>
          </div>
        </div>
      </VContainer>
    </div>
    <SectionMapBanner />
  </section>
</template>

<script setup>
  import SectionMapBg from '@/assets/SectionMap.png';
  import SectionMapImage from '@/assets/SectionMapImage.png';
  import SectionMapImageWebp from '@/assets/SectionMapImage.webp';
  import VButton from '@comps/UI/Button/VButton.vue';
  import VContainer from '@comps/UI/Container/VContainer.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  import SectionMapBanner from './SectionMapBanner.vue';
  import VSectionMapAnimation from './VSectionMapAnimation.vue';
</script>

<style lang="scss" scoped>
  .sectionMap {
    min-height: 379px;
    overflow: hidden;
    width: 100%;
    margin-bottom: 80px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &_img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      z-index: -1;
      object-position: top left;
    }
    &_image {
      position: relative;
      width: 33%;

      img {
        position: absolute;
        max-width: unset;
        top: -70px;
        left: -70px;
        height: 362px;
        width: 345px;
      }
    }
    &_row {
      display: flex;

      gap: 5px;
    }
    &_title {
      width: 30%;
    }
    &_description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 33%;
      gap: 27px;
      span {
        font-family: PlayfairDisplay;
        font-weight: 400;
        font-style: italic;
        color: #c2e978;
      }
    }

    &-title {
      &_sub {
        padding-left: 20px;
      }
    }
  }

  @media (max-width: 925px) {
    .sectionMap {
      margin-bottom: 50px;
      &_row {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
      }

      &_image {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        img {
          top: -100px;
          left: -60px;
          height: 350px;
          width: 350px;
        }
      }

      &_title {
        width: 100%;
        text-align: center;
      }
      &-title {
        &_sub {
          padding-left: 0px;
        }
      }
      &_description {
        align-items: center;
        text-align: center;
        width: 100%;
        span {
          font-weight: 400;
        }
      }
    }
  }
  @media (max-width: 720px) {
    .sectionMap {
      &_image {
        display: none;
      }
    }
  }

  @media (max-width: 460px) {
    .sectionMap {
      &_row {
        padding: 35px 0;
        padding-bottom: 50px;
      }
    }
  }
</style>
