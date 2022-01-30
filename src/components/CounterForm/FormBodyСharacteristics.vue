<template>
  <fieldset
    class="bodyCharacteristics__item bodyCharacteristics__parameters"
    name="parameters"
  >
    <legend class="visually-hidden">Физические параметры</legend>
    <div class="inputs-group">
      <div
        class="input"
        v-for="characteristic in characteristics"
        :key="characteristic"
      >
        <div class="input__heading">
          <label class="heading" for="age">
            {{ characteristic.name }}
          </label>
          <span class="input__heading-unit">
            {{ characteristic.measure }}
          </span>
        </div>
        <div class="input__wrapper">
          <input
            type="text"
            :id="characteristic.id"
            :name="characteristic.name"
            v-on:input="changeValue($event, characteristic.id)"
            placeholder="0"
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
  emits: ["ageChanged", "heightChanged", "weightChanged"],
  props: ["clean"],

  data() {
    return {
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

  watch: {
    clean(value: boolean) {
      if (value) {
        this.characteristics.forEach((characteristic: any) => {
          (
            document.getElementById(characteristic.id) as HTMLInputElement
          ).value = "0";
          let idEvent: any = characteristic.id + "Changed";
          this.$emit(idEvent, 0);
        });
      }
    },
  },

  methods: {
    changeValue(event: any, id: string) {
      let idEvent: any = id + "Changed";
      this.$emit(idEvent, event.target.value);
    },
  },
});
</script>

<style scoped>
.bodyCharacteristics__item {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.bodyCharacteristics__item > .heading {
  margin-bottom: 16px;
}

.bodyCharacteristics__parameters {
  margin-bottom: 34px;
}

.bodyCharacteristics__item:last-child {
  margin-bottom: 0;
}

.heading {
  margin: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.inputs-group {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  list-style: none;
}

.inputs-group .input:nth-child(2) {
  margin-left: 47px;
  margin-right: auto;
}

.input {
  width: fit-content;
}

.input__heading {
  display: flex;
  align-items: flex-end;
  margin: 0;
  margin-bottom: 12px;
}

.input__heading label {
  cursor: pointer;
}

.input__heading-unit {
  margin: 0;
  margin-left: 6px;

  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: var(--color-gray);
}

.input__wrapper {
  display: flex;
  width: 80px;
  margin: 0;
}

.input__wrapper input {
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

.input__wrapper input::placeholder {
  color: var(--color-gray-darkest);

  transition: 0.3s ease;
  transition-property: color;
}

.input__wrapper input:hover,
.input__wrapper input:active,
.input__wrapper input:focus {
  border-color: var(--color-accent);
}

.input__wrapper input:hover::placeholder,
.input__wrapper input:active::placeholder {
  color: var(--color-text-black);
}

.input__wrapper input:focus::placeholder {
  color: transparent;
}

.visually-hidden {
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
