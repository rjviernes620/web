import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERNAME = 'rjviernes620';
const PUBLIC_JSON_PATH = path.join(__dirname, '../public/github-data.json');
const DOCS_JSON_PATH = path.join(__dirname, '../docs/github-data.json');

async function main() {
  console.log(`Fetching GitHub data for ${USERNAME}...`);
  try {
    const headers = {
      'Accept': 'application/vnd.github.cloak-preview+json'
    };

    // If GITHUB_TOKEN is available, use it to avoid rate limits
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // 1. Fetch Profile Stats
    const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
    if (!profileRes.ok) throw new Error(`Profile fetch failed: ${profileRes.statusText}`);
    const profileData = await profileRes.json();
    
    const stats = {
      followers: profileData.followers,
      public_repos: profileData.public_repos,
      avatar_url: profileData.avatar_url,
      html_url: profileData.html_url,
      login: profileData.login,
      name: profileData.name || profileData.login
    };

    // 2. Fetch recent commits via Commit Search API
    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:${USERNAME}&sort=author-date&order=desc&per_page=4`,
      { headers }
    );
    if (!commitsRes.ok) throw new Error(`Commits search failed: ${commitsRes.statusText}`);
    const commitsData = await commitsRes.json();

    const commits = (commitsData.items || []).map(item => ({
      repo: item.repository.name,
      message: item.commit.message.split('\n')[0], // first line only
      date: new Date(item.commit.author.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      sha: item.sha.substring(0, 7),
      url: item.html_url
    }));

    const outputData = {
      stats,
      commits,
      updated_at: new Date().toISOString()
    };

    // Ensure directories exist
    fs.mkdirSync(path.dirname(PUBLIC_JSON_PATH), { recursive: true });
    fs.mkdirSync(path.dirname(DOCS_JSON_PATH), { recursive: true });

    // Write JSON files
    fs.writeFileSync(PUBLIC_JSON_PATH, JSON.stringify(outputData, null, 2));
    fs.writeFileSync(DOCS_JSON_PATH, JSON.stringify(outputData, null, 2));
    
    console.log('GitHub data successfully written to:');
    console.log(`- ${PUBLIC_JSON_PATH}`);
    console.log(`- ${DOCS_JSON_PATH}`);
  } catch (error) {
    console.error('Error fetching/writing GitHub data:', error);
    process.exit(1);
  }
}

main();
