import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export const entries = () => {
    return [
        { slug: 'chapter_01' },
        { slug: 'chapter_02' }
    ];
};

export const load = (async ({ params }) => {
    try {
        // During prerendering, read directly from static directory
        const staticPath = path.join('static', 'chapters', `${params.slug}.md`);
        const content = fs.readFileSync(staticPath, 'utf-8');
        const html = marked(content);
        
        return {
            html,
            title: `Chapter ${params.slug.replace('chapter_', '')}`,
            slug: params.slug
        };
    } catch (e) {
        console.error('Error loading chapter:', e);
        throw error(404, `Chapter not found`);
    }
}) satisfies PageServerLoad;