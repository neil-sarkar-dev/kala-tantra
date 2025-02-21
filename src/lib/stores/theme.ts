import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

// Initialize with dark mode as default
const initialTheme: Theme = browser 
    ? (localStorage.getItem('theme') as Theme || 'dark')
    : 'dark';

export const theme = writable<Theme>(initialTheme);

// Update localStorage and document class when theme changes
theme.subscribe((value) => {
    if (browser) {
        localStorage.setItem('theme', value);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(value);
    }
});