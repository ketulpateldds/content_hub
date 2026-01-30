<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false });

const searchQuery = ref("");

const popularTags = [
    "Artificial Intelligence",
    "Robotics",
    "Future Tech",
    // "Artificial Intelligence",
    // "Robotics",
    // "Future Tech",
    // "Artificial Intelligence",
    // "Robotics",
    // "Future Tech",
];
const activeTag = ref(0);

const recommendedResults = [
    {
        id: 1,
        title: "The Next Digital Era",
        desc: "An in-depth look at how modern technology is reshaping the way we experience content and...",
        image: "/assets/images/new-releases1.png",
    },
    {
        id: 2,
        title: "Learning Without Limits",
        desc: "Discover innovative approaches to education and personal growth in a connected digital wo...",
        image: "/assets/images/new-releases2.png",
    },
    {
        id: 3,
        title: "The Balance Project",
        desc: "A thoughtfully curated experience focused on health, wellness, and achieving everyday balan...",
        image: "/assets/images/new-releases3.png",
    },
    {
        id: 4,
        title: "Inside Tomorrow",
        desc: "Explore breakthrough ideas, creative thinking, and the trends shaping what comes next.",
        image: "/assets/images/new-releases4.png",
    },
    {
        id: 5,
        title: "The Next Digital Era",
        desc: "An in-depth look at how modern technology is reshaping the way we experience content and...",
        image: "/assets/images/new-releases1.png",
    },
    {
        id: 6,
        title: "Learning Without Limits",
        desc: "Discover innovative approaches to education and personal growth in a connected digital wo...",
        image: "/assets/images/new-releases2.png",
    },
    {
        id: 7,
        title: "The Balance Project",
        desc: "A thoughtfully curated experience focused on health, wellness, and achieving everyday balan...",
        image: "/assets/images/new-releases3.png",
    },
    {
        id: 8,
        title: "Inside Tomorrow",
        desc: "Explore breakthrough ideas, creative thinking, and the trends shaping what comes next.",
        image: "/assets/images/new-releases4.png",
    },
];

const closeSearch = () => {
    isOpen.value = false;
    document.body.style.overflow = "unset";
};

watch(isOpen, (newValue) => {
    if (newValue) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
});
</script>

<template>
    <Teleport to="body">
        <Transition name="search-fade">
            <div v-if="isOpen"
                class="fixed inset-0 z-50 overflow-y-auto text-white bg-deep-black/80 backdrop-blur-[20px]"
                @click.self="closeSearch">
                <div class="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-4 pt-[60px] md:pt-[100px] pb-20">
                    <button @click="closeSearch"
                        class="absolute top-4 md:top-6 lg:top-5 right-4 md:right-6 lg:right-5 w-5 lg:w-10 h-5 lg:h-10 flex items-center justify-center text-white hover:text-accent transition-colors">
                        <i class="ri-close-line text-xl lg:text-2xl"></i>
                    </button>

                    <div class="relative mb-[10px] md:mb-5">
                        <div
                            class="w-[358px] md:w-[600px] h-[54px] md:h-16 mx-auto rounded-xl bg-soft-black border border-slate-gray flex items-center py-[17px] px-[14px] md:py-[22px] md:px-[22px] gap-[10px]">
                            <i class="ri-search-line text-xl text-text-secondary"></i>
                            <input v-model="searchQuery" type="text" placeholder="Search titles and categories..."
                                class="flex-1 bg-transparent border-none outline-none text-white placeholder:text-text-secondary font-['Instrument_Sans'] font-normal text-base leading-[160%]"
                                autofocus />
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-center h-8 gap-[10px] mb-[30px] md:mb-10 lg:mb-[50px] md:px-[35px] lg:px-0 flex-wrap">
                        <span v-for="(tag, index) in popularTags" :key="tag" @click="activeTag = index" :class="activeTag === index
                            ? 'bg-accent border-accent'
                            : 'bg-soft-black border-slate-gray'
                            "
                            class="px-[10px] py-[5px] rounded-[5px] h-full border font-['Instrument_Sans'] font-normal text-xs leading-[140%] hover:bg-accent transition-colors cursor-pointer">{{
                                tag }}</span>
                    </div>

                    <div>
                        <h2
                            class="font-['Geist'] font-semibold text-xl md:text-[30px] lg:text-[40px] leading-[150%] md:leading-[100%] mb-5 md:mb-[30px] lg:mb-10">
                            Recommended Results
                        </h2>

                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-6">
                            <div v-for="item in recommendedResults" :key="item.id"
                                @click="navigateTo(`/singlecontent?id=${item.id}`)"
                                class="group relative w-[172px] md:w-[223px] lg:w-[312px] h-[228px] md:h-[280px] lg:h-[350px] rounded-[14px] ring-1 ring-slate-gray ring-inset overflow-hidden cursor-pointer">
                                <img :src="item.image" :alt="item.title"
                                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                <!-- Badges -->
                                <div
                                    class="absolute top-[10px] lg:top-[16px] left-[10px] lg:left-[16px] flex gap-[5px] z-10">
                                    <span
                                        class="px-[5px] pt-[2px] pb-[2.5px] md:px-[7px] md:py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[10px] leading-[140%] uppercase bg-[#FFA500]">
                                        {{ item.title }}
                                    </span>
                                </div>

                                <div
                                    class="px-[14px] pb-[14px] lg:pb-[18px] absolute inset-0 bg-gradient-to-t from-black/90 from-20% to-transparent flex flex-col justify-end">
                                    <h3
                                        class="text-sm md:text-base lg:text-xl font-['Geist'] font-semibold leading-[100%] mb-[2px] md:mb-[5px] lg:mb-[10px]">
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
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.search-fade-enter-active,
.search-fade-leave-active {
    transition: opacity 0.3s ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
    opacity: 0;
}
</style>
