const CHARACTERISTICS_FORM = [
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
];

const ACTIVITY_INDEXES = [
    { name: "min", value: 1.2 },
    { name: "low", value: 1.375 },
    { name: "medium", value: 1.55 },
    { name: "high", value: 1.725 },
    { name: "max", value: 1.9 },
];

const RESULTS_FORM = [
    {
        id: "maintenance",
        name: "поддержание веса",
    },
    {
        id: "less",
        name: "снижение веса",
    },
    {
        id: "more",
        name: "набор веса",
    },
];

const ACTIVITY_LEVELS = [
    {
        id: "min",
        name: "Минимальная",
        description: "Сидячая работа и нет физических нагрузок",
    },
    {
        id: "low",
        name: "Низкая",
        description: "Редкие, нерегулярные тренировки, активность в быту",
    },
    {
        id: "medium",
        name: "Средняя",
        description: "Тренировки 3-5 раз в неделю",
    },
    {
        id: "high",
        name: "Высокая",
        description: "Тренировки 6-7 раз в неделю",
    },
    {
        id: "max",
        name: "Очень высокая",
        description: "Больше 6 тренировок в неделю и физическая работа",
    },
];

const GENDERS_FORM = [
    {
        id: "male",
        name: "Мужчина",
    },
    {
        id: "female",
        name: "Женщина",
    },
];

export { CHARACTERISTICS_FORM, ACTIVITY_INDEXES, RESULTS_FORM, ACTIVITY_LEVELS, GENDERS_FORM };