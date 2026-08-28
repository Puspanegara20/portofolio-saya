import { onMounted, ref } from 'vue';

type Appearance = 'light' | 'dark' | 'system';

const appearance = ref<Appearance>('system');

function getStoredAppearance(): Appearance {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('appearance') as Appearance) || 'system';
}

function applyAppearance(value: Appearance) {
    const isDark =
        value === 'dark' ||
        (value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDark);
}

export function useAppearance() {
    onMounted(() => {
        appearance.value = getStoredAppearance();
        applyAppearance(appearance.value);
    });

    function updateAppearance(value: Appearance) {
        appearance.value = value;
        localStorage.setItem('appearance', value);
        applyAppearance(value);
    }

    return {
        appearance,
        updateAppearance,
    };
}