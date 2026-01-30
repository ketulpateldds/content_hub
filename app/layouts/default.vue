<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

</script>

<template>
    <div class="bg-[#0B0D12]">
        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>