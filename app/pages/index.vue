<script setup lang="ts">
import Footer from '~/components/Footer.vue'

const categories = [
    { title: 'Entertainment', image: '/assets/images/categories1.png', desc: 'Discover a world of movies, series, and immersive stories designed to captivate and inspire.' },
    {
        title: 'Education', image: '/assets/images/categories2.png', desc: 'Explore expertly curated courses, tutorials, and knowledge resources for continuous learning.'
    },
    { title: 'Health & Wellness', image: '/assets/images/categories3.png', desc: 'Access content focused on fitness, mindfulness, and personal well-being to support a balanced life.' },
    {
        title: 'Technology', image: '/assets/images/categories4.png', desc: 'Explore expertly curated courses, tutorials, and knowledge resources for continuous learning.'
    },
]

const releases = [
    { title: 'The Next Digital Era', tag: 'Technology', image: '/assets/images/new-releases1.png', desc: 'An in-depth look at how modern technology is reshaping the way we experience content and entertainment.' },
    { title: 'Learning Without Limits', tag: 'Education', image: '/assets/images/new-releases2.png', desc: 'Discover innovative approaches to education and personal growth in a connected digital world.' },
    { title: 'The Balance Project', tag: 'Health & Wellness', image: '/assets/images/new-releases3.png', desc: 'A thoughtfully curated experience focused on health, wellness, and achieving everyday balance.' },
    { title: 'Inside Tomorrow', tag: 'Innovation', image: '/assets/images/new-releases4.png', desc: 'Explore breakthrough ideas, creative thinking, and the trends shaping what comes next.' },
]

const topPicks = [
    { title: 'Midnight Stories', tag: 'Entertainment', image: '/assets/images/top-picks1.png', desc: 'A captivating collection of cinematic tales that blend emotion, mystery, and unforgettable storytelling.' },
    { title: 'Digital Frontiers', tag: 'Technology', image: '/assets/images/top-picks2.png', desc: 'Explore how emerging technologies are transforming creativity, business, and everyday life.' },
    { title: 'Morning Tomorrow', tag: 'Education', image: '/assets/images/top-picks3.png', desc: 'A powerful learning experience designed to help you build the skills needed for the future.' },
    {
        title: 'Mind & Motion', tag: 'Health & Wellness', image: '/assets/images/top-picks4.png', desc: 'An inspiring journey into physical fitness, mental clarity, and holistic well- being.'
    },
]

const faqs = ref([
    { question: 'What is this platform?', answer: 'This platform is a curated digital space designed to showcase premium content across multiple categories, including entertainment, education, technology, and wellness all in one seamless experience.', isOpen: true },
    { question: 'How is the content selected?', answer: 'Our team of experts hand-picks content based on quality, relevance, and user ratings.', isOpen: false },
    { question: 'Do I need to create an account?', answer: 'You can browse content freely, but creating an account allows you to save favorites and get personalized recommendations.', isOpen: false },
    { question: 'Can I upload or submit my own content?', answer: 'Yes! We encourage creator submissions. Check our contribution guidelines for more details.', isOpen: false },
    { question: 'Is the platform available in multiple languages?', answer: 'Currently English only, but we are working on adding multi-language support soon.', isOpen: false },
    { question: 'How often is new content added?', answer: 'We update our catalog daily with fresh new releases and timeless classics.', isOpen: false },
])

const toggleFaq = (index: number) => {
    faqs.value.forEach((faq, i) => {
        if (i === index) faq.isOpen = !faq.isOpen
        else faq.isOpen = false
    })
}
</script>

<template>
    <div class="min-h-screen bg-[#0B0D12] text-[#FFFFFF] font-['Instrument_Sans'] overflow-x-hidden">
        <!-- Hero Section -->
        <section class="relative h-[600px] lg:h-[900px] w-full flex justify-center"
            style="background-image: url('/assets/home-bg.png'); background-size: cover; background-position: center;">

            <div class="absolute top-[210px] lg:top-[230px] z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <h1
                    class="font-['Geist'] font-bold text-[40px] lg:text-[76px] leading-[100%] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60 mb-[10px] lg:mb-[30px] mx-auto">
                    Discover <br /> Amazing Content
                </h1>
                <p
                    class="font-['Instrument_Sans'] max-w-[465px] lg:max-w-[695px] font-normal text-[16px] lg:text-[18px] leading-[150%] lg:leading-[100%] tracking-normal text-center text-white mb-[30px] mx-auto">
                    A cinematic space built to showcase the world's most compelling digital experiences.
                </p>
                <div class="flex items-center justify-center h-[50px] gap-[14px] lg:gap-6">
                    <button
                        class="px-[30px] py-[14px] bg-[#00A8AB] hover:bg-[#00A59D] text-[#FFFFFF] rounded-[6px] transition-colors flex items-center gap-2">
                        <span class="font-['Instrument_Sans'] text-sm font-semibold leading-[18px]">View</span> <i
                            class="ri-arrow-right-s-line text-[18px]"></i>
                    </button>
                    <button
                        class="px-[30px] py-[14px] bg-[#1C1F26] hover:bg-[#1C1F26]/80 text-[#FFFFFF] font-semibold font-['Instrument_Sans'] text-sm leading-[18px] rounded-[6px] transition-colors">
                        More Info
                    </button>
                </div>
            </div>

            <div class="absolute bottom-[100px] left-1/2 -translate-x-1/2 animate-bounce">
                <i class="ri-mouse-line text-2xl text-white/50"></i>
            </div>
        </section>

        <!-- Featured Categories -->
        <section class="py-[50px] mx-auto max-w-[1320px]">
            <div class="mb-10">
                <h2 class="font-['Geist'] text-[40px] font-semibold leading-[100%] mb-3">Featured Categories</h2>
                <p class="text-[#B8BDC7] text-[18px] font-['Instrument_Sans'] font-normal leading-[100%]">Explore a
                    curated selection of our most popular and engaging categories,
                    designed to help you discover content that matters most.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="cat in categories" :key="cat.title"
                    class="group relative w-full h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer">
                    <img :src="cat.image" :alt="cat.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent px-[14px] pb-[18px] flex flex-col justify-end">
                        <h3 class="text-xl font-semibold font-['Geist'] leading-[100%] mb-[10px]">{{ cat.title }}</h3>
                        <p
                            class="text-[13px] font-['Instrument_Sans'] font-normal line-clamp-2 leading-[140%] text-[#B8BDC7]">
                            {{
                                cat.desc }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 flex justify-center">
                <button
                    class="px-5 py-[14px] h-[50px] bg-[#00A8AB] hover:bg-[#00A8AB]/80 rounded-[6px] cursor-pointer transition-colors">
                    <span class="text-[14px] font-semibold font-['Instrument_Sans'] leading-[18px]">View All
                        Categories</span>
                </button>
            </div>
        </section>

        <div class="bg-[#1C1F26] mx-auto max-w-[1320px] h-[1px]">
        </div>

        <!-- New Releases -->
        <section class="py-[50px] mx-auto max-w-[1320px]">
            <div class="flex items-center justify-between mb-10">
                <div>
                    <h2 class="font-['Geist'] text-[40px] font-semibold leading-[100%] mb-3">New Releases</h2>
                    <p class="text-[#B8BDC7] text-[18px] font-['Instrument_Sans'] font-normal leading-[100%]">Discover
                        the latest additions to the platform, featuring fresh content
                        added by our editors and administrators.
                    </p>
                </div>
                <div class="flex gap-[10px]">
                    <button class="bg-[#1C1F26] w-12 h-12 rounded-[10px]">
                        <i class="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button class="w-12 h-12 rounded-[10px] bg-[#00A8AB]">
                        <i class="ri-arrow-right-line text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in releases" :key="item.title" class="group cursor-pointer">
                    <div
                        class="relative w-full h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer">
                        <div
                            class="absolute top-5 left-5 h-[27px] px-[7px] py-[5px] flex items-center justify-center bg-[#D4AF37] rounded-[5px]">
                            <span class="text-xs font-semibold font-['Instrument_Sans'] leading-[140%]">{{ item.tag
                            }}</span>
                        </div>
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent px-[14px] pb-[18px] flex flex-col justify-end">
                            <h3 class="text-xl font-semibold font-['Geist'] leading-[100%] mb-[10px]">{{ item.title }}
                            </h3>
                            <p
                                class="text-[13px] font-['Instrument_Sans'] font-normal line-clamp-2 leading-[140%] text-[#B8BDC7]">
                                {{
                                    item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="bg-[#1C1F26] mx-auto max-w-[1320px] h-[1px]">
        </div>

        <!-- Top Picks -->
        <section class="py-[50px] mx-auto max-w-[1320px]">
            <div class="flex items-center justify-between mb-10">
                <div>
                    <h2 class="font-['Geist'] text-[40px] font-semibold leading-[100%] mb-3">Top Picks</h2>
                    <p class="text-[#B8BDC7] text-[18px] font-['Instrument_Sans'] font-normal leading-[100%]">Discover
                        the content everyone is talking about, curated to deliver the very
                        best of the platform.
                    </p>
                </div>
                <div class="flex gap-[10px]">
                    <button class="bg-[#1C1F26] w-12 h-12 rounded-[10px]">
                        <i class="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button class="w-12 h-12 rounded-[10px] bg-[#00A8AB]">
                        <i class="ri-arrow-right-line text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in topPicks" :key="item.title" class="group cursor-pointer">
                    <div
                        class="relative w-full h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer">
                        <div
                            class="absolute top-5 left-5 h-[27px] px-[7px] py-[5px] flex items-center justify-center bg-[#D4AF37] rounded-[5px]">
                            <span class="text-xs font-semibold font-['Instrument_Sans'] leading-[140%]">{{ item.tag
                            }}</span>
                        </div>
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent px-[14px] pb-[18px] flex flex-col justify-end">
                            <h3 class="text-xl font-semibold font-['Geist'] leading-[100%] mb-[10px]">{{ item.title }}
                            </h3>
                            <p
                                class="text-[13px] font-['Instrument_Sans'] font-normal line-clamp-2 leading-[140%] text-[#B8BDC7]">
                                {{
                                    item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="bg-[#1C1F26] mx-auto max-w-[1320px] h-[1px]">
        </div>

        <!-- Promo Banner -->
        <section class="py-[50px] mx-auto max-w-[1320px]">
            <div class="relative rounded-2xl overflow-hidden h-[404px] flex items-center">
                <img src="/assets/images/promo-banner.png" class="absolute inset-0 w-full h-full object-cover"
                    alt="Promo">

                <div class="absolute left-0 ml-[60px] my-[110px] max-w-[413px]">
                    <h2 class="font-['Geist'] text-[40px] font-semibold leading-[130%] mb-[30px]">Experience the Best of
                        Our Platform</h2>
                    <button
                        class="h-[50px] flex items-center justify-center gap-2 rounded-[6px] pl-5 pr-[18px] py-[14px] bg-[#00A8AB]">
                        <span class="font-['Instrument_Sans'] font-semibold text-sm leading-[18px]">View All
                            Categories</span>
                        <i class="ri-arrow-right-s-line text-lg"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="bg-[#12141A] ">
            <div class="py-[50px] mx-auto max-w-[1320px] text-center">
                <h2 class="font-['Geist'] text-[40px] font-semibold leading-[100%] mb-3">Frequently Asked Questions</h2>
                <p class="text-[#B8BDC7] text-[18px] font-['Instrument_Sans'] font-normal leading-[100%]">Find quick
                    answers to common questions about our platform, content, and
                    how everything works.
                </p>

                <div class="pt-10 px-[112px] text-left">
                    <div v-for="(faq, index) in faqs" :key="index" class="border-b border-white/10">
                        <button @click="toggleFaq(index)" class="w-full flex items-center justify-between group"
                            :class="faq.isOpen ? 'pb-[10px] mt-[30px]' : 'my-[33px]'">
                            <span
                                class="font-['Geist'] font-normal text-[26px] leading-[40px] tracking-[-2%] group-hover:text-[#00C2B8] transition-colors">{{
                                    faq.question
                                }}</span>
                            <div class="w-[46px] h-[46px] border-[1px] text-[14px] rounded-full flex items-center justify-center transition-colors"
                                :class="faq.isOpen ? 'bg-[#00A8AB] border-[#00A8AB]' : 'border-[#FFFFFF1A]'">
                                <i :class="faq.isOpen ? 'ri-subtract-line' : 'ri-add-line'"></i>
                            </div>
                        </button>

                        <div v-show="faq.isOpen" :class="faq.isOpen ? 'mb-[30px]' : ''"
                            class="max-w-[984px] font-['Instrument_Sans'] font-normal text-[16px] leading-[150%] text-[#B8BDC7] animate-fade-in">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
