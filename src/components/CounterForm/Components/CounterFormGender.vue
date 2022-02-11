<template>
  <div class="counter-from-gender">
    <h2 class="counter-from-gender-heading">Пол</h2>
    <ul class="counter-from-gender-switcher">
      <li
        v-for="genderForm in gendersForm"
        :key="genderForm"
        class="counter-from-gender-switcher__item"
      >
        <input
          :id="genderForm.id"
          @input="$emit('update:gender', genderForm.id)"
          name="gender"
          type="radio"
          :checked="genderForm.id === gender"
        />
        <label :for="genderForm.id">
          {{ genderForm.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GENDERS_FORM } from "../assets/constants";

export default defineComponent({
  props: {
    gender: {
      type: String,
      required: true,
    },
  },
  emit: ["update:gender"],

  data() {
    return {
      gendersForm: GENDERS_FORM,
    };
  },
});
</script>

<style scoped>
.counter-from-gender {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.counter-from-gender > .counter-from-gender-heading {
  margin-bottom: 16px;
}

.counter-from-gender-heading {
  margin: 0;
  text-align: left;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.counter-from-gender-switcher {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  border-radius: 4px;
  list-style: none;
}

.counter-from-gender-switcher__item {
  flex: 1 1 0;
}

.counter-from-gender-switcher__item + .switcher__item {
  margin-left: -1px;
}

.counter-from-gender-switcher__item:first-of-type label {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.counter-from-gender-switcher__item:last-of-type label {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.counter-from-gender-switcher__item:only-child label {
  border-radius: 4px;
}

.counter-from-gender-switcher__item label {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px;

  color: var(--color-text-black);

  user-select: none;
  cursor: pointer;
  border: solid 0.5px var(--color-accent);
  background-color: transparent;
  transition: 0.3s ease;
  transition-property: color, border, background, z-index, margin;
}

.counter-from-gender-switcher__item input[type="radio"] {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
}

.counter-from-gender-switcher__item label:hover {
  z-index: 3;

  color: var(--color-accent);
}

.counter-from-gender-switcher__item input[type="radio"]:checked + label {
  z-index: 0;

  color: var(--color-text-white);

  border-color: transparent;
  background-color: var(--color-accent);
}

.counter-from-gender-switcher__item input[type="radio"]:checked + label:hover {
  color: var(--color-text-white);
}
</style>
