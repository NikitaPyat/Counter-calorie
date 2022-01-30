<template>
  <div>
    <h1 class="counter__heading heading-main">Счётчик калорий</h1>
    <div class="counter__form">
      <gender :clean="isClean" @gender-changed="changeGender" />
      <body-characteristics
        :clean="isClean"
        @age-changed="changeAge"
        @height-changed="changeHeight"
        @weight-changed="changeWeight"
      />
      <phisical-activity :clean="isClean" @activity-changed="changeActivity" />
      <control-buttons
        :get-is-active="
          this.formData.age > 0 &&
          this.formData.height > 0 &&
          this.formData.weight > 0
        "
        :clean-is-active="
          this.formData.age > 0 ||
          this.formData.height > 0 ||
          this.formData.weight > 0
        "
        @show-result="showResult"
        v-model="isClean"
      />
    </div>
    <results :is-visible-result="isVisibleResult" :calories="calories" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import gender from "./FormGender.vue";
import bodyCharacteristics from "./FormBodyСharacteristics.vue";
import phisicalActivity from "./FormPhisicalActivity.vue";
import controlButtons from "./FormControlButtons.vue";
import results from "../Results/Results.vue";

export default defineComponent({
  components: {
    gender,
    bodyCharacteristics,
    phisicalActivity,
    controlButtons,
    results,
  },

  data() {
    return {
      isClean: false,
      formData: {
        gender: "male",
        age: 0,
        height: 0,
        weight: 0,
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

  watch: {
    isClean(value: boolean) {
      if (value) {
        this.isVisibleResult = false;
      }
    },
  },

  methods: {
    getIsActive() {
      return (
        this.formData.age > 0 &&
        this.formData.height > 0 &&
        this.formData.weight > 0
      );
    },

    changeGender(newGender: string) {
      this.formData.gender = newGender;
      console.log(newGender);
    },

    changeAge(age: number) {
      this.formData.age = age;
      console.log("age " + age);
    },

    changeHeight(height: number) {
      this.formData.height = height;
      console.log("height " + height);
    },

    changeWeight(weight: number) {
      this.formData.weight = weight;
      console.log("weight " + weight);
    },

    changeActivity(activity: string) {
      this.formData.activity = activity;
      console.log("activity " + activity);
    },

    showResult() {
      let calories: number =
        10 * this.formData.weight +
        6.25 * this.formData.height -
        5 * this.formData.age;
      if (this.formData.gender === "male") calories += 5;
      else if (this.formData.gender === "female") calories -= 161;

      calories *= this.activityIndex
        .filter((index) => index.name === this.formData.activity)
        .map((index) => index.value)[0];
      this.changeCalories(calories, calories * 0.85, calories * 1.15);
      this.isVisibleResult = true;
      console.log(this.isVisibleResult);
    },

    cleanForm() {
      this.isClean = true;
      this.isVisibleResult = false;
      this.changeCalories(0, 0, 0);
    },

    changeCalories(maintenance: number, less: number, more: number) {
      this.calories["maintenance"] = maintenance;
      this.calories["less"] = less;
      this.calories["more"] = more;
    },
  },

  updated: function () {
    if (!this.getIsActive()) this.isClean = false;
  },
});
</script>

<style>
.counter {
  padding-top: 40px;
  padding-bottom: 50px;
}

.counter__heading {
  margin: 0;
  margin-bottom: 22px;

  color: var(--color-text-white);
  text-align: center;
}

.counter__form {
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

.heading-main {
  font-size: 64px;
  line-height: 83px;
}
</style>


