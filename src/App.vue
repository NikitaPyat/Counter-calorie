<template>
  <counter-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import counterForm from "./components/CounterForm/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    counterForm,
  },
});
</script>

<style>
#app {
  background: url("assets/main-background.jpg");
  text-align: center;
}

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 2 version
*/

@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: "PT Sans Caption";

  font-display: swap;
  src: url("assets/fonts/pt-sans-caption-bold.woff2") format("woff2"),
    url("assets/fonts/pt-sans-caption-bold.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "PT Sans Caption";

  font-display: swap;
  src: url("assets/fonts/pt-sans-caption-regular.woff2") format("woff2"),
    url("assets/fonts/pt-sans-caption-regular.woff") format("woff");
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  --color-gray-darkest: #7b7b7b;
  --color-gray-dark: #7e7e7e;
  --color-gray: #9e9e9e;
  --color-gray-light: #bdbdbd;
  --color-gray-lighter: #d1d1d1;
  --color-gray-lightest: #dcdcdc;
  --color-text-black: #000000;
  --color-text-white: #ffffff;
  --color-background-main: #ffffff;
  --color-accent: #fd7d36;
  --color-accent-hover: #ff9e68;
  --color-accent-active: #ff7528;
  --color-warning: #fd3636;
  --color-warning-hover: #ff8484;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  min-width: 1160px;
}

body {
  width: 100%;

  font-size: 18px;
  line-height: 21px;
  font-family: "PT Sans Caption", "Arial", sans-serif;
  color: var(--color-text-black);

  flex: 1 0 auto;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;

  background-image: url("assets/main-background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--color-accent);
}
</style>
