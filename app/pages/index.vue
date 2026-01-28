<script setup lang="ts">
const categories = [
    { title: 'Entertainment', image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2070&auto=format&fit=crop', desc: 'Stream movies & shows' },
    { title: 'Education', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop', desc: 'Learn new skills' },
    { title: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1544367563-121955377d68?q=80&w=2070&auto=format&fit=crop', desc: 'Find your balance' },
    { title: 'Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', desc: 'Future tech now' },
]

const releases = [
    { title: 'The Next Digital Era', tag: 'Technology', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Learning Without Limits', tag: 'Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop' },
    { title: 'The Balance Project', tag: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Inside Tomorrow', tag: 'Creative', image: 'https://images.unsplash.com/photo-1614726365723-49c6b7c6c2ee?q=80&w=2128&auto=format&fit=crop' },
]

const topPicks = [
    { title: 'Midnight Stories', tag: 'Entertainment', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2098&auto=format&fit=crop' },
    { title: 'Digital Frontiers', tag: 'Technology', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Morning Tomorrow', tag: 'Lifestyle', image: 'https://images.unsplash.com/photo-1495562569060-2eec283878fa?q=80&w=2083&auto=format&fit=crop' },
    { title: 'Wild & Wonder', tag: 'Nature', image: 'https://images.unsplash.com/photo-1500829243541-d12d9aac1914?q=80&w=2070&auto=format&fit=crop' },
]

const faqs = [
    { question: 'What is this platform?', answer: 'This platform is a curated space for discovering the best digital content across various categories including technology, education, and entertainment.', isOpen: true },
    { question: 'How is the content selected?', answer: 'Our team of experts hand-picks content based on quality, relevance, and user ratings.', isOpen: false },
    { question: 'Do I need to create an account?', answer: 'You can browse content freely, but creating an account allows you to save favorites and get personalized recommendations.', isOpen: false },
    { question: 'Can I upload or submit my own content?', answer: 'Yes! We encourage creator submissions. Check our contribution guidelines for more details.', isOpen: false },
    { question: 'Is the platform available in multiple languages?', answer: 'Currently English only, but we are working on adding multi-language support soon.', isOpen: false },
    { question: 'How often is new content added?', answer: 'We update our catalog daily with fresh new releases and timeless classics.', isOpen: false },
]

const toggleFaq = (index: number) => {
    faqs.forEach((faq, i) => {
        if (i === index) faq.isOpen = !faq.isOpen
        else faq.isOpen = false
    })
}
</script>

<template>
    <div class="min-h-screen bg-[#0A0A0A] text-white font-['Instrument_Sans'] overflow-x-hidden">

        <!-- Hero Section -->
        <section class="relative h-[900px] w-full flex items-center justify-center">
            <!-- Background with Gradient Overlay -->
            <div class="absolute inset-0 z-0">
                <img src="/assets/home-bg.png"
                    alt="Hero Background" class="w-full h-full object-cover">
            </div>

            <!-- Content -->
            <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <h1
                    class="font-['Geist'] font-bold text-[76px] leading-[100%] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60 mb-[30px] mx-auto">
                    Discover <br /> Amazing Content
                </h1>
                <p
                    class="font-['Instrument_Sans'] font-normal text-[18px] leading-[100%] tracking-normal text-center text-white mb-[30px] mx-auto">
                    A cinematic space built to showcase the world's most compelling digital experiences.
                </p>
                <div class="flex items-center justify-center h-[50px] gap-6">
                    <button
                        class="px-[30px] py-[14px] bg-[#00A8AB] hover:bg-[#00A59D] text-[#FFFFFF] rounded-[6px] transition-colors flex items-center gap-2">
                        <span class="font-['Instrument_Sans'] text-sm font-semibold leading-[18px]">View</span> <i class="ri-arrow-right-s-line text-[18px]"></i>
                    </button>
                    <button
                        class="px-[30px] py-[14px] bg-[#1C1F26] hover:bg-[#1C1F26]/80 text-[#FFFFFF] font-semibold font-['Instrument_Sans'] text-sm leading-[18px] rounded-[6px] transition-colors">
                        More Info
                    </button>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <i class="ri-arrow-down-line text-2xl text-white/50"></i>
            </div>
        </section>

        <!-- Featured Categories -->
        <section class="px-4 py-16 md:px-16 lg:px-24">
            <div class="mb-10">
                <h2 class="text-3xl font-bold mb-2">Featured Categories</h2>
                <p class="text-white/60">Explore curated collections hand-picked for you.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="cat in categories" :key="cat.title"
                    class="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer">
                    <img :src="cat.image" :alt="cat.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                        <h3 class="text-xl font-bold mb-1">{{ cat.title }}</h3>
                        <p class="text-sm text-white/70">{{ cat.desc }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 flex justify-center">
                <button
                    class="px-8 py-3 bg-[#00C2B8] hover:bg-[#00A59D] text-black font-semibold rounded-[4px] transition-colors">
                    View Categories
                </button>
            </div>
        </section>

        <!-- New Releases -->
        <section class="px-4 py-16 md:px-16 lg:px-24 bg-white/[0.02]">
            <div class="flex items-center justify-between mb-10">
                <div>
                    <h2 class="text-3xl font-bold mb-2">New Releases</h2>
                    <p class="text-white/60">Discover the latest additions to our platform.</p>
                </div>
                <div class="flex gap-2">
                    <button
                        class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <i class="ri-arrow-left-s-line text-xl"></i>
                    </button>
                    <button
                        class="w-10 h-10 rounded-full bg-[#00C2B8] text-black flex items-center justify-center hover:bg-[#00A59D] transition-colors">
                        <i class="ri-arrow-right-s-line text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in releases" :key="item.title" class="group cursor-pointer">
                    <div class="relative h-[240px] rounded-xl overflow-hidden mb-4">
                        <div
                            class="absolute top-4 left-4 px-3 py-1 bg-[#F4B942] text-black text-xs font-bold rounded uppercase">
                            {{ item.tag }}
                        </div>
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                    </div>
                    <h3 class="text-lg font-bold mb-1 group-hover:text-[#00C2B8] transition-colors">{{ item.title }}
                    </h3>
                    <p class="text-sm text-white/50">New addition • Trending</p>
                </div>
            </div>
        </section>

        <!-- Top Picks -->
        <section class="px-4 py-16 md:px-16 lg:px-24">
            <div class="flex items-center justify-between mb-10">
                <div>
                    <h2 class="text-3xl font-bold mb-2">Top Picks</h2>
                    <p class="text-white/60">Discover the content everyone is talking about.</p>
                </div>
                <div class="flex gap-2">
                    <button
                        class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <i class="ri-arrow-left-s-line text-xl"></i>
                    </button>
                    <button
                        class="w-10 h-10 rounded-full bg-[#00C2B8] text-black flex items-center justify-center hover:bg-[#00A59D] transition-colors">
                        <i class="ri-arrow-right-s-line text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in topPicks" :key="item.title" class="group cursor-pointer">
                    <div class="relative h-[200px] rounded-xl overflow-hidden mb-4">
                        <div
                            class="absolute top-4 left-4 px-3 py-1 bg-[#F4B942] text-black text-xs font-bold rounded uppercase">
                            {{ item.tag }}
                        </div>
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                    </div>
                    <h3 class="text-lg font-bold mb-1 group-hover:text-[#00C2B8] transition-colors">{{ item.title }}
                    </h3>
                    <p class="text-sm text-white/50">Highly Rated • Must Watch</p>
                </div>
            </div>
        </section>

        <!-- Promo Banner -->
        <section class="px-4 py-16 md:px-16 lg:px-24">
            <div class="relative rounded-2xl overflow-hidden h-[400px] flex items-center">
                <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                    class="absolute inset-0 w-full h-full object-cover" alt="Promo">
                <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

                <div class="relative z-10 px-8 md:px-16 max-w-xl">
                    <h2 class="text-4xl font-bold mb-6">Experience the Best <br /> of Our Platform</h2>
                    <p class="text-white/70 mb-8 text-lg">
                        Unlock exclusive content, early access features, and much more with our premium membership
                        plans.
                    </p>
                    <button
                        class="px-8 py-3 bg-[#00C2B8] hover:bg-[#00A59D] text-black font-semibold rounded-[4px] transition-colors">
                        Start Creating >
                    </button>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="bg-[#12141A]">
            <div class="px-4 py-16 md:px-16 lg:px-24 mx-auto text-center">
                <h2 class="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p class="text-white/60 mb-12">Everything you need to know about the platform.</p>
                
                <div class="space-y-4 text-left">
                    <div v-for="(faq, index) in faqs" :key="index" class="border-b border-white/10 pb-4">
                        <button @click="toggleFaq(index)" class="w-full flex items-center justify-between py-4 group">
                            <span class="text-lg font-medium group-hover:text-[#00C2B8] transition-colors">{{ faq.question
                        }}</span>
                        <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        :class="faq.isOpen ? 'bg-[#00C2B8] text-black' : 'text-white/50 bg-white/5 group-hover:bg-white/10'">
                        <i :class="faq.isOpen ? 'ri-subtract-line' : 'ri-add-line'"></i>
                        </div>
                    </button>
                    <div v-show="faq.isOpen" class="text-white/60 pb-4 leading-relaxed animate-fade-in">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
        </section>

        <!-- Footer Padding -->
        <div class="h-20"></div>

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
