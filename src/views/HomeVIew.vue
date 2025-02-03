<script setup>
import Hero from '../components/Hero.vue';
import HomeCard from '../components/HomeCard.vue';
import JobListings from '../components/JobListings.vue';


</script>


<template>
    <!-- Hero -->
    <Hero />

    <!-- Developers and Employers -->
    <HomeCard />

    <!-- Browse Jobs -->
    <JobListings :limit="3" :show-button="true" />
</template>


<style></style>