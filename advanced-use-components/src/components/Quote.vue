<template>
  <div class="quote">
    <Card class="card">
      <template #title>
        <slot name="author">Author</slot>
      </template>
      <template #content>
        <slot name="text">Text</slot>
      </template>
      <template #footer>
        <slot name="font">Font</slot>
      </template>
    </Card>
  </div>
</template>

<script>
export default {};
</script>
