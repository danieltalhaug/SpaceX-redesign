<template>
    <div class="container page">
        <div class="image-container container--size">
            <figure class="container__image">
                <img class="container__image--moon" src="./../assets/planet.svg" alt="Orange planet image">
            </figure>
        </div><!-- Image container end -->
        <div class="content-container content-container--background container--size">
            <div class="container-title">
                <h1>SpaceX Image gallery</h1>
                <h2 class="sub-header">Beautiful SpaceX photos from previous launches and missions.</h2>
            </div><!-- Title box end -->
            <carousel>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/NROL-76-Mission.jpg" alt="NROL 76 Mission Launch image">
                    </figure>
                </slide>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/CRS-8.jpg" alt="CRS-8 landing image">
                    </figure>
                </slide>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/CRS-3-launch.jpg" alt="CRS-3 Launch">
                    </figure>
                </slide>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/CRS-13-Mission.jpg" alt="CRS-13 landing image">
                    </figure>
                </slide>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/ECHOSTAR-105SES-11-MISSION.jpg" alt="Echostar flying rocket image">
                    </figure>
                </slide>
                <slide>
                    <figure>
                        <img class="carousel__image" src="./../assets/gallery/SES-9-launch.jpg" alt="SES-9 Launch long exposure image">
                    </figure>
                </slide>
            </carousel>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'ImagePage',
    components: {
    Carousel,
    Slide
  }
}
</script>
<style lang="scss">

</style>
