<template>
  <div class="quotes">
    <Quote>
      <template #author>
        <h1>{{ quotes[index].author }}</h1>
      </template>

      <template #text>
        <p>{{ quotes[index].text }}</p>
      </template>

      <template #font>
        <h6>{{ quotes[index].font }}</h6>
      </template>
    </Quote>

    <span>
      <Button label="<" class="p-button-secondary p-button-raised" @click="number--" />
      <Button label=">" class="p-button-secondary p-button-raised" @click="number++" />
    </span>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: { Quote },
  data() {
    return {
      number: 0,
      quotes: [
        {
          font: "Jornal do Empreendedor",
          text: "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          author: "Margaret Mead",
        },
        {
          font: "Frases de Mãe",
          text: "Isso não é um quarto, é um chiqueiro.",
          author: "Roberta",
        },
        {
          font: "Frases de Pai",
          text: "Vou contar até 3! 1, 2, 2...",
          author: "Gustavo",
        }
      ]
    };
  },
  computed: {
    index() {
      return Math.abs(this.number % this.quotes.length);
    }
  }
};
</script>
