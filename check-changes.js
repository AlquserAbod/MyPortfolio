const { execSync } = require('child_process');

const directory = process.argv[2];

const currentSha = process.env.VERCEL_GIT_COMMIT_SHA;
const previousSha = process.env.VERCEL_GIT_PREVIOUS_COMMIT_SHA || execSync('git rev-list --max-parents=0 HEAD').toString().trim();

console.log(`Current SHA: ${currentSha}`);
console.log(`Previous SHA: ${previousSha}`);

try {
  const changedFiles = execSync(`git diff --name-only ${previousSha}..${currentSha}`).toString().split('\n');
  const hasChanges = changedFiles.some(file => file.startsWith(directory));

  console.log(`changedFiles : ${changedFiles}`);
  console.log(`hasChanges : ${hasChanges}`);
  if (hasChanges) {
    console.log(`Changes detected in ${directory}`);
    process.exit(1);
  } else {
    console.log(`No changes detected in ${directory}`);
    process.exit(0);
  }
} catch (error) {
  console.error('Error checking changes:', error);
  process.exit(1);
}
