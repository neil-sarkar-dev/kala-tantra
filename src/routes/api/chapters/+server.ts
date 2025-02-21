import { json } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';

export const prerender = true;

export async function GET() {
    try {
        const chaptersDir = path.join(process.cwd(), 'src', 'chapters');
        const files = await fs.readdir(chaptersDir);
        
        const chapters = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const name = file.replace('.md', '');
                const number = parseInt(name.replace('chapter_', ''));
                return {
                    title: `Chapter ${number}`,
                    path: `/chapters/${name}`,
                    number
                };
            })
            .sort((a, b) => a.number - b.number);
            
        return json(chapters);
    } catch (e) {
        console.error('Error loading chapters:', e);
        return json([]);
    }
}