<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false });

const searchQuery = ref("");

const popularTags = [
    "Artificial Intelligence",
    "Robotics",
    "Future Tech",
    "Artificial Intelligence",
    "Robotics",
    "Future Tech",
    "Artificial Intelligence",
    "Robotics",
    "Future Tech",
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

// Watch for modal open/close to control body scroll
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
                class="fixed inset-0 z-50 overflow-y-auto text-[#FFFFFF] bg-[#0b0d12cc] backdrop-blur-[20px]"
                @click.self="closeSearch">
                <div class="w-full max-w-[1320px] mx-auto px-4 pt-[100px] pb-20">
                    <button @click="closeSearch"
                        class="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white hover:text-[#00A8AB] transition-colors">
                        <i class="ri-close-line text-2xl"></i>
                    </button>

                    <!-- Search Bar -->
                    <div class="relative mb-5">
                        <div
                            class="w-[600px] h-16 mx-auto rounded-xl bg-[#12141A] border border-[#1C1F26] flex items-center p-[22px] gap-[10px]">
                            <i class="ri-search-line text-xl text-[#B8BDC7]"></i>
                            <input v-model="searchQuery" type="text" placeholder="Search titles and categories..."
                                class="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#B8BDC7] font-['Instrument_Sans'] font-normal text-base leading-[160%]"
                                autofocus />
                        </div>
                    </div>

                    <!-- Popular Tags -->
                    <div class="flex items-center justify-center gap-[10px] mb-[50px] flex-wrap">
                        <span v-for="(tag, index) in popularTags" :key="tag" @click="activeTag = index" :class="activeTag === index
                            ? 'bg-[#00A8AB] border-[#00A8AB]'
                            : 'bg-[#12141A] border-[#1C1F26]'
                            "
                            class="px-[10px] py-[5px] rounded-[5px] border font-['Instrument_Sans'] font-normal text-xs leading-[140%] hover:bg-[#00A8AB] transition-colors cursor-pointer">{{
                                tag }}</span>
                    </div>

                    <!-- Recommended Results -->
                    <div>
                        <h2 class="font-['Geist'] font-semibold text-[40px] leading-[100%] mb-10">
                            Recommended Results
                        </h2>

                        <!-- Results Grid -->
                        <div class="grid grid-cols-4 gap-6">
                            <div v-for="item in recommendedResults" :key="item.id"
                                @click="navigateTo(`/singlecontent?id=${item.id}`)"
                                class="group relative h-[350px] rounded-[14px] ring-1 ring-[#1C1F26] ring-inset overflow-hidden cursor-pointer">
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
