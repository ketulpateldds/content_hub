<script setup lang="ts">
const filters = ['All Categories', 'A - Z', 'Most Popular', 'Recently Updated']
const activeFilter = ref('All Categories')

const categories = [
    {
        title: 'Entertainment',
        count: '27 Items',
        desc: 'Discover a world of movies, series, and immersive stories designed to captivate and inspire.',
        image: '/assets/images/categories1.png'
    },
    {
        title: 'Education',
        count: '27 Items',
        desc: 'Explore expertly curated courses, tutorials, and knowledge resources for continuous learning.',
        image: '/assets/images/categories2.png'
    },
    {
        title: 'Health & Wellness',
        count: '27 Items',
        desc: 'Access content focused on fitness, mindfulness, and personal well-being to support a balanced life.',
        image: '/assets/images/categories3.png'
    },
    {
        title: 'Technology',
        count: '27 Items',
        desc: 'Explore expertly curated courses, tutorials, and knowledge resources for continuous learning.',
        image: '/assets/images/categories4.png'
    },
    {
        title: 'Innovation',
        count: '27 Items',
        desc: 'Creative thinking, breakthrough ideas, and forward-looking experiences.',
        image: '/assets/images/categories5.png'
    },
    {
        title: 'Business & Strategy',
        count: '27 Items',
        desc: 'Expert perspectives on leadership, growth, and modern business practices.',
        image: '/assets/images/categories6.png'
    },
    {
        title: 'Lifestyle & Culture',
        count: '27 Items',
        desc: 'Explore stories and experiences that celebrate modern living, creativity, and cultural expression.',
        image: '/assets/images/categories7.png'
    },
    {
        title: 'Science & Discovery',
        count: '27 Items',
        desc: 'Dive into fascinating explorations of science, research, and discoveries shaping our understanding.',
        image: '/assets/images/categories8.png'
    },
]
</script>

<template>
    <div class="min-h-screen bg-[#0B0D12] text-[#FFFFFF]">

        <!-- Hero Section -->
        <section class="relative h-[632px] w-full flex flex-col"
            style="background-image: url('/assets/images/categories-bg.png'); background-size: cover; background-position: center;">
            <div class="absolute top-[280px] left-[96px] z-10">
                <p
                    class="font-['Instrument_Sans'] font-semibold text-sm tracking-[5%] leading-[100%] uppercase text-[#00A8AB] mb-[14px]">
                    Discover content by topic, interest, and experience</p>
                <h1
                    class="font-['Geist'] font-bold text-[76px] leading-[100%] mb-[30px] bg-gradient-to-r from-[#FFFFFFE5] to-[#FFFFFF99] bg-clip-text text-transparent">
                    Browse Categories</h1>
                <p class="font-['Instrument_Sans'] font-normal text-lg leading-[100%]">Explore a wide range of curated
                    categories, each offering
                    premium content designed to inform, inspire, and entertain.</p>
            </div>
        </section>

        <!-- Filters -->
        <section class="max-w-[1320px] mx-auto pt-[50px] pb-10 flex justify-center">
            <div class="flex gap-6 h-[50px]">
                <button v-for="filter in filters" :key="filter"
                    class="rounded-[6px] transition-colors border border-white/10"
                    :class="activeFilter === filter ? 'bg-[#00A8AB] text-white py-[14px] pl-5 pr-[18px]' : 'bg-[#1C1F26] py-[14px] px-[30px]'">
                    <span class="font-['Instrument_Sans'] font-semibold text-sm leading-[18px] align-middle">{{ filter
                    }}</span>
                </button>
            </div>
        </section>

        <!-- Category Grid -->
        <section class="max-w-[1320px] mx-auto mb-[50px]">
            <div class="grid grid-cols-4 gap-6">
                <div v-for="cat in categories" :key="cat.title"
                    class="group relative h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer">
                    <img :src="cat.image" :alt="cat.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">

                    <div
                        class="px-[14px] pb-[18px] absolute inset-0 bg-gradient-to-t from-black/90 from-20% via-black/40 to-transparent flex flex-col justify-end">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[13px] leading-[140%] tracking-[0%] mb-[5px]">
                            {{ cat.count }}</span>
                        <h3 class="text-xl font-['Geist'] font-semibold leading-[100%] tracking-[0%] mb-[10px]">
                            {{ cat.title }}</h3>
                        <p
                            class="font-['Instrument_Sans'] font-normal text-[13px] leading-[140%] tracking-[0%] line-clamp-2 text-[#B8BDC7]">
                            {{ cat.desc }}</p>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center items-center gap-10 mt-[50px]">
                <button class="w-[46px] h-[46px] flex items-center justify-center rounded-[10px] bg-[#1C1F26]">
                    <i class="ri-arrow-left-line text-xl"></i>
                </button>
                <div class="flex items-center gap-[5px]">
                    <button class="w-[46px] h-[46px] flex items-center justify-center rounded-[6px] bg-[#00A8AB]">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">1</span>
                    </button>
                    <button class="w-[46px] h-[46px] flex items-center justify-center rounded-[6px]">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">2</span>
                    </button>
                    <button class="w-[46px] h-[46px] flex items-center justify-center rounded-[6px]">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">3</span>
                    </button>
                </div>
                <button class="w-[46px] h-[46px] flex items-center justify-center rounded-[10px] bg-[#1C1F26]">
                    <i class="ri-arrow-right-line text-xl"></i>
                </button>
            </div>
        </section>

        <div class="w-[1320px] h-[1px] bg-[#1C1F26] mx-auto mb-[50px]"></div>

        <!-- Promo Banner -->
        <section class="max-w-[1320px] mx-auto mb-20">
            <div class="relative rounded-[20px] overflow-hidden h-[401px] flex items-center"
                style="background-image: url('/assets/images/promo-banner2.png'); background-size: cover; background-position: center;">
                <div class="pl-[60px] py-[100px] flex flex-col justify-center relative z-10 max-w-[738px]">
                    <h2 class="font-['Geist'] text-[40px] font-semibold leading-[130%] mb-[10px]">Discover Content <br>
                        Across Every Category</h2>
                    <p class="text-[#B8BDC7] font-['Instrument_Sans'] text-lg font-normal leading-[160%] tracking-[0%]">
                        Our categories are thoughtfully organized to help you quickly find content that matches your
                        interests. From entertainment and education to technology and wellness, each category offers a
                        curated collection of high-quality experiences.
                    </p>
                </div>
            </div>
        </section>

        <div class="h-10"></div>
    </div>
</template>