<script setup lang="ts">
import { computed } from 'vue';
import { useAppearance } from '@/composeables/useAppearance';

const { appearance, updateAppearance } = useAppearance();

const isDark = computed(() => appearance.value === 'dark');

function toggle() {
    updateAppearance(isDark.value ? 'light' : 'dark');
}
</script>

<template>
    <button
        @click="toggle"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-[#e3e3e0] bg-white text-[#1b1b18] transition-colors hover:bg-[#f5f5f4] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:hover:bg-[#1f1f1e]"
        aria-label="Toggle dark mode"
    >
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>
</template>