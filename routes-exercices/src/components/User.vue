<template>
    <div class="user">
        <h2> User </h2>
        <Button class="p-button" label="back" @click="backToHome"/>
    </div>
</template>

<script>
export default {
    methods: {
        backToHome() {
            this.$router.push('/');
        }
    }
}
</script>