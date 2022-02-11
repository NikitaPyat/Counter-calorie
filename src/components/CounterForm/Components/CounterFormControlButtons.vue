<template>
  <div class="counter-form-control-buttons">
    <button
      class="counter-form-control-buttons__submit-button"
      @click="this.$emit('show-result')"
      name="submit"
      type="submit"
      :disabled="!isResultBtnActive"
    >
      Рассчитать
    </button>
    <button
      class="counter-form-control-buttons__reset-button"
      name="resets"
      @click="$emit('clean')"
      type="resets"
      :disabled="!isCleanBtnActive"
    >
      <svg
        width="24"
        height="24"
        viewbox="0 0 24 24"
        fill="#FD3636"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
        />
      </svg>
      <span> Очистить поля и расчёт </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emit: ["show-result", "clean"],
  props: {
    isResultBtnActive: {
      type: Boolean,
      required: true,
    },
    isCleanBtnActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.counter-form-control-buttons {
  display: flex;
  align-items: center;
  margin-top: 42px;
}

.counter-form-control-buttons__submit-button {
  padding: 20px 24px;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  color: var(--color-text-white);

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: var(--color-accent);
  transition: 0.3s ease;
  transition-property: background;
}

.counter-form-control-buttons__submit-button:hover,
.counter-form-control-buttons__submit-button:focus {
  background-color: var(--color-accent-hover);
}

.counter-form-control-buttons__submit-button:active {
  background-color: var(--color-accent-active);
}

.counter-form-control-buttons__submit-button:disabled {
  cursor: not-allowed;
  background-color: var(--color-gray-lightest);
}

.counter-form-control-buttons__reset-button {
  display: inline-flex;
  align-items: center;
  margin: 0;
  margin-left: 24px;
  padding: 0;

  font-size: 20px;
  line-height: 16px;
  color: var(--color-warning);

  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.3s ease;
  transition-property: color, box-shadow;
}

.counter-form-control-buttons__reset-button svg {
  flex-shrink: 0;
  margin-right: 1px;

  fill: currentColor;
}

.counter-form-control-buttons__reset-button:hover,
.counter-form-control-buttons__reset-button:focus,
.counter-form-control-buttons__reset-button:active {
  color: var(--color-warning-hover);

  outline: none;
}

.counter-form-control-buttons__reset-button:disabled {
  color: var(--color-gray-lighter);

  cursor: not-allowed;
}
</style>