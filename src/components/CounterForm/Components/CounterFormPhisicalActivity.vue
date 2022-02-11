<template>
  <fieldset class="counter-form-phisical-activity">
    <legend class="counter-form-phisical-activity-heading">
      Физическая активность
    </legend>
    <ul class="counter-form-phisical-activity-radios-group">
      <li
        class="counter-form-phisical-activity-radios-group-radio"
        v-for="level in levels"
        :key="level"
      >
        <div class="counter-form-phisical-activity-radios-group-radio__wrapper">
          <input
            :id="level.id"
            name="activity"
            @input="$emit('update:activity', level.id)"
            type="radio"
            :checked="level.id === activity"
            required
          />
          <label :for="level.id">
            {{ level.name }}
          </label>
        </div>
        <p class="counter-form-phisical-activity-radios-group-radio__description">
          {{ level.description }}
        </p>
      </li>
    </ul>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ACTIVITY_LEVELS } from "../assets/constants";

export default defineComponent({
  props: {
    activity: {
      type: String,
      required: true,
    },
  },
  emit: ["update:activity"],

  data() {
    return {
      levels: ACTIVITY_LEVELS,
      chosenLevel: "min",
    };
  },
});
</script>

<style scoped>
.counter-form-phisical-activity {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.counter-form-phisical-activity > .counter-form-phisical-activity-heading {
  margin-bottom: 16px;
}

.counter-form-phisical-activity:last-child {
  margin-bottom: 0;
}

.counter-form-phisical-activity-heading {
  margin: 0;
  text-align: left;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.counter-form-phisical-activity-radios-group-radio__wrapper {
  width: fit-content;
}

.counter-form-phisical-activity-radios-group-radio__wrapper label {
  display: flex;
  align-items: flex-start;

  font-size: 20px;
  line-height: 26px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, box-shadow;
}

.counter-form-phisical-activity-radios-group-radio__wrapper
  input[type="radio"] {
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

.counter-form-phisical-activity-radios-group-radio__wrapper label::before {
  content: "";

  flex-shrink: 0;
  display: block;
  width: 32px;
  height: 24px;
  margin-top: 1px;
  padding-right: 8px;

  background-image: url("../../../assets/icon-radio-empty.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 24px 24px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: background;
}

.counter-form-phisical-activity-radios-group-radio__wrapper
  input[type="radio"]:checked
  + label::before {
  background-image: url("../../../assets/icon-radio-checked.svg");
}

.counter-form-phisical-activity-radios-group-radio__wrapper label:hover,
.counter-form-phisical-activity-radios-group-radio__wrapper
  input[type="radio"]:checked
  + label {
  color: var(--color-accent);
}

.counter-form-phisical-activity-radios-group {
  max-width: 94%;
  margin: 0;
  padding: 0;

  list-style: none;
}

.counter-form-phisical-activity-radios-group
  .counter-form-phisical-activity-radios-group-radio {
  margin-bottom: 15px;
}

.counter-form-phisical-activity-radios-group
  .counter-form-phisical-activity-radios-group-radio:last-child {
  margin-bottom: 0;
}

.counter-form-phisical-activity-radios-group-radio__description {
  margin: 0;
  margin-left: 32px;
  margin-top: 3px;
  padding-bottom: 2px;
  text-align: left;

  color: var(--color-gray-light);
}
</style>
