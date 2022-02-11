<template>
  <h1 class="counter-form-heading">Счётчик калорий</h1>
  <div class="counter-form">
    <counter-form-gender v-model:gender="formData.gender" />
    <counter-form-body-characteristics v-model:characteristics="formData.characteristics" />
    <counter-form-phisical-activity v-model:activity="formData.activity" />
    <counter-form-control-buttons
      :is-result-btn-active="isResultBtnActive"
      :is-clean-btn-active="isCleanBtnActive"
      @show-result="showResult"
      @clean="cleanForm"
    />
  </div>
  <counter-form-results v-if="this.isVisibleResult" :calories="calories" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { ACTIVITY_INDEXES } from "./assets/constants";
import counterFormGender from "./Components/CounterFormGender.vue";
import counterFormBodyCharacteristics from "./Components/CounterFormBodyСharacteristics.vue";
import counterFormPhisicalActivity from "./Components/CounterFormPhisicalActivity.vue";
import counterFormControlButtons from "./Components/CounterFormControlButtons.vue";
import counterFormResults from "./Components/CounterFormResults.vue";

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
      formData: {
        gender: "male",
        characteristics: {
          age: 0,
          height: 0,
          weight: 0,
        },
        activity: "min",
      },
      isVisibleResult: false,
      calories: {
        maintenance: 0,
        less: 0,
        more: 0,
      },
    };
  },

  computed: {
    isResultBtnActive(): boolean {
      return (
        this.formData.characteristics.age > 0 &&
        this.formData.characteristics.height > 0 &&
        this.formData.characteristics.weight > 0
      );
    },

    isCleanBtnActive(): boolean {
      return (
        this.formData.characteristics.age > 0 ||
        this.formData.characteristics.height > 0 ||
        this.formData.characteristics.weight > 0
      );
    },
  },

  methods: {
    showResult() {
      this.calculateResult();
      this.isVisibleResult = true;
    },

    calculateResult() {
      let calories: number =
        10 * this.formData.characteristics.weight +
        6.25 * this.formData.characteristics.height -
        5 * this.formData.characteristics.age;
      if (this.formData.gender === "male") calories += 5;
      else if (this.formData.gender === "female") calories -= 161;

      calories = this.getCalories(calories);
      this.setCalories(calories, calories * 0.85, calories * 1.15);
    },

    getCalories(oldValue: number) {
      return (
        oldValue *
        ACTIVITY_INDEXES.filter(
          (index: any) => index.name === this.formData.activity
        ).map((index: any) => index.value)[0]
      );
    },

    cleanForm() {
      this.formData.characteristics.age = 0;
      this.formData.characteristics.height = 0;
      this.formData.characteristics.weight = 0;

      this.formData.gender = "male";
      this.formData.activity = "min";

      this.isVisibleResult = false;
      this.setCalories(0, 0, 0);
    },

    setCalories(maintenance: number, less: number, more: number) {
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


