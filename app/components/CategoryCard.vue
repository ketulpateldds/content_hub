<script setup lang="ts">
interface CategoryCardProps {
    title: string
    count?: string
    desc?: string
    image: string
    slug?: string
    badge?: string
    id?: number | string
    onClick?: () => void
}

const props = defineProps<CategoryCardProps>()

const toSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+\&\s+/g, '-').replace(/\s+/g, '-')
}

const categorySlug = computed(() => props.slug || toSlug(props.title))

const handleClick = () => {
    if (props.onClick) {
        props.onClick()
    } else {
        navigateTo(`/categories/${categorySlug.value}`)
    }
}
</script>

<template>
    <div class="group relative min-w-[172px] md:min-w-[223px] lg:min-w-[312px] min-h-[228px] md:min-h-[280px] lg:min-h-[350px] rounded-[14px] ring-1 ring-slate-gray ring-inset overflow-hidden cursor-pointer"
        @click="handleClick">
        <img :src="image" :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">

        <div v-if="badge" class="absolute top-[10px] lg:top-[16px] left-[10px] lg:left-[16px] flex gap-[5px] z-10">
            <span
                class="px-[5px] pt-[2px] pb-[2.5px] md:px-[7px] md:py-[5px] rounded-[5px] font-['Instrument_Sans'] font-semibold text-[10px] leading-[140%] uppercase bg-[#FFA500]">
                {{ badge }}
            </span>
        </div>

        <div v-if="count"
            class="px-[14px] pb-5 md:pb-[14px] lg:pb-[18px] absolute inset-0 bg-gradient-to-t from-black/90 from-20% via-black/40 to-transparent flex flex-col justify-end">
            <span class="font-['Instrument_Sans'] font-semibold text-[10px] lg:text-[13px] leading-[140%] mb-[5px]">
                {{ count }}</span>
            <h3
                class="text-sm md:text-base lg:text-xl font-['Geist'] font-semibold leading-[100%] mb-[5px] lg:mb-[10px]">
                {{ title }}</h3>
            <p
                class="hidden md:block font-['Instrument_Sans'] font-normal text-xs lg:text-[13px] leading-[140%] line-clamp-2 text-text-secondary">
                {{ desc }}</p>
        </div>
    </div>
</template>
