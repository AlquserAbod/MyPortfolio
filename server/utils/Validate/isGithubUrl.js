function isGitHubUrl(url) {
    // Regular expression to match GitHub repository URLs
    const githubUrlRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;
    return githubUrlRegex.test(url);
}

module.exports = isGitHubUrl;