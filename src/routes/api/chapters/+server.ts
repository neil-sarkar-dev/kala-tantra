import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export const prerender = true;

export async function GET({ url }: RequestEvent) {
    try {
        const base = url.pathname.startsWith('/kala-tantra') ? '/kala-tantra' : '';
        const chapterData = [
            { number: 1, filename: 'chapter_01' },
            { number: 2, filename: 'chapter_02' }
        ];
        
        const chapters = chapterData.map(({ number, filename }) => ({
            title: `Chapter ${number}`,
            path: `${base}/chapters/${filename}`,
            number
        }));
        
        return json(chapters);
    } catch (e) {
        console.error('Error loading chapters:', e);
        return json([]);
    }
}