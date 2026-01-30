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
        <Transition name="language-fade">
            <div v-if="isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center text-[#FFFFFF] bg-[#0b0d12cc] backdrop-blur-[20px]"
                @click.self="closeModal">
                <div
                    class="relative w-[870px] max-h-[725px] overflow-y-auto rounded-xl bg-[#12141A] border border-[#1C1F26]">
                    <!-- Close Button -->
                    <button @click="closeModal"
                        class="absolute top-[18px] right-[18px] w-5 h-5 flex items-center justify-center text-white hover:text-[#00A8AB] transition-colors">
                        <i class="ri-close-line text-xl"></i>
                    </button>

                    <!-- Title -->
                    <h2
                        class="font-['Geist'] font-medium text-2xl leading-[100%] p-[30px] bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
                        Select a country or region
                    </h2>

                    <div class="bg-[#1C1F26] h-[1px] w-full"></div>

                    <!-- Regions -->
                    <div v-for="(region, regionIndex) in regions" :key="regionIndex"
                        class="mx-[30px] mt-[30px] pb-6 border-b border-[#1C1F26]">
                        <!-- Region Header -->
                        <div class="flex items-center justify-between h-[18px] mb-[30px]">
                            <h3 class="font-['Geist'] font-medium text-lg leading-[100%]">
                                {{ region.title }}
                            </h3>
                            <button
                                class="font-['Instrument_Sans'] font-semibold text-xs leading-[18px] text-[#00A8AB] hover:text-[#00989B] transition-colors flex items-center gap-[5px]">
                                See All
                                <i class="ri-arrow-right-s-line text-base"></i>
                            </button>
                        </div>

                        <!-- Countries Grid -->
                        <div class="grid grid-cols-4 gap-y-[10px] gap-x-6">
                            <button v-for="country in region.countries.flat()" :key="country"
                                @click="selectCountry(country)" :class="selectedCountry === country
                                    ? 'bg-[#00A8AB]'
                                    : 'bg-transparent hover:bg-[#1C1F26]'
                                    "
                                class="h-[31px] p-[7px] rounded-[5px] font-['Instrument_Sans'] font-normal text-xs leading-[140%] text-left flex items-center justify-between transition-colors">
                                {{ country }}
                                <i v-if="selectedCountry === country" class="ri-check-line ml-auto text-base"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Duplicate Region for scrolling demo -->
                    <div v-for="(region, regionIndex) in regions" :key="'dup-' + regionIndex"
                        class="mx-[30px] mt-6 pb-6 border-b border-[#1C1F26]">
                        <!-- Region Header -->
                        <div class="flex items-center justify-between h-[18px] mb-[30px]">
                            <h3 class="font-['Geist'] font-medium text-lg leading-[100%]">
                                {{ region.title }}
                            </h3>
                            <button
                                class="font-['Instrument_Sans'] font-semibold text-xs leading-[18px] text-[#00A8AB] hover:text-[#00989B] transition-colors flex items-center gap-[5px]">
                                See All
                                <i class="ri-arrow-right-s-line text-base"></i>
                            </button>
                        </div>

                        <!-- Countries Grid -->
                        <div class="grid grid-cols-4 gap-y-[10px] gap-x-6">
                            <button v-for="country in region.countries.flat()" :key="country"
                                @click="selectCountry(country)" :class="selectedCountry === country
                                    ? 'bg-[#00A8AB]'
                                    : 'bg-transparent hover:bg-[#1C1F26]'
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