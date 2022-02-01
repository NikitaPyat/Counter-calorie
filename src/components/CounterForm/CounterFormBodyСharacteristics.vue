<template>
  <fieldset
    class="
      counter-form-body-characteristics__item
      bodyCharacteristics__parameters
    "
    name="parameters"
  >
    <legend class="counter-form-body-characteristics-visually-hidden">
      Физические параметры
    </legend>
    <div class="counter-form-body-characteristics-inputs-group">
      <div
        class="counter-form-body-characteristics-inputs-group-input"
        v-for="characteristic in characteristics"
        :key="characteristic"
      >
        <div
          class="counter-form-body-characteristics-inputs-group-input__heading"
        >
          <label
            class="
              counter-form-body-characteristics-inputs-group-input__heading-heading
            "
            for="age"
          >
            {{ characteristic.name }}
          </label>
          <span
            class="
              counter-form-body-characteristics-inputs-group-input__heading-unit
            "
          >
            {{ characteristic.measure }}
          </span>
        </div>
        <div
          class="counter-form-body-characteristics-inputs-group-input__wrapper"
        >
          <input
            type="text"
            :id="characteristic.id"
            :name="characteristic.name"
            :value="
              characteristicsData[characteristic.id] === 0
                ? null
                : characteristicsData[characteristic.id]
            "
            @input="changeValue($event.target.value, characteristic.id)"
            :placeholder="0"
            inputmode="decimal"
            maxlength="3"
            required
          />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    characteristicsData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      cloneCharactiristicsData: {
        age: 0,
        height: 0,
        weight: 0,
      },
      characteristics: [
        {
          id: "age",
          name: "Возраст",
          measure: "лет",
        },
        {
          id: "height",
          name: "Рост",
          measure: "см",
        },
        {
          id: "weight",
          name: "Вес",
          measure: "кг",
        },
      ],
    };
  },

  methods: {
    changeValue(val: number, id: string) {
      (this.cloneCharactiristicsData as any)[id] = val;
      this.$emit("update:characteristicsData", this.cloneCharactiristicsData);
    },
  },
});
</script>

<style scoped>
.counter-form-body-characteristics__item {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.counter-form-body-characteristics__item > .heading {
  margin-bottom: 16px;
}

.counter-form-body-characteristics__parameters {
  margin-bottom: 34px;
}

.counter-form-body-characteristics__item:last-child {
  margin-bottom: 0;
}

.counter-form-body-characteristics-inputs-group-input__heading-heading {
  margin: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.counter-form-body-characteristics-inputs-group {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  list-style: none;
}

.counter-form-body-characteristics-inputs-group
  .counter-form-body-characteristics-inputs-group-input:nth-child(2) {
  margin-left: 47px;
  margin-right: auto;
}

.counter-form-body-characteristics-inputs-group-input {
  width: fit-content;
}

.counter-form-body-characteristics-inputs-group-input__heading {
  display: flex;
  align-items: flex-end;
  margin: 0;
  margin-bottom: 12px;
}

.counter-form-body-characteristics-inputs-group-input__heading label {
  cursor: pointer;
}

.counter-form-body-characteristics-inputs-group-input__heading-unit {
  margin: 0;
  margin-left: 6px;

  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: var(--color-gray);
}

.counter-form-body-characteristics-inputs-group-input__wrapper {
  display: flex;
  width: 80px;
  margin: 0;
}

.counter-form-body-characteristics-inputs-group-input__wrapper input {
  width: 100%;
  margin: 0;
  padding: 10px 5px;

  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: var(--color-text-black);

  outline: none;
  border-radius: 4px;
  border: 0.5px solid currentColor;
  background: transparent;

  transition: 0.3s ease;
  transition-property: color, border;
}

.counter-form-body-characteristics-inputs-group-input__wrapper
  input::placeholder {
  color: var(--color-gray-darkest);

  transition: 0.3s ease;
  transition-property: color;
}

.counter-form-body-characteristics-inputs-group-input__wrapper input:hover,
.counter-form-body-characteristics-inputs-group-input__wrapper input:active,
.counter-form-body-characteristics-inputs-group-input__wrapper input:focus {
  border-color: var(--color-accent);
}

.counter-form-body-characteristics-inputs-group-input__wrapper
  input:hover::placeholder,
.counter-form-body-characteristics-inputs-group-input__wrapper
  input:active::placeholder {
  color: var(--color-text-black);
}

.counter-form-body-characteristics-inputs-group-input__wrapper
  input:focus::placeholder {
  color: transparent;
}

.counter-form-body-characteristics-visually-hidden {
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
</style>
