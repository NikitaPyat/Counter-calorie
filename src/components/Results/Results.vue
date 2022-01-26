<template>
    <section id="result" class="counter__result" hidden>
          <h2 class="heading">
            Ваша норма калорий
          </h2>
          <ul class="counter__result-list">
            <li v-for="result in results" :key="result" class="counter__result-item">
              <h3>
                <span id="calories-norm">{{calories[result.id].toFixed(0)}}</span> ккал
              </h3>
              <p>
                {{ result.name }}
              </p>
            </li>
          </ul>
        </section>
</template>

<script>
export default {
  props: ['isVisibleResult', 'calories'],

  data() {
    return {
      results: [
        {
          id: "maintenance",
          name: "поддержание веса"
        },
        {
          id: "less",
          name: "снижение веса"
        },
        {
          id: "more",
          name: "набор веса"
        }
      ]
    }
  },

  watch: {
    isVisibleResult(value) {
      document.getElementById('result').hidden = value ? false : true
    }
  }
}
</script>

<style scoped>

.counter__result {
  padding: 32px 32px;

  background-color: var(--color-background-main);

  opacity: 1;
  visibility: visible;
  border-radius: 12px;

  transition: 0.6s ease;
  transition-property: opacity, visibility;
}

.counter__result--hidden {
  opacity: 0;
  visibility: hidden;
}

.counter__result > .heading {
  margin-bottom: 12px;

  color: var(--color-accent);
}

.counter__result-list {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;
}

.counter__result-item {
  max-width: 124px;
}

.counter__result-item h3 {
  margin: 0;
  margin-bottom: 2px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}

.counter__result-item p {
  margin: 0;

  color: var(--color-gray-dark);
}

</style>