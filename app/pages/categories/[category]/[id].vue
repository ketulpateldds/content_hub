<script setup lang="ts">
const route = useRoute();
const contentId = computed(() => route.params.id);
const category = computed(() => route.params.category as string);

const toTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/And/g, '&');
};

const categoryTitle = computed(() => toTitle(category.value));

const contentData = ref({
    id: contentId.value,
    title: "Mindful Meditation Practices",
    subtitle: "Transform your daily routine with powerful meditation techniques.",
    category: categoryTitle.value,
    heroImage: "/assets/images/categories-bg2.png",
    content: {
        paragraphs: [
            "Discover the transformative power of mindful meditation through thoughtfully curated experiences designed to support inner calm and mindful presence. This collection explores a range of meditation techniques, from guided sessions to ambient soundscapes, helping you cultivate a deeper sense of awareness and well-being.",
            "Learn how modern meditation practices offer personal insights and proven pathways drawn from centuries of wisdom. Whether you're new to meditation or seeking to deepen your existing practice, this experience provides the tools needed to develop consistency and long-term growth. Nothing you cultivate is ever wasted—each practice builds upon the last.",
            "Whether you are new to meditation or seeking to deepen your existing practice, this experience provides the tools needed to develop consistency and long-term growth. Nothing you cultivate is ever wasted—each practice builds upon the last, and mindfulness becomes a natural part of your daily routine. Focus, find overall well-being.",
            "Discover the transformative power of mindful meditation through a thoughtfully curated experience designed to support mental clarity and emotional balance. This guide explores a range of meditation techniques aimed at reducing stress, improving focus, and fostering a deeper sense of calm in everyday life. Each approach is presented in a clear and accessible way, making it easy to understand and apply.",
            "Learn from experienced practitioners who share practical insights and proven methods drawn from real-world practice. The content emphasizes evidence-based techniques that help build awareness, resilience, and mindfulness, allowing you to better navigate the demands of modern life with greater ease and confidence.",
            "Whether you are new to meditation or seeking to deepen an existing practice, this experience provides the tools needed to develop a sustainable daily routine. Designed to fit seamlessly into your lifestyle, these practices encourage consistency and long-term growth, helping you cultivate inner peace, focus, and overall well-being.",
        ],
        mainImage: "/assets/images/content-main.png",
    },
    tags: [
        "meditation",
        "meditation",
        "meditation",
        "meditation",
        "meditation",
        "meditation",
        "meditation",
        "wellness",
        "mindfulness",
        "meditation",
        "mindfulness",
        "wellness",
        "meditation",
        "wellness",
        "mindfulness",
        "meditation",
        "mindfulness",
        "wellness",
        "meditation",
        "wellness",
    ],
});

const topPicks = [
    {
        id: 1,
        title: "The Next Digital Era",
        desc: "Exploring innovations in intelligent technology designed to transform daily life and work.",
        image: "/assets/images/new-releases1.png",
        badges: ["technology", "innovation"],
    },
    {
        id: 2,
        title: "Learning Without Limits",
        desc: "Discover flexible, accessible learning platforms designed for modern education.",
        image: "/assets/images/new-releases2.png",
        badges: ["education", "learning"],
    },
    {
        id: 3,
        title: "Fit for YOUR Project",
        desc: "Tailored fitness solutions designed to match your unique health and wellness goals.",
        image: "/assets/images/new-releases3.png",
        badges: ["fitness", "wellness"],
    },
    {
        id: 4,
        title: "Ideas Tomorrow",
        desc: "Innovative concepts shaping the future of creativity, technology, and human experience.",
        image: "/assets/images/new-releases4.png",
        badges: ["innovation", "creativity"],
    },
];

const topPicksContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    if (topPicksContainer.value) {
        topPicksContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (topPicksContainer.value) {
        topPicksContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
    }
};
</script>

<template>
    <div class="min-h-screen bg-deep-black text-white">
        <section class="relative h-[465px] md:h-[400px] lg:h-[632px] w-full flex flex-col"
            style="
        background-image: url('/assets/images/content-bg.png'); background-size: cover; background-position: top center;">
            <div
                class="absolute top-[162px] md:top-[171px] lg:top-[254px] left-4 md:left-6 lg:left-[96px] z-10 max-w-[1080px]">
                <button @click="navigateTo(`/categories/${category}`)"
                    class="flex items-center h-5 lg:h-6 gap-[5px] md:gap-[10px] text-accent mb-[10px] lg:mb-[25px] hover:text-accent/90 transition-colors">
                    <i class="ri-arrow-left-line text-lg md:text-xl lg:text-2xl"></i>
                    <span
                        class="font-['Instrument_Sans'] font-semibold text-[10px] md:text-sm leading-[100%] tracking-[0%] md:tracking-[5%] uppercase">Back
                        to Categories</span>
                </button>
                <span
                    class="inline-block h-6 lg:h-[27px] rounded-[5px] pt-[2px] pb-[2.5px] md:py-[5px] px-[5px] md:px-[7px] bg-[#D4AF37] font-['Instrument_Sans'] font-semibold text-[8px] md:text-[10px] lg:text-xs leading-[140%] mb-[10px]">Health
                    & Wellness</span>
                <h1 class="font-['Geist'] font-bold text-4xl md:text-[40px] lg:text-[76px] leading-[120%] md:leading-[100%] mb-[10px] lg:mb-[30px] bg-gradient-to-r from-[#FFFFFFE5]
                to-[#FFFFFF99] bg-clip-text text-transparent">
                    {{ contentData.title }}
                </h1>
                <p
                    class="font-['Instrument_Sans'] font-normal text-sm md:text-base lg:text-lg leading-[160%] md:leading-[150%] lg:leading-[100%]">
                    {{ contentData.subtitle }}
                </p>
            </div>
        </section>

        <section class="max-w-desktop mx-auto pt-[30px] md:pt-[50px] pb-10 lg:py-[50px]">
            <div class="mx-auto">
                <div v-for="(paragraph, index) in contentData.content.paragraphs.slice(0, 3)" :key="index"
                    class="max-w-mobile md:max-w-tablet lg:max-w-[872px] mx-auto">
                    <p
                        class="mb-[10px] md:mb-5 font-['Instrument_Sans'] font-normal text-base lg:text-lg leading-[160%] text-text-secondary">
                        {{ paragraph }}</p>
                </div>

                <div
                    class="w-[390px] md:w-[744px] lg:w-[1096px] mx-auto my-[30px] md:my-10 lg:my-[50px] rounded-[20px] overflow-hidden">
                    <img :src="contentData.content.mainImage" alt="Content image"
                        class="w-full h-[300px] md:h-[500px] object-cover" />
                </div>

                <div v-for="(paragraph, index) in contentData.content.paragraphs.slice(3)" :key="index + 3"
                    class="max-w-mobile md:max-w-tablet lg:max-w-[872px] mx-auto">
                    <p
                        class="mb-[10px] md:mb-5 font-['Instrument_Sans'] font-normal text-base lg:text-lg leading-[160%] text-text-secondary">
                        {{ paragraph }}
                    </p>
                </div>

                <div class="max-w-mobile md:max-w-tablet lg:max-w-[872px] mx-auto mt-[30px] md:mt-10">
                    <h3 class="font-['Instrument_Sans'] font-semibold text-lg leading-[160%] mb-[10px]">
                        Tags
                    </h3>
                    <div class="flex flex-wrap gap-[5px]">
                        <span v-for="(tag, index) in contentData.tags" :key="index"
                            class="px-[7px] py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[10px] leading-[140%] bg-slate-gray">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-soft-black pt-[30px] pb-10 md:py-10 lg:py-[50px]">
            <div class="max-w-desktop mx-auto">
                <div
                    class="hidden md:flex max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto items-center justify-between mb-[30px] lg:mb-10">
                    <div>
                        <h2
                            class="font-['Geist'] font-semibold text-[30px] lg:text-[40px] leading-[100%] mb-[5px] lg:mb-3">
                            Top Picks
                        </h2>
                        <p
                            class="font-['Instrument_Sans'] font-normal text-[14px] lg:text-lg leading-[150%] lg:leading-[100%] text-text-secondary">
                            You may also be interested in these related experiences.
                        </p>
                    </div>
                    <div class="flex gap-[10px] lg:gap-4">
                        <button @click="scrollLeft"
                            class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[10px] bg-slate-gray hover:bg-slate-gray/80 transition-colors">
                            <i class="ri-arrow-left-line text-xl"></i>
                        </button>
                        <button @click="scrollRight"
                            class="w-10 lg:w-[46px] h-10 lg:h-[46px] flex items-center justify-center rounded-[10px] bg-accent hover:bg-accent/90 transition-colors">
                            <i class="ri-arrow-right-line text-xl"></i>
                        </button>
                    </div>
                </div>

                <div class="max-w-mobile mx-auto flex items-center justify-between mb-5 md:hidden">
                    <div>
                        <h2 class="font-['Geist'] font-semibold text-xl leading-[150%]">
                            Featured Categories
                        </h2>
                        <p
                            class="font-['Instrument_Sans'] font-normal text-xs leading-[160%] line-clamp-1 text-text-secondary">
                            Explore a curated selection of our most popular and engaging categories, designed to help
                            you discover content that matters most.
                        </p>
                    </div>
                </div>

                <div ref="topPicksContainer"
                    class="pl-[14px] md:pl-6 lg:pl-0 flex lg:grid lg:grid-cols-4 gap-[14px] lg:gap-6 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                    <div v-for="item in topPicks" :key="item.id"
                        class="group relative w-[151px] md:w-[240px] lg:w-[312px] h-[200px] md:h-[269px] lg:h-[350px] rounded-[14px] ring-1 ring-slate-gray ring-inset overflow-hidden cursor-pointer flex-shrink-0"
                        @click="navigateTo(`/categories/${category}/${item.id}`)">
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        <div class="absolute top-[10px] lg:top-[16px] left-[10px] lg:left-[16px] flex gap-[5px] z-10">
                            <span v-for="badge in item.badges" :key="badge"
                                class="px-[5px] md:px-[7px] pt-[2px] pb-[2.5px] md:py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[8px] md:text-[10px] leading-[140%] uppercase bg-[#D4AF37]">
                                {{ badge }}
                            </span>
                        </div>

                        <div
                            class="px-[14px] pb-[14px] lg:pb-[18px] absolute inset-0 bg-gradient-to-t from-black/90 from-20% to-transparent flex flex-col justify-end">
                            <h3
                                class="text-sm md:text-base lg:text-xl font-['Geist'] line-clamp-1 md:line-clamp-none font-semibold leading-[100%] mb-[2px] md:mb-[5px] lg:mb-[10px]">
                                {{ item.title }}
                            </h3>
                            <p
                                class="font-['Instrument_Sans'] font-normal text-[10px] md:text-xs lg:text-[13px] leading-[130%] md:leading-[140%] line-clamp-2 text-text-secondary">
                                {{ item.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
