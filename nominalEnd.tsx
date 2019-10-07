// file 1

type Brand<T> = T & { readonly __brand: unique symbol }

type GithubUrl = Brand<string>
export const githubUrl = process.env.GITHUB_URL as GithubUrl

type NodeEnv = Brand<"production" | "development">
export const nodeEnv = process.env.NODE_ENV as NodeEnv

const fetchStarredRepos = (
  nodeEnv: NodeEnv,
  githubUrl: GithubUrl
): Promise<GithubRepo[]> => {
  if (nodeEnv === "production") {
    // log call
  }

  // prettier-ignore
  return fetch(`${githubUrl}/users/saitonakamura/starred`)
    .then(r => r.json());
}

// file 2

import React, { useEffect, useState } from "react"

export const StarredRepos = () => {
  const [starredRepos, setStarredRepos] = useState<GithubRepo[] | null>(null)

  useEffect(() => {
    fetchStarredRepos(nodeEnv, githubUrl).then(setStarredRepos)
  }, [])

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
