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
    <div class="min-h-screen bg-deep-black text-text-primary">
        <section class="relative h-[383px] md:h-[400px] lg:h-[632px] w-full flex flex-col"
            style="background-image: url('/assets/images/categories-bg.png'); background-size: cover; background-position: center;">
            <div class="absolute top-[166px] md:top-[180px] lg:top-[280px] left-4 md:left-6 lg:left-[96px] z-10">
                <p
                    class="font-['Instrument_Sans'] font-semibold text-[10px] md:text-xs lg:text-sm tracking-[0%] md:tracking-[5%] leading-[100%] uppercase text-accent mb-[10px] lg:mb-[14px]">
                    Discover content by topic, interest, and experience</p>
                <h1
                    class="font-['Geist'] font-bold text-[36px] md:text-[40px] lg:text-[76px] leading-[100%] mb-[10px] lg:mb-[30px] bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
                    Browse Categories</h1>
                <p
                    class="font-['Instrument_Sans'] font-normal text-sm md:text-base lg:text-lg leading-[160%] md:leading-[150%] lg:leading-[100%]">
                    Explore a wide range of curated categories, each offering premium content designed to inform,
                    inspire, and entertain.</p>
            </div>
        </section>

        <section
            class="max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto pt-[30px] md:pt-[50px] lg:pt-[50px] pb-[30px] lg:pb-10 md:flex md:justify-center overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <div
                class="flex flex-nowrap md:flex-wrap gap-[7px] md:gap-[14px] lg:gap-6 h-[36px] md:h-[45px] lg:h-[50px] px-4 md:px-0">
                <button v-for="filter in filters" :key="filter"
                    class="rounded-[6px] transition-colors text-center flex items-center justify-center border border-white/10 whitespace-nowrap flex-shrink-0"
                    :class="activeFilter === filter ? 'bg-accent text-white py-[14px] px-5 md:pl-5 md:pr-[18px]' : 'bg-slate-gray py-[14px] px-5 md:px-[30px]'">
                    <span
                        class="font-['Instrument_Sans'] font-semibold text-xs lg:text-sm leading-[18px] align-middle">{{
                            filter
                        }}</span>
                </button>
            </div>
        </section>

        <section class="max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto mb-10 lg:mb-[50px]">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-6">
                <CategoryCard v-for="cat in categories" :key="cat.title" :title="cat.title" :count="cat.count"
                    :desc="cat.desc" :image="cat.image" />
            </div>

            <div class="flex justify-center items-center gap-10 mt-10 lg:mt-[50px]">
                <button
                    class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[10px] bg-slate-gray">
                    <i class="ri-arrow-left-line text-xl"></i>
                </button>
                <div class="flex items-center gap-[5px]">
                    <button
                        class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[6px] bg-accent">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">1</span>
                    </button>
                    <button class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[6px]">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">2</span>
                    </button>
                    <button class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[6px]">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-[18px] leading-[145%] align-center">3</span>
                    </button>
                </div>
                <button
                    class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[10px] bg-slate-gray">
                    <i class="ri-arrow-right-line text-xl"></i>
                </button>
            </div>
        </section>

        <div class="max-w-mobile md:max-w-tablet lg:max-w-desktop h-[1px] bg-slate-gray mx-auto mb-[50px]"></div>

        <section class="max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto">
            <div class="relative rounded-[20px] overflow-hidden h-[500px] md:h-[308px] lg:h-[401px] flex items-end md:items-center justify-center md:justify-start"
                style="background-image: url('/assets/images/promo-banner2.png'); background-size: cover; background-position: center;">
                <div
                    class="pl-[14px] pr-[14px] md:pr-0 md:pl-[30px] lg:pl-[60px] py-10 md:py-[30px] lg:py-[100px] flex flex-col justify-center relative z-10 max-w-[480px] lg:max-w-[738px]">
                    <h2
                        class="font-['Geist'] text-[26px] md:text-[30px] lg:text-[40px] text-center md:text-left font-semibold leading-[130%] mb-[10px]">
                        Discover Content <br> Across Every Category</h2>
                    <p
                        class="text-text-secondary font-['Instrument_Sans'] text-center md:text-left text-xs lg:text-lg font-normal leading-[170%] lg:leading-[160%] tracking-[0%]">
                        Our categories are thoughtfully organized to help you quickly find content that matches your
                        interests. From entertainment and education to technology and wellness, each category offers a
                        curated collection of high-quality experiences.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>