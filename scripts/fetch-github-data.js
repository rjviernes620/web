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
    // 1. Fetch Profile Stats
    const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`);
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

    // 2. Fetch public events for commits
    const eventsRes = await fetch(`https://api.github.com/users/${USERNAME}/events/public`);
    if (!eventsRes.ok) throw new Error(`Events fetch failed: ${eventsRes.statusText}`);
    const eventsData = await eventsRes.json();

    const commits = [];
    for (const event of eventsData) {
      if (event.type === 'PushEvent' && event.payload && event.payload.commits) {
        for (const c of event.payload.commits) {
          commits.push({
            repo: event.repo.name.replace(`${USERNAME}/`, ''),
            message: c.message,
            date: new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            sha: c.sha.substring(0, 7),
            url: `https://github.com/${event.repo.name}/commit/${c.sha}`
          });
          if (commits.length >= 4) break;
        }
      }
      if (commits.length >= 4) break;
    }

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
