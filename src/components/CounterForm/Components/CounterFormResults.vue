<template>
  <section id="result" class="counter-form-results">
    <h2 class="counter-form-results-heading">Ваша норма калорий</h2>
    <ul class="counter-form-results-list">
      <li
        v-for="result in results"
        :key="result"
        class="counter-form-results-list-item"
      >
        <h3>
          <span id="calories-norm">{{ calories[result.id].toFixed(0) }}</span>
          ккал
        </h3>
        <p>
          {{ result.name }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { RESULTS_FORM } from "../assets/constants";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    calories: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      results: RESULTS_FORM,
    };
  },
});
</script>

<style scoped>
.counter-form-results {
  padding: 32px 32px;

  background-color: var(--color-background-main);

  opacity: 1;
  visibility: visible;
  border-radius: 12px;

  transition: 0.6s ease;
  transition-property: opacity, visibility;
}

.counter-form-results--hidden {
  opacity: 0;
  visibility: hidden;
}

.counter-form-results > .counter-form-results-heading {
  margin-bottom: 12px;

  color: var(--color-accent);
}

.counter-form-results-list {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;
}

.counter-form-results-list-item {
  max-width: 124px;
}

.counter-form-results-list-item h3 {
  margin: 0;
  margin-bottom: 2px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}

.counter-form-results-list-item p {
  margin: 0;

  color: var(--color-gray-dark);
}
</style>