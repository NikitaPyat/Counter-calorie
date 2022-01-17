<template>
  <div class="main">
      <h1 class="counter__heading heading-main">
        Счётчик калорий
      </h1>
      <div class="counter__form form" >
        <Gender 
          :clean="clean"
          @change-gender="ChangeGender"/>
        <BodyCharacteristics 
          :clean="clean"
          @age="ChangeAge"
          @height="ChangeHeight"
          @weight="ChangeWeight"/>
        <PhisicalActivity
          :clean="clean"
          @change-activity="ChangeActivity"/>
        <GetCleanResult 
          :button-get-is-active="this.formData.age > 0 && this.formData.height > 0 && this.formData.weight > 0"
          :button-clean-is-active="this.formData.age > 0 || this.formData.height > 0 || this.formData.weight > 0"
          @clean="CleanForm"
          @getResult="GetResult"/>
      </div>
      <Result
        :is-visible-result="isVisibleResult"
        :calories="calories"/>
  </div>
</template>


<script>
import Gender from './Gender.vue'
import BodyCharacteristics from './BodyСharacteristics.vue'
import PhisicalActivity from './PhisicalActivity.vue'
import GetCleanResult from './GetCleanResult.vue'
import Result from './Result.vue'

export default {
  components: { 
    Gender, 
    BodyCharacteristics,
    PhisicalActivity,
    GetCleanResult,
    Result
    },

  data() {
    return {
      clean: false,
      formData: {
        gender: "male",
        age: 0,
        height: 0,
        weight: 0,
        activity: "min"
      },
      activityIndex: [
        { name: "min", value: 1.2 },
        { name: "low", value: 1.375 },
        { name: "medium", value: 1.55 },
        { name: "high", value: 1.725 },
        { name: "max", value: 1.9 }
      ], 
      isVisibleResult: false,
      calories: {
        maintenance: 0, 
        less: 0, 
        more: 0},
    }
  },


  methods: {
    GetIsActive() {
      return this.formData.age > 0 && this.formData.height > 0 && this.formData.weight > 0
    },

    ChangeGender(newGender) {
      this.formData.gender = newGender
    },

    ChangeAge(age) {
      this.formData.age = age
    },

    ChangeHeight(height) {
      this.formData.height = height
    },

    ChangeWeight(weight) {
      this.formData.weight = weight
    },

    ChangeActivity(activity) {
      this.formData.activity = activity
    },

    GetResult() {
      let calories = (10 * this.formData.weight) + (6,25  * this.formData.height) - (5 * this.formData.age)
      if (this.formData.gender === "male") calories += 5
      else if (this.formData.gender === "female") calories -= 161

      calories *= this.activityIndex.filter(index => index.name === this.formData.activity).map(index => index.value)
      this.ChangeCalories(calories, calories * 0.85, calories * 1.15)
      this.isVisibleResult = true
    },

    CleanForm() {
      this.clean = true
      this.isVisibleResult = false
      this.ChangeCalories(0, 0, 0)
    },

    ChangeCalories(maintenance, less, more) {
      this.calories["maintenance"] = maintenance
      this.calories["less"] = less
      this.calories["more"] = more
    }
  },

  updated: function() {
    if(!this.GetIsActive()) this.clean = false
  }
}
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

.counter__form{
  padding: 32px 32px;

  background-color: var(--color-background-main);

  margin-bottom: 20px;
  padding-top: 39px;
  padding-bottom: 43px;

  border-radius: 16px;
}

.form {
  background-color: white;
  display: inline-block;
  border-radius: 2%;
  width: 150mm;
}

.heading-main {
  font-size: 64px;
  line-height: 83px;
}

.main {
  flex: 1 0 auto;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;

  background-image: url("../assets/main-background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--color-accent);
}

</style>


