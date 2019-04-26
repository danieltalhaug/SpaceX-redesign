<template>
  <div class="app">
    <nav class="nav nav--background">
      <router-link class="nav__links" to="/">Latest Launch</router-link>
      <router-link class="nav__links" to="/NextLaunch">Next Launch</router-link>
      <router-link class="nav__links" to="/Images">Images</router-link>
      <router-link class="nav__links" to="/Contact">Contact</router-link>
    </nav><!-- Header end -->
    <transition name="router-animate">
      <router-view />
    </transition><!-- Animations -->
    <footer class="footer">
      <div>
      <router-link class="footer__links footer__links--color footer__links--spacing" to="/">Latest Launch</router-link>
      <router-link class="footer__links footer__links--color footer__links--spacing" to="/NextLaunch">Next Launch</router-link>
      <router-link class="footer__links footer__links--color footer__links--spacing" to="/Images">Images</router-link>
      <router-link class="footer__links footer__links--color footer__links--spacing" to="/Contact">Contact</router-link>
      </div>
      <div class="">
        <a href="https://www.flickr.com/photos/spacex/" target="_blank"><img class="footer__icons" src="./assets/icons/flickr-square-gray.svg" alt="Flickr icon"></a>
        <a href="https://www.instagram.com/spacex/?hl=en" target="_blank"><img class="footer__icons" src="./assets/icons/instagram-gray.svg" alt="Instagram icon"></a>
        <a href="https://twitter.com/spacex?lang=en" target="_blank"><img class="footer__icons" src="./assets/icons/twitter-square-gray.svg" alt="Twitter icon"></a>
        <a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target="_blank"><img class="footer__icons" src="./assets/icons/youtube-square-gray.svg" alt="Youtube icon"></a>
      </div>
      <div class="footer__text">
        <p>The amazing vector art is supplied by <a class="footer__links footer__links--color" href="https://www.freepik.com/free-vector/lovely-galaxy-background-with-flat-design_2859825.htm">afreepik.com</a></p>
        <p>This website was created for a school project and is in no way affiliated with SpaceX. <br><br> &#169; Daniel Talhaug</p>
      </div>
	</footer><!-- Footer end -->
  </div>
</template>
<script>

export default {

}
</script>


<style lang="scss">
// VARIABLES
// Colours
$nav-text: #fff;
$pink: #a849a3;
$purple: #7c3a94;
$footer-bg: #fff;
$container-bg: #fff;
$blue-dark: #0d0e93;
// Other
$transition-fast: 0.2s;
$round-border-medium: 10px;
$round-border-large: 20px;
$letter-spacing: 0.05em;
// Break points
$break-medium: 768px;
// SCSS
* {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    color: $blue-dark;
}
.page {
  width: inherit;
}
.router-animate-enter-active {
  animation: enter 1s;
  animation-delay: .6s;
  opacity: 0;
}
.router-animate-leave-active {
  animation: exit 1s;
}
@keyframes exit {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes enter {
  from {
    transform: translateX(-50px);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
body {
  margin: 0;
  background: url('./assets/space-bg.svg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.app {
  position: relative;
  min-height: 100vh;
}
.nav {
  display: flex;
  flex-direction: row; // row for desktop
  justify-content: center; // centers the navigation links
  padding: 50px 0 50px 0;
  text-align: center;
  @media screen and (max-width: $break-medium) {
    flex-direction: column;
    padding: 40px 0 40px 0;
  }
  &__links {
    font-weight: bold;
    color: $nav-text;
    text-decoration: none;
    padding: 0 30px 0 30px;
    font-size: 1.5em;
    text-shadow: 0 0px 5px black;
    @media screen and (max-width: $break-medium) {
      flex-direction: column;
      padding: 20px 0 20px 0;
    }
    &:hover {
      color: $pink;
      transition: $transition-fast;
    }
    &.router-link-exact-active {
      color: $pink;
    }
  }
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: $letter-spacing;
    margin: 0 15px 0 15px;
}
.container--size {
    max-width: 800px;
    width: 100%;
    height: auto;
}
.content-container {
    box-shadow: 0 10px 15px rgba(0,0,0,0.2);
    border-radius: $round-border-large;
    &--background {
        background-color: $container-bg;
    }
}
.container-title {
    font-size: 1.4em;
    text-align: center;
    color: #0d0e93;
}
.container__image {
    text-align: center;
    &--rocket {
        max-width: 300px;
        width: 100%;
        height: auto;
        transform: rotate(20deg);
    }
    &--floatyman {
        max-width: 500px;
        width: 100%;
        height: auto;
    }
    &--moon {
      max-width: 280px;
      width: 100%;
      height: auto;
    }
}
.table-container {
    margin: 30px;
}
.table {
    width: 100%;
    border-collapse: collapse;
    border-radius: $round-border-medium;
    overflow: hidden;
    &__header {
        background-color: lighten($pink, 15%);
        color: white;
        text-align: left;
        padding: 20px;
        font-size: 1.3em;
    }
    &__row {
        &:hover {
            background-color: #fbf6fb;
        }
        &:nth-child(odd) {
            background-color: #f6ecf6;
            &:hover {
                background-color: #fbf6fb;
            }
        }
    }
    &__cell {
        text-align: left;
        padding: 20px;
        font-size: 1.2em;
    }
    &__icon {
        width: 2em;
        height: auto;
        &:hover {
            opacity: 0.7;
            transition: $transition-fast;
        }
    }
    &__info {
        font-size: 1.2em;
        line-height: 1.4;
    }
}
.bold-text {
    font-weight: bold;
}
// Contact page
.form {
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: $break-medium) {
      width: 100%;
    }
    &__label {
        font-size: 1.1em;
    }
    &__input {
      font-size: 16px;
      width: 100%;
      padding: 12px 20px;
      margin: 10px 0 10px 0;
      border: 1px solid $blue-dark;
      &:focus {
        outline: none;
        border: 2px solid $purple;
        }
    }
    &__textarea {
      margin: 10px 0 10px 0;
      width: 100%;
      height: 250px;
      padding: 15px 20px;
      border: none;
      font-size: 16px;
      resize: none;
      border: 1px solid $blue-dark;
      &:focus {
        outline: none;
        border: 2px solid $purple;
        }
    }
    &--radius {
        border-radius: $round-border-medium;
    }
}
.button {
    position: relative;
	padding: 15px 25px;
    background: rgb(168,73,163);
    background: linear-gradient(219deg, rgba(168,73,163,1) 0%, rgba(124,58,148,1) 100%);
	color: white;
	cursor: pointer;
	border: none;
    &:hover {
        transition: $transition-fast;
        background: rgb(124,58,148);
        background: linear-gradient(219deg, rgba(124,58,148,1) 0%, rgba(168,73,163,1) 100%);
    }
}
.error {
    color: red;
    &-border {
        border: 2px red;
    }
}
.carousel__image {
    width: 100%;
}
// Footer
.footer {
  width: 100%;
  padding: 50px 0 50px 0;
  text-align: center;
  background-color: white;
  margin-top: 100px;
  &__links {
    text-decoration: none;
    &--color {
      color: $pink;
      &:hover {
        color: lighten($pink, 20%);
        transition: $transition-fast;
      }
    }
    &--spacing {
      padding: 0 20px 0 20px;
    }
  }
  &__icons {
    width: 80px;
    margin: 40px 0 20px 0;
    &:hover {
      opacity: 0.7;
      transition: $transition-fast;
    }
  }
}
.sub-header {
  font-size: 1em;
}
.vueCarousel-dot--active {
  background-color: $pink !important;
}
</style>
