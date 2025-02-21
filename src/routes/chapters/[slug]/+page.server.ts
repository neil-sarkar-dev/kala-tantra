import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export const entries = () => {
    return Array.from({ length: 16 }, (_, i) => ({
        slug: `chapter_${String(i + 1).padStart(2, '0')}`
    }));
};

export const load = (async ({ params }) => {
    try {
        // Try reading from src/chapters first, then fall back to static/chapters
        const srcPath = path.join('src', 'chapters', `${params.slug}.md`);
        const staticPath = path.join('static', 'chapters', `${params.slug}.md`);
        
        let content;
        try {
            content = fs.readFileSync(srcPath, 'utf-8');
        } catch {
            content = fs.readFileSync(staticPath, 'utf-8');
        }
        
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