// src/app/api/github-stars/route.ts
import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO ?? 'aliseyedi01/Next.js-Portfolio';

interface RepoResponse {
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

export async function GET() {
    try {
        const headers: HeadersInit = {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'Next.js-Portfolio',
        };

        if (GITHUB_TOKEN) {
            headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
        }

        const url = `https://api.github.com/repos/${GITHUB_REPO}`;
        console.log('🌐 Fetching:', url);

        const response = await fetch(url, {
            headers,
            next: { revalidate: 3600 },
        });

        // console.log('📊 Status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ GitHub Error:', errorText);

            return NextResponse.json(
                {
                    error: `GitHub API error: ${response.statusText}`,
                    status: response.status,
                    details: errorText.substring(0, 200),
                },
                { status: response.status }
            );
        }

        const data: RepoResponse = await response.json();

        return NextResponse.json({
            stars: data.stargazers_count,
            forks: data.forks_count,
            url: data.html_url,
            repo: GITHUB_REPO,
        });
    } catch (error) {
        console.error('❌ Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch GitHub stars',
                message: error instanceof Error ? error.message : String(error),
            },
            { status: 500 },
        );
    }
}