import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }: { params: { slug: string } }) => {
    try {
        const filePath = path.join(process.cwd(), 'src', 'chapters', `${params.slug}.md`);
        const content = await fs.readFile(filePath, 'utf-8');
        const html = marked(content);
        
        return {
            html,
            title: `Chapter ${params.slug.replace('chapter_', '')}`
        };
    } catch (e) {
        console.error('Error loading chapter:', e);
        throw error(404, `Chapter not found`);
    }
}) satisfies PageServerLoad;