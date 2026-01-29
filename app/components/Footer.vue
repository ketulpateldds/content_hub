<script setup lang="ts">
const socialLinks = [
    { icon: 'ri-facebook-fill', href: '#' },
    { icon: 'ri-instagram-line', href: '#' },
    { icon: 'ri-youtube-fill', href: '#' },
]

const companyLinks = [
    { text: 'About Us', href: '#' },
    { text: 'How It Works', href: '#' },
]

const exploreLinks = [
    { text: 'Browse Categories', href: '#' },
    { text: 'Featured Content', href: '#' },
    { text: 'New Releases', href: '#' },
    { text: 'Trending', href: '#' },
]

const creatorLinks = [
    { text: 'Become a Creator', href: '#' },
    { text: 'Content Guidelines', href: '#' },
    { text: 'Creator Support', href: '#' },
]

const supportLinks = [
    { text: 'Help Center', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Cookie Policy', href: '#' },
]
</script>

<template>
    <footer class="bg-[#0B0D12] text-[#FFFFFF]">
        <div class="md:max-w-[768px] lg:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-0">

            <!-- Top Section -->
            <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-x-[162px] py-[50px] md:py-[70px] lg:py-20">

                <!-- Social Icons (Mobile/Tablet: Top, Desktop: Right) -->
                <div class="flex justify-start md:justify-center lg:hidden pb-10">
                    <div class="flex gap-4">
                        <NuxtLink v-for="(social, index) in socialLinks" :key="index" :href="social.href"
                            class="w-[50px] h-[50px] rounded-full border border-[#FFFFFF1A] flex items-center justify-center hover:bg-white/10 transition-colors">
                            <i :class="[social.icon, 'text-2xl']"></i>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Links Grid -->
                <!-- Mobile: Creators(1), Company(2), Explore(3), Support(4) -->
                <!-- Desktop: Company(1), Explore(2), Creators(3), Support(4) -->
                <div
                    class="grid grid-cols-2 gap-y-10 md:gap-y-0 md:flex md:flex-row md:items-start md:w-fit md:mx-auto lg:mx-0 md:gap-x-[68px] lg:gap-x-[163px]">

                    <!-- Company -->
                    <div class="flex flex-col order-2 lg:order-1">
                        <h3 class="font-[Geist] font-semibold text-base uppercase leading-4 mb-5">Company</h3>
                        <NuxtLink v-for="link in companyLinks" :key="link.text" :href="link.href"
                            class="font-['Instrument_Sans'] text-sm font-normal leading-6 text-[#FFFFFFCC] mb-2">
                            {{ link.text }}</NuxtLink>
                    </div>

                    <!-- Explore -->
                    <div class="flex flex-col order-3 lg:order-2">
                        <h3 class="font-[Geist] font-semibold text-base uppercase leading-4 mb-5">Explore</h3>
                        <a v-for="link in exploreLinks" :key="link.text" :href="link.href"
                            class="font-['Instrument_Sans'] text-sm font-normal leading-6 text-[#FFFFFFCC] mb-2">{{
                                link.text }}</a>
                    </div>

                    <!-- Creators -->
                    <div class="flex flex-col order-1 lg:order-3">
                        <h3 class="font-[Geist] font-semibold text-base uppercase leading-4 mb-5">Creators
                        </h3>
                        <a v-for="link in creatorLinks" :key="link.text" :href="link.href"
                            class="font-['Instrument_Sans'] text-sm font-normal leading-6 text-[#FFFFFFCC] mb-2">{{
                                link.text }}</a>
                    </div>

                    <!-- Support -->
                    <div class="flex flex-col order-4 lg:order-4">
                        <h3 class="font-[Geist] font-semibold text-base uppercase leading-4 mb-5">Support &
                            Legal</h3>
                        <a v-for="link in supportLinks" :key="link.text" :href="link.href"
                            class="font-['Instrument_Sans'] text-sm font-normal leading-6 text-[#FFFFFFCC] mb-2">{{
                                link.text }}</a>
                    </div>
                </div>

                <!-- Social Icons (Desktop: Right)-->
                <div class="hidden lg:flex lg:items-start">
                    <div class="flex gap-[14px]">
                        <a v-for="(social, index) in socialLinks" :key="index" :href="social.href"
                            class="w-[50px] h-[50px] rounded-full border border-[#FFFFFF1A] flex items-center justify-center hover:bg-white/10 transition-colors">
                            <i :class="[social.icon, 'text-2xl']"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div
                class="border-t border-[#1C1F26] py-[30px] md:py-5 lg:py-[25px] flex flex-col md:flex-row items-center justify-between gap-4">
                <p
                    class="font-['Instrument_Sans'] font-normal text-xs lg:text-sm leading-[170%] lg:leading-[160%] tracking-[-2%]">
                    © 2026 ContentHub. All rights reserved.</p>

                <button class="hidden md:flex items-center h-5 gap-[7px]">
                    <i class="ri-translate-2 text-lg lg:w-[17.41666603088379px] lg:h-[15.833333015441895px]"></i>
                    <span class="font-['Instrument_Sans'] font-medium text-xs lg:text-sm leading-5">Language</span>
                    <span class="font-['Instrument_Sans'] font-normal text-xs lg:text-sm leading-5">United States
                        (EN)</span>
                </button>
            </div>
        </div>
    </footer>
</template>