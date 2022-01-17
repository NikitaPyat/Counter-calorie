<template>
    <fieldset class="form__item">
            <legend class="heading">
              Физическая активность
            </legend>
            <ul class="radios-group">
              <li class="radio" v-for="level in levels" :key="level">
                <div class="radio__wrapper">
                  <input :id="level.id" name="activity" v-on:input="ChangeActivity(level.id)" type="radio" required>
                  <label :for="level.id">
                    {{ level.name }}
                  </label>
                </div>
                <p class="radio__description">
                  {{ level.description }}
                </p>
              </li>
            </ul>
          </fieldset>
</template>

<script>

export default ({
  emits: ['changeActivity'],
  props: ['clean'],

  data() {
    return {
      levels: [
        {
          id: "min",
          name: "Минимальная",
          description: "Сидячая работа и нет физических нагрузок"
        },
        {
          id: "low",
          name: "Низкая",
          description: "Редкие, нерегулярные тренировки, активность в быту"
        },
        {
          id: "medium",
          name: "Средняя",
          description: "Тренировки 3-5 раз в неделю"
        },
        {
          id: "high",
          name: "Высокая",
          description: "Тренировки 6-7 раз в неделю"
        },
        {
          id: "max",
          name: "Очень высокая",
          description: "Больше 6 тренировок в неделю и физическая работа"
        }
      ],
      chosenLevel: "min"
    }
  },
  mounted: function() {
    document.getElementById('min').checked = true
  },

  watch: {
    clean(value) {
      if(value) {
        document.getElementById('min').checked = true
        this.$emit('changeGender', 'male')
      }
    }
  },

  methods: {
    ChangeActivity(id) {
      this.$emit('changeActivity', id)
    }
  }
})
</script>

<style scoped>
.form__item {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.form__item > .heading {
  margin-bottom: 16px;
}

.form__item:last-child {
  margin-bottom: 0;
}

.heading {
  margin: 0;
  text-align: left;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.radio__wrapper {
  width: fit-content;
}

.radio__wrapper label {
  display: flex;
  align-items: flex-start;

  font-size: 20px;
  line-height: 26px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, box-shadow;
}

.radio__wrapper input[type="radio"] {
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

.radio__wrapper label::before {
  content: "";

  flex-shrink: 0;
  display: block;
  width: 32px;
  height: 24px;
  margin-top: 1px;
  padding-right: 8px;

  background-image: url("../assets/icon-radio-empty.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 24px 24px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: background;
}

.radio__wrapper input[type="radio"]:checked + label::before {
  background-image: url("../assets/icon-radio-checked.svg");
}

.radio__wrapper label:hover,
.radio__wrapper input[type="radio"]:checked + label {
  color: var(--color-accent);
}

.radios-group {
  max-width: 94%;
  margin: 0;
  padding: 0;

  list-style: none;
}

.radios-group .radio {
  margin-bottom: 15px;
}

.radios-group .radio:last-child {
  margin-bottom: 0;
}

.radio__description {
  margin: 0;
  margin-left: 32px;
  margin-top: 3px;
  padding-bottom: 2px;
  text-align: left;

  color: var(--color-gray-light);
}
</style>
