<script setup lang="ts">
// Get the content ID from URL query parameter
const route = useRoute();
const contentId = computed(() => route.query.id);

// Mock content data - this will be replaced with API call later
// Structure designed to match future API response
const contentData = ref({
    id: contentId.value,
    title: "Mindful Meditation Practices",
    subtitle: "Transform your daily routine with powerful meditation techniques.",
    category: "Health & Wellness",
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

// Top picks - related content recommendations
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
</script>

<template>
    <div class="min-h-screen bg-[#0B0D12] text-[#FFFFFF]">
        <!-- Hero Section -->
        <section class="relative h-[632px] w-full flex flex-col"
            style="
        background-image: url('/assets/images/content-bg.png'); background-size: cover; background-position: top center;">
            <div class="absolute top-[254px] left-[96px] z-10 max-w-[1080px]">
                <button @click="navigateTo('/singlecategories')"
                    class="flex items-center gap-[10px] text-[#00A8AB] mb-[25px] hover:text-[#00989B] transition-colors">
                    <i class="ri-arrow-left-line text-2xl"></i>
                    <span
                        class="font-['Instrument_Sans'] font-semibold text-sm leading-[100%] tracking-[5%] uppercase">Back
                        to Categories</span>
                </button>
                <span
                    class="inline-block h-[27px] rounded-[5px] py-[5px] px-[7px] bg-[#D4AF37] font-['Instrument_Sans'] font-semibold text-xs leading-[140%] mb-[10px]">Health
                    & Wellness</span>
                <h1 class="font-['Geist'] font-bold text-[76px] leading-[100%] mb-[30px] bg-gradient-to-r from-[#FFFFFFE5]
                to-[#FFFFFF99] bg-clip-text text-transparent">
                    {{ contentData.title }}
                </h1>
                <p class="font-['Instrument_Sans'] font-normal text-lg leading-[100%]">
                    {{ contentData.subtitle }}
                </p>
            </div>
        </section>

        <!-- Content Body Section -->
        <section class="max-w-[1320px] mx-auto py-[50px]">
            <div class="max-w-[1096px] mx-auto">
                <!-- Content Paragraphs -->
                <div v-for="(paragraph, index) in contentData.content.paragraphs.slice(0, 3)" :key="index"
                    class="max-w-[872px] mx-auto">
                    <p class="mb-5 font-['Instrument_Sans'] font-normal text-lg leading-[160%] text-[#B8BDC7]">
                        {{ paragraph }}</p>
                </div>

                <!-- Main Content Image -->
                <div class="my-[50px] rounded-[20px] overflow-hidden">
                    <img :src="contentData.content.mainImage" alt="Content image"
                        class="w-full h-[500px] object-cover" />
                </div>

                <!-- Additional Content After Image -->
                <div v-for="(paragraph, index) in contentData.content.paragraphs.slice(3)" :key="index + 3"
                    class="max-w-[872px] mx-auto">
                    <p class="mb-5 font-['Instrument_Sans'] font-normal text-lg leading-[160%] text-[#B8BDC7]">
                        {{ paragraph }}
                    </p>
                </div>

                <!-- Tags Section -->
                <div class="max-w-[872px] mx-auto">
                    <h3 class="font-['Instrument_Sans'] font-semibold text-lg leading-[160%] mb-[10px]">
                        Tags
                    </h3>
                    <div class="flex flex-wrap gap-[5px]">
                        <span v-for="(tag, index) in contentData.tags" :key="index"
                            class="px-[7px] py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[10px] leading-[140%] bg-[#1C1F26]">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Top Picks Section -->
        <section class="bg-[#12141A] py-[50px]">
            <div class="max-w-[1320px] mx-auto">
                <div class="flex items-center justify-between mb-10">
                    <div>
                        <h2 class="font-['Geist'] font-semibold text-[40px] leading-[100%] mb-3">
                            Top Picks
                        </h2>
                        <p class="font-['Instrument_Sans'] font-normal text-lg leading-[100%] text-[#B8BDC7]">
                            You may also be interested in these related experiences.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <button
                            class="w-[46px] h-[46px] flex items-center justify-center rounded-[10px] bg-[#1C1F26] hover:bg-[#2C3039] transition-colors">
                            <i class="ri-arrow-left-line text-xl"></i>
                        </button>
                        <button
                            class="w-[46px] h-[46px] flex items-center justify-center rounded-[10px] bg-[#00A8AB] hover:bg-[#00989B] transition-colors">
                            <i class="ri-arrow-right-line text-xl"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-6">
                    <div v-for="item in topPicks" :key="item.id"
                        class="group relative h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer"
                        @click="navigateTo(`/singlecontent?id=${item.id}`)">
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        <div class="absolute top-[16px] left-[16px] flex gap-[5px] z-10">
                            <span v-for="badge in item.badges" :key="badge"
                                class="px-[7px] py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[10px] leading-[140%] uppercase bg-[#D4AF37]">
                                {{ badge }}
                            </span>
                        </div>

                        <div
                            class="px-[14px] pb-[18px] absolute inset-0 bg-gradient-to-t from-black/90 from-20% to-transparent flex flex-col justify-end">
                            <h3 class="text-xl font-['Geist'] font-semibold leading-[100%] mb-[10px]">
                                {{ item.title }}
                            </h3>
                            <p
                                class="font-['Instrument_Sans'] font-normal text-[13px] leading-[140%] line-clamp-2 text-[#B8BDC7]">
                                {{ item.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
