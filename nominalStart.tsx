// file 1

export const githubUrl = process.env.GITHUB_URL as string
export const nodeEnv = process.env.NODE_ENV as string

export const fetchStarredRepos = (
  nodeEnv: string,
  githubUrl: string
): Promise<GithubRepo[]> => {
  if (nodeEnv === "production") {
    // log call
  }

  // prettier-ignore
  return fetch(`${githubUrl}/users/saitonakamura/starred`)
    .then(r => r.json());
}

// file 2

import React, { useState } from "react"

export const StarredRepos = () => {
  const [starredRepos, setStarredRepos] = useState<GithubRepo[] | null>(null)

  if (!starredRepos) return <div>Loading...</div>

  return (
    <ul>
      {starredRepos.map(repo => (
        <li key={repo.name}>{repo.name}</li>
      ))}
    </ul>
  )
}

type GithubRepo = {
  name: string
}
