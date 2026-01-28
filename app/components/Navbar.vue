<script setup lang="ts">
import 'remixicon/fonts/remixicon.css'

const currentTab = ref('Home')
const isMenuOpen = ref(false)
</script>

<template>
    <nav
        class="fixed top-0 left-0 w-full z-50 h-[80px] border-b border-white/10 backdrop-blur-[50px] bg-white/10 flex items-center justify-between px-4 py-[18px] md:p-6 lg:py-[30px] lg:pl-24 lg:pr-20 text-white">

        <div class="flex items-center w-full md:w-auto justify-between md:justify-normal gap-4">
            <!-- Hamburger Menu -->
            <button
                class="lg:hidden w-[30px] h-[30px] md:w-[34px] md:h-[34px] flex items-center justify-center border border-white/10 rounded-[5px] overflow-hidden"
                @click="isMenuOpen = !isMenuOpen">
                <i class="ri-menu-line text-lg md:text-xl"></i>
            </button>

            <!-- Logo -->
            <div class="text-2xl font-bold tracking-wide flex items-center">
                <img src="/assets/logo.png" alt="ContentHub"
                    class="w-[153px] h-[14px] md:h-[18px] lg:h-5 object-contain">
            </div>

            <!-- search & translate -->
            <div class="md:hidden flex items-center gap-[10px] text-white/80">
                <button class="hover:text-white transition-colors">
                    <i class="ri-search-line text-lg w-5 h-5"></i>
                </button>
                <div class="flex items-center gap-[7px] cursor-pointer hover:text-white transition-colors text-sm">
                    <div>
                        <i class="ri-translate-2 text-lg w-5 h-5"></i>
                    </div>
                    <span class="hidden md:block leading-5 font-medium">Language</span>
                </div>
            </div>
        </div>

        <!-- Desktop Links -->
        <div class="hidden lg:flex items-center gap-[50px] text-sm font-medium">
            <NuxtLink to="/" @click="currentTab = 'Home'"
                class="flex items-center justify-center relative transition-colors"
                :class="currentTab === 'Home' ? 'text-white after:content-[\'\'] after:absolute after:top-[47px] after:left-1/2 after:-translate-x-1/2 after:w-[40px] after:h-[2px] after:bg-white' : 'text-white/60 hover:text-white'">
                Home</NuxtLink>
            <NuxtLink to="/" @click="currentTab = 'Categories'"
                class="flex items-center justify-center relative transition-colors"
                :class="currentTab === 'Categories' ? 'text-white after:content-[\'\'] after:absolute after:top-[47px] after:left-1/2 after:-translate-x-1/2 after:w-[72px] after:h-[2px] after:bg-white' : 'text-white/60 hover:text-white'">
                Categories</NuxtLink>
            <NuxtLink to="/" @click="currentTab = 'About'"
                class="flex items-center justify-center relative transition-colors"
                :class="currentTab === 'About' ? 'text-white after:content-[\'\'] after:absolute after:top-[47px] after:left-1/2 after:-translate-x-1/2 after:w-[40px] after:h-[2px] after:bg-white' : 'text-white/60 hover:text-white'">
                About</NuxtLink>
        </div>

        <div class="hidden md:flex items-center gap-5 text-white/80">
            <button class="hover:text-white transition-colors">
                <i class="ri-search-line text-xl w-5 h-5"></i>
            </button>
            <div class="flex items-center gap-[7px] cursor-pointer hover:text-white transition-colors text-sm">
                <div>
                    <i class="ri-translate-2 text-xl w-5 h-5"></i>
                </div>
                <span class="hidden md:block leading-5 font-medium">Language</span>
            </div>
        </div>
    </nav>
    <!-- Mobile/Tablet Menu Overlay -->
    <div v-if="isMenuOpen"
        class="absolute top-[70px] left-6 right-6 z-50 h-[160px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-[6px] flex flex-col items-center justify-center gap-[10px] lg:hidden">
        <NuxtLink to="/" @click="currentTab = 'Home'; isMenuOpen = false" class="py-[10px] font-medium text-sm"
            :class="currentTab === 'Home' ? 'text-white' : 'text-white/60 hover:text-white'">Home
        </NuxtLink>
        <NuxtLink to="/" @click="currentTab = 'Categories'; isMenuOpen = false" class="py-[10px] font-medium text-sm"
            :class="currentTab === 'Categories' ? 'text-white' : 'text-white/60 hover:text-white'">Categories
        </NuxtLink>
        <NuxtLink to="/" @click="currentTab = 'About'; isMenuOpen = false" class="py-[10px] font-medium text-sm"
            :class="currentTab === 'About' ? 'text-white' : 'text-white/60 hover:text-white'">About
        </NuxtLink>
    </div>
</template>