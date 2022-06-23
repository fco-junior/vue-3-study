<template>
    <div class="user">
        <h2> User </h2>
        <strong>ID: {{id}}</strong>
        <hr>
        <Button class="p-button" label="back" @click="backToHome"/>
    </div>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        backToHome() {
            this.$router.push('/');
        }
    }
}
</script>