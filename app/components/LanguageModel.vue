<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false });

const selectedCountry = ref("India");

const regions = [
    {
        title: "Africa, Middle East, and India",
        countries: [
            ["Armenia", "Azerbaijan", "Bahrain", "Botswana"],
            ["Brunei Darussalam", "Cape Verde", "Egypt", "Eswatini"],
            ["Gambia", "Ghana", "Guinea-Bissau", "India"],
            ["Israel", "Jordan", "Lebanon", "Mauritius"],
            ["Mozambique", "Namibia", "Niger (English)", "Oman"],
            ["Qatar", "Saudi Arabia", "South Africa", "Sri Lanka"],
            ["Tajikistan", "Turkmenistan", "Uganda", "United Arab Emirates"],
        ],
    },
];

const closeModal = () => {
    isOpen.value = false;
    document.body.style.overflow = "unset";
};

const selectCountry = (country: string) => {
    selectedCountry.value = country;
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
        <Transition name="language-fade">
            <div v-if="isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center text-white bg-deep-black/80 backdrop-blur-[20px] p-4 md:p-6"
                @click.self="closeModal">
                <div
                    class="relative w-[358px] md:w-[650px] lg:w-[872px] max-h-[694px] md:max-h-[725px] overflow-y-auto rounded-xl bg-soft-black border border-slate-gray">
                    <button @click="closeModal"
                        class="absolute top-4 md:top-[18px] right-4 md:right-[18px] w-5 h-5 flex items-center justify-center text-white hover:text-accent transition-colors">
                        <i class="ri-close-line text-xl"></i>
                    </button>

                    <h2
                        class="font-['Geist'] font-medium text-lg md:text-2xl leading-[110%] md:leading-[100%] p-4 md:p-[30px] bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
                        Select a country or region
                    </h2>

                    <div class="bg-slate-gray h-[1px] w-full mb-4 md:mb-[30px]"></div>

                    <div v-for="(region, regionIndex) in regions" :key="regionIndex"
                        class="mx-4 md:mx-[30px] pb-4 md:pb-6 border-b border-slate-gray">
                        <div class="flex items-center justify-between h-[18px] mb-[30px]">
                            <h3 class="font-['Geist'] font-medium text-base md:text-lg leading-[100%]">
                                {{ region.title }}
                            </h3>
                            <button
                                class="font-['Instrument_Sans'] font-semibold text-xs leading-[18px] text-accent hover:text-accent/90 transition-colors flex items-center gap-[5px]">
                                See All
                                <i class="ri-arrow-right-s-line text-base"></i>
                            </button>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] gap-x-4 md:gap-x-6">
                            <button v-for="country in region.countries.flat()" :key="country"
                                @click="selectCountry(country)" :class="selectedCountry === country
                                    ? 'bg-accent'
                                    : 'bg-transparent hover:bg-slate-gray'
                                    "
                                class="h-[31px] p-[7px] rounded-[5px] font-['Instrument_Sans'] font-normal text-xs leading-[140%] text-left flex items-center justify-between transition-colors">
                                {{ country }}
                                <i v-if="selectedCountry === country" class="ri-check-line ml-auto text-base"></i>
                            </button>
                        </div>
                    </div>

                    <div v-for="(region, regionIndex) in regions" :key="'dup-' + regionIndex"
                        class="mx-4 md:mx-[30px] pb-4 md:pb-6 mt-4 md:mt-6 border-b border-slate-gray">
                        <div class="flex items-center justify-between h-[18px] mb-[30px]">
                            <h3 class="font-['Geist'] font-medium text-base md:text-lg leading-[100%]">
                                {{ region.title }}
                            </h3>
                            <button
                                class="font-['Instrument_Sans'] font-semibold text-xs leading-[18px] text-accent hover:text-accent/90 transition-colors flex items-center gap-[5px]">
                                See All
                                <i class="ri-arrow-right-s-line text-base"></i>
                            </button>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[10px] gap-x-6">
                            <button v-for="country in region.countries.flat()" :key="country"
                                @click="selectCountry(country)" :class="selectedCountry === country
                                    ? 'bg-accent'
                                    : 'bg-transparent hover:bg-slate-gray'
                                    "
                                class="h-[31px] p-[7px] rounded-[5px] font-['Instrument_Sans'] font-normal text-xs leading-[140%] text-left flex items-center justify-between transition-colors">
                                {{ country }}
                                <i v-if="selectedCountry === country" class="ri-check-line ml-auto text-base"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.language-fade-enter-active,
.language-fade-leave-active {
    transition: opacity 0.3s ease;
}

.language-fade-enter-from,
.language-fade-leave-to {
    opacity: 0;
}
</style>