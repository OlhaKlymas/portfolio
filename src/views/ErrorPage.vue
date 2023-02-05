<template>
<div class="error-message">
    <p>Page not found</p>
    <router-link to="/" class="btn">Home</router-link>
</div>
</template>

<script>
export default {
name: "ErrorPage"
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/errorPage.scss';
</style>