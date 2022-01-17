<template>
    <div class="form__item">
            <h2 class="heading">
              Пол
            </h2>
            <ul class="switcher">
              <li v-for="gender in genders" :key="gender" class="switcher__item">
                <input :id="gender.id" @click="ChangeGender(gender.id)" name="gender" type="radio" >
                <label :for="gender.id">
                  {{ gender.name }}
                </label>
              </li>
            </ul>
          </div>
</template>

<script>

export default ({
    emits: ['changeGender'],
    props: ['clean'],

    data() {
      return {
        genders: [
          {
            id: "male",
            name: "Мужчина"
          }, 
          {
            id: "female",
            name: "Женщина"
          }]
        }
    },
    
    watch: {
      clean(value) {
        if(value) {
          document.getElementById('male').checked = true
          this.$emit('changeGender', 'male')
        }
      }
    },

    mounted: function() {
      document.getElementById('male').checked = true
    },

    methods: {
      ChangeGender(newGender) {
        this.$emit('changeGender', newGender)
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

.heading {
  margin: 0;
  text-align: left;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 32px;
  line-height: 41px;
}

.switcher {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  border-radius: 4px;
  list-style: none;
}


.switcher__item {
  flex: 1 1 0;
}

.switcher__item + .switcher__item {
  margin-left: -1px;
}

.switcher__item:first-of-type label {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.switcher__item:last-of-type label {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.switcher__item:only-child label {
  border-radius: 4px;
}

.switcher__item label {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px;

  color: var(--color-text-black);

  user-select: none;
  cursor: pointer;
  border: solid 0.5px var(--color-accent);
  background-color: transparent;
  transition: 0.3s ease;
  transition-property: color, border, background, z-index, margin;
}

.switcher__item input[type="radio"] {
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

.switcher__item label:hover {
  z-index: 3;

  color: var(--color-accent);
}

.switcher__item input[type="radio"]:checked + label {
  z-index: 0;

  color: var(--color-text-white);

  border-color: transparent;
  background-color: var(--color-accent);
}

.switcher__item input[type="radio"]:checked + label:hover {
  color: var(--color-text-white);
}

</style>
