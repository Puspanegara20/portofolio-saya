<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import AppearanceToggle from '@/components/AppearanceToggle.vue';

const skills = ['User Experience Design (UED)', 'Kotlin', 'Figma'];

const projects = [
    {
        name: 'Hike.o',
        description: 'Platform tracking dan penjadwalan pendakian gunung serta wisata alam di Lombok.',
        tags: ['UI/UX', 'Web Design'],
        image: '/image/portofolio hasil uiux.jpg',
    },
    {
        name: 'Lahhgo',
        description: 'Website startup ramah lingkungan yang mendukung kelestarian alam.',
        tags: ['UI/UX', 'Sustainability'],
        image: '/image/Login lahhgo.png',
    },
    {
        name: 'Si Dora',
        description: 'Aplikasi mobile layanan donor darah untuk mempermudah akses pendonor dan penerima.',
        tags: ['UI/UX', 'Mobile App'],
        image: '/image/siDora uiux.jpg',
    },
    {
        name: 'Tirtha Bagus',
        description: 'Logo dan identitas visual untuk usaha konter pulsa dan voucher.',
        tags: ['Branding', 'Logo Design'],
        image: '/image/logo tirtha bagus.png',
    },
];

const mobileMenuOpen = ref(false);
</script>

<template>
    <Head title="Pande Puspanegara - UI/UX Designer">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div class="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
        <!-- Navbar -->
       <header class="sticky top-0 z-10 border-b border-[#e3e3e0] bg-[#FDFDFC]/80 backdrop-blur dark:border-[#3E3E3A] dark:bg-[#0a0a0a]/80">
            <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <span class="font-semibold">Pande Puspanegara</span>

                <div class="hidden items-center gap-6 text-sm sm:flex">
                    <a href="#about" class="hover:text-[#f53003] dark:hover:text-[#FF4433]">About</a>
                    <a href="#skills" class="hover:text-[#f53003] dark:hover:text-[#FF4433]">Skills</a>
                    <a href="#projects" class="hover:text-[#f53003] dark:hover:text-[#FF4433]">Projects</a>
                    <a href="#contact" class="hover:text-[#f53003] dark:hover:text-[#FF4433]">Contact</a>
                    <AppearanceToggle />
                </div>

                <div class="flex items-center gap-3 sm:hidden">
                    <AppearanceToggle />
                    <button @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
                        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>

            <div v-if="mobileMenuOpen" class="flex flex-col gap-1 border-t border-[#e3e3e0] px-6 py-4 text-sm sm:hidden dark:border-[#3E3E3A]">
                <a href="#about" @click="mobileMenuOpen = false" class="py-2 hover:text-[#f53003] dark:hover:text-[#FF4433]">About</a>
                <a href="#skills" @click="mobileMenuOpen = false" class="py-2 hover:text-[#f53003] dark:hover:text-[#FF4433]">Skills</a>
                <a href="#projects" @click="mobileMenuOpen = false" class="py-2 hover:text-[#f53003] dark:hover:text-[#FF4433]">Projects</a>
                <a href="#contact" @click="mobileMenuOpen = false" class="py-2 hover:text-[#f53003] dark:hover:text-[#FF4433]">Contact</a>
            </div>
        </header>

        <!-- Hero -->
        <section class="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-24">
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">Mataram, West Nusa Tenggara, Indonesia</p>
            <h1 class="text-4xl font-bold sm:text-5xl">UI/UX Designer &amp; Mobile Developer</h1>
            <p class="max-w-2xl text-[#706f6c] dark:text-[#A1A09A]">
                Mahasiswa Informatika yang antusias mengeksplorasi Mobile Programming, Web Development, dan UI/UX Research &amp; Development.
                Saya percaya desain yang baik adalah desain yang membuat orang lain merasakan hal yang sama dengan yang saya rasakan saat melihat sesuatu yang pas.
            </p>
            <a href="#projects" class="mt-4 inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-2.5 text-sm text-white hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white">
                Lihat Proyek Saya
            </a>
        </section>

        <!-- About -->
        <section id="about" class="mx-auto max-w-5xl px-6 py-16">
            <h2 class="mb-4 text-2xl font-semibold">Tentang Saya</h2>
            <p class="max-w-3xl text-[#706f6c] dark:text-[#A1A09A]">
                Saya mahasiswa Informatika dari Universitas Mataram, pernah menjadi exchange student di Universitas Gadjah Mada
                melalui Program Pertukaran Mahasiswa Merdeka, dan saat ini mengikuti Bangkit Academy jalur UI/UX Design.
                Saya senang mengeksplorasi bagaimana desain dapat menyelesaikan masalah nyata bagi penggunanya.
            </p>
        </section>

        <!-- Skills -->
        <section id="skills" class="mx-auto max-w-5xl px-6 py-16">
            <h2 class="mb-6 text-2xl font-semibold">Skills</h2>
            <div class="flex flex-wrap gap-3">
                <span
                    v-for="skill in skills"
                    :key="skill"
                    class="rounded-full border border-[#e3e3e0] px-4 py-2 text-sm dark:border-[#3E3E3A]"
                >
                    {{ skill }}
                </span>
            </div>
        </section>

        <!-- Projects -->
        <section id="projects" class="mx-auto max-w-5xl px-6 py-16">
            <h2 class="mb-6 text-2xl font-semibold">Projects</h2>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                    v-for="project in projects"
                    :key="project.name"
                    class="rounded-lg border border-[#e3e3e0] p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:border-[#3E3E3A] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                >
                    <img :src="project.image" :alt="project.name" class="h-48 w-full object-cover"/>
                    <h3 class="mb-2 font-semibold">{{ project.name }}</h3>
                    <p class="mb-4 text-sm text-[#706f6c] dark:text-[#A1A09A]">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="tag in project.tags"
                            :key="tag"
                            class="rounded-full bg-[#f5f5f4] px-3 py-1 text-xs dark:bg-[#1f1f1e]"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

               <!-- Contact -->
        <section id="contact" class="mx-auto max-w-5xl px-6 py-16">
            <h2 class="mb-4 text-2xl font-semibold">Hubungi Saya</h2>
            <p class="mb-4 text-[#706f6c] dark:text-[#A1A09A]">
                Terbuka untuk kolaborasi, magang, atau sekadar diskusi seputar desain.
            </p>
            <div class="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
                <a href="mailto:hardline146@gmail.com" class="font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]">hardline146@gmail.com</a>
                <a href="https://www.linkedin.com/in/pande-puspanegara-7a8091279/" target="_blank" class="font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]">LinkedIn</a>
            </div>
        </section>

        <footer class="border-t border-[#e3e3e0] py-8 text-center text-sm text-[#706f6c] dark:border-[#3E3E3A] dark:text-[#A1A09A]">
            © {{ new Date().getFullYear() }} Pande Puspanegara. Built with Laravel &amp; Vue.
        </footer>
    </div>
</template>