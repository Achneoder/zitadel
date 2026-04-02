module.exports = {
  branches: [
    { name: "next" },
    { name: "next-rc", prerelease: "rc" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/github",
      {
        draftRelease: true,
        successComment: false,
        releaseBodyTemplate: "Release <%= nextRelease.version %>",
      },
    ],
  ],
};
