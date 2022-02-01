<template>
  <h1 class="counter-form-heading">Счётчик калорий</h1>
  <div class="counter-form">
    <counter-form-gender v-model:genderData="formData.gender" />
    <counter-form-body-characteristics
      v-model:characteristicsData="characteristics"
    />
    <counter-form-phisical-activity v-model:activityData="formData.activity" />
    <counter-form-control-buttons
      :is-result-btn-active="
        this.characteristics.age > 0 &&
        this.characteristics.height > 0 &&
        this.characteristics.weight > 0
      "
      :is-clean-btn-active="
        this.characteristics.age > 0 ||
        this.characteristics.height > 0 ||
        this.characteristics.weight > 0
      "
      @show-result="showResult"
      @clean="cleanForm"
    />
  </div>
  <counter-form-results v-if="this.isVisibleResult" :calories="calories" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import counterFormGender from "./CounterFormGender.vue";
import counterFormBodyCharacteristics from "./CounterFormBodyСharacteristics.vue";
import counterFormPhisicalActivity from "./CounterFormPhisicalActivity.vue";
import counterFormControlButtons from "./CounterFormControlButtons.vue";
import counterFormResults from "./CounterFormResults.vue";

export default defineComponent({
  components: {
    counterFormGender,
    counterFormBodyCharacteristics,
    counterFormPhisicalActivity,
    counterFormControlButtons,
    counterFormResults,
  },

  data() {
    return {
      characteristics: {
        age: 0,
        height: 0,
        weight: 0,
      },
      formData: {
        gender: "male",
        activity: "min",
      },
      activityIndex: [
        { name: "min", value: 1.2 },
        { name: "low", value: 1.375 },
        { name: "medium", value: 1.55 },
        { name: "high", value: 1.725 },
        { name: "max", value: 1.9 },
      ],
      isVisibleResult: false,
      calories: {
        maintenance: 0,
        less: 0,
        more: 0,
      },
    };
  },

  methods: {
    showResult() {
      this.calculateResult();
      this.isVisibleResult = true;
    },

    calculateResult() {
      let calories: number =
        10 * this.characteristics.weight +
        6.25 * this.characteristics.height -
        5 * this.characteristics.age;
      if (this.formData.gender === "male") calories += 5;
      else if (this.formData.gender === "female") calories -= 161;

      calories *= this.activityIndex
        .filter((index) => index.name === this.formData.activity)
        .map((index) => index.value)[0];
      this.changeCalories(calories, calories * 0.85, calories * 1.15);
    },

    cleanForm() {
      this.characteristics.age = 0;
      this.characteristics.height = 0;
      this.characteristics.weight = 0;

      this.formData.gender = "male";
      this.formData.activity = "min";

      this.isVisibleResult = false;
      this.changeCalories(0, 0, 0);
    },

    changeCalories(maintenance: number, less: number, more: number) {
      this.calories["maintenance"] = maintenance;
      this.calories["less"] = less;
      this.calories["more"] = more;
    },
  },
});
</script>

<style>
.counter-form-heading {
  margin: 0;
  margin-bottom: 22px;

  font-size: 64px;
  line-height: 83px;

  color: var(--color-text-white);
  text-align: center;
}

.counter-form {
  padding: 32px 32px;

  background-color: var(--color-background-main);

  margin-bottom: 20px;
  padding-top: 39px;
  padding-bottom: 43px;

  border-radius: 16px;

  background-color: white;
  display: inline-block;
  border-radius: 2%;
  width: 150mm;
}
</style>


