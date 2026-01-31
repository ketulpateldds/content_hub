<script setup lang="ts">
const route = useRoute();
const category = computed(() => route.params.category as string);
// Helper function to convert slug back to title
const toTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/And/g, '&');
};
const categoryTitle = computed(() => toTitle(category.value));

const filters = ["All", "New Releases", "Most Viewed", "Trending"];
const activeFilter = ref("All");

const featuredContent = [
    {
        id: 1,
        title: "The Next Robot Era",
        desc: "Exploring innovations in intelligent robotics designed to transform daily life, work, and society.",
        image: "/assets/images/new-releases1.png",
        badges: [],
    },
    {
        id: 2,
        title: "Learning Without Limits",
        desc: "Discover flexible, accessible learning platforms designed for modern education.",
        image: "/assets/images/new-releases2.png",
        badges: [],
    },
    {
        id: 3,
        title: "Fit for YOUR Project",
        desc: "Tailored fitness solutions designed to match your unique health and wellness goals.",
        image: "/assets/images/new-releases3.png",
        badges: [],
    },
    {
        id: 4,
        title: "Ideas Tomorrow",
        desc: "Innovative concepts shaping the future of creativity, technology, and human experience.",
        image: "/assets/images/new-releases4.png",
        badges: [],
    },
];
const allContent = [
    {
        id: 5,
        title: "The Next Robot Era",
        desc: "Exploring innovations in intelligent robotics designed to transform daily life, work, and society.",
        image: "/assets/images/new-releases1.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 6,
        title: "Learning Without Limits",
        desc: "Discover flexible, accessible learning platforms designed for modern education.",
        image: "/assets/images/new-releases2.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 7,
        title: "Fit for YOUR Project",
        desc: "Tailored fitness solutions designed to match your unique health and wellness goals.",
        image: "/assets/images/new-releases3.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 8,
        title: "Ideas Tomorrow",
        desc: "Innovative concepts shaping the future of creativity, technology, and human experience.",
        image: "/assets/images/new-releases4.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 9,
        title: "The Next Robot Era",
        desc: "Exploring innovations in intelligent robotics designed to transform daily life, work, and society.",
        image: "/assets/images/new-releases1.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 10,
        title: "Learning Without Limits",
        desc: "Discover flexible, accessible learning platforms designed for modern education.",
        image: "/assets/images/new-releases2.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 11,
        title: "Fit for YOUR Project",
        desc: "Tailored fitness solutions designed to match your unique health and wellness goals.",
        image: "/assets/images/new-releases3.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 12,
        title: "Ideas Tomorrow",
        desc: "Innovative concepts shaping the future of creativity, technology, and human experience.",
        image: "/assets/images/new-releases4.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 13,
        title: "The Next Robot Era",
        desc: "Exploring innovations in intelligent robotics designed to transform daily life, work, and society.",
        image: "/assets/images/new-releases1.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 14,
        title: "Learning Without Limits",
        desc: "Discover flexible, accessible learning platforms designed for modern education.",
        image: "/assets/images/new-releases2.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 15,
        title: "Fit for YOUR Project",
        desc: "Tailored fitness solutions designed to match your unique health and wellness goals.",
        image: "/assets/images/new-releases3.png",
        badges: ["meditation", "mindfulness"],
    },
    {
        id: 16,
        title: "Ideas Tomorrow",
        desc: "Innovative concepts shaping the future of creativity, technology, and human experience.",
        image: "/assets/images/new-releases4.png",
        badges: ["meditation", "mindfulness"],
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
    <div class="min-h-screen bg-[#0B0D12] text-[#FFFFFF]">
        <section class="relative h-[405px] mdh-[400px] lg:h-[632px] w-full flex flex-col" style="
        background-image: url('/assets/images/categories-bg2.png');
        background-size: cover;
        background-position: center;
      ">
            <div
                class="absolute top-[162px] md:top-[172px] lg:top-[254px] left-4 md:left-6 lg:left-[96px] z-10 max-w-[1018px]">
                <div @click="navigateTo('/categories')"
                    class="flex items-center gap-[5px] md:gap-[10px] text-[#00A8AB] mb-[6px] md:mb-[10px]">
                    <i class="ri-arrow-left-line text-lg md:text-xl lg:text-2xl"></i>
                    <span
                        class="font-['Instrument_Sans'] font-semibold text-[10px] md:text-xs lg:text-sm leading-[100%] tracking-[5%] uppercase">Back
                        to Categories</span>
                </div>
                <h1
                    class="font-['Geist'] font-bold text-4xl md:text-[40px] lg:text-[76px] leading-[120%] md:leading-[100%] mb-[10px] lg:mb-[30px] bg-gradient-to-r from-[#FFFFFFE5] to-[#FFFFFF99] bg-clip-text text-transparent">
                    Technology
                </h1>
                <p
                    class="font-['Instrument_Sans'] w-[358px] md:w-[674px] lg:w-full font-normal text-sm md:text-base lg:text-lg leading-[160%] md:leading-[150%] lg:leading-[100%]">
                    Explore insights, innovations, and digital experiences shaping the
                    future of technology and the way we live, work, and create.
                </p>
            </div>
        </section>

        <!-- Featured Section -->
        <section class="max-w-desktop mx-auto py-[30px] md:py-[50px]">
            <div
                class="flex max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto items-center justify-between mb-[30px] lg:mb-10">
                <div>
                    <h2
                        class="font-['Geist'] font-semibold text-[20px] md:text-[30px] lg:text-[40px] leading-[150%] md:leading-[100%] mb-[5px] lg:mb-3">
                        Featured in Technology
                    </h2>
                    <p
                        class="font-['Instrument_Sans'] font-normal text-[14px] lg:text-lg leading-[150%] lg:leading-[100%] text-text-secondary">
                        A curated selection of standout content handpicked from this
                        category.
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

            <!-- Featured Grid -->
            <div class="grid grid-cols-4 gap-6">
                <div v-for="item in featuredContent" :key="item.title"
                    class="group relative h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer"
                    @click="navigateTo(`/categories/${category}/${item.id}`)">
                    <img :src="item.image" :alt="item.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

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
        </section>

        <div class="w-[1320px] h-[1px] bg-[#1C1F26] mx-auto mb-[50px]"></div>

        <!-- All Content Section -->
        <section class="max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto mb-[50px]">
            <div class="flex items-start justify-between mb-10">
                <div>
                    <h2 class="font-['Geist'] font-semibold text-[40px] leading-[100%] mb-3">
                        All Technology Content
                    </h2>
                    <p class="font-['Instrument_Sans'] font-normal text-lg leading-[100%] text-[#B8BDC7]">
                        A curated selection of standout content handpicked from this
                        category.
                    </p>
                </div>
                <div class="flex gap-6 h-[50px]">
                    <button v-for="filter in filters" :key="filter" class="rounded-[6px]" :class="activeFilter === filter
                        ? 'bg-[#00A8AB] py-[14px] pl-5 pr-[18px]'
                        : 'bg-[#1C1F26] py-[14px] px-[30px]'
                        ">
                        <span
                            class="font-['Instrument_Sans'] font-semibold text-sm leading-[18px] text-right align-middle">{{
                                filter }}</span>
                    </button>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-6">
                <CategoryCard v-for="item in allContent" :key="item.title + Math.random()" :title="item.title"
                    :desc="item.desc" :image="item.image" :badge="item.badges[0]" :id="item.id"
                    :on-click="() => navigateTo(`/categories/${category}/${item.id}`)" />
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

        <div class="max-w-[1320px] h-[1px] bg-[#1C1F26] mx-auto mb-[50px]"></div>

        <!-- About Section -->
        <section class="max-w-[1320px] mx-auto">
            <div class="rounded-[20px] overflow-hidden h-[401px] flex items-center"
                style="background-image: url('/assets/images/promo-banner3.png'); background-size: cover; background-position: center;">
                <div class="pl-[60px] py-[86px] flex flex-col justify-center z-10 max-w-[872px]">
                    <h2 class="font-['Geist'] text-[40px] font-semibold leading-[130%] mb-[10px]">
                        About the Technology Category
                    </h2>
                    <p class="text-[#B8BDC7] font-['Instrument_Sans'] text-lg font-normal leading-[160%] mb-[30px]">
                        The Technology category is a hub for innovation, discovery, and
                        digital transformation. It features content that explores emerging
                        tech trends, practical applications, and educational resources that
                        empower individuals and organizations to thrive in a rapidly
                        evolving digital landscape.
                    </p>
                    <button
                        class="w-fit pl-5 pr-[18px] py-[14px] rounded-[6px] bg-[#00A8AB] hover:bg-[#00989B] transition-colors flex items-center justify-center gap-2">
                        <span class="font-['Instrument_Sans'] font-semibold text-sm leading-[18px]">View All
                            Categories</span>
                        <i class="ri-arrow-right-s-line text-lg"></i>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
