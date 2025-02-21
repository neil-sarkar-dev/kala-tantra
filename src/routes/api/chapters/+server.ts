import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export const prerender = true;

export async function GET({ url }: RequestEvent) {
    try {
        const base = url.pathname.startsWith('/kala-tantra') ? '/kala-tantra' : '';
        const chapterCount = 16;
        
        const chapters = Array.from({ length: chapterCount }, (_, i) => {
            const number = i + 1;
            const filename = `chapter_${String(number).padStart(2, '0')}`;
            return {
                title: `Chapter ${number}`,
                path: `${base}/chapters/${filename}`,
                number
            };
        });
        
        return json(chapters);
    } catch (e) {
        console.error('Error loading chapters:', e);
        return json([]);
    }
}