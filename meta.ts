export interface Source {
  /** Any source the `skills` CLI accepts: `owner/repo`, `owner/repo/sub/path`, ... */
  source: string
  category: string
  /** Skill names to pick; omitted means every skill in the source. */
  skills?: string[]
}

/**
 * Skills hosted in other GitHub repositories.
 * Your own skills live in `skills/<name>/SKILL.md` instead and need no entry here.
 */
export const sources: Source[] = [
  {
    source: 'vercel-labs/skills',
    category: 'Workflow',
    skills: [
      'find-skills',
    ],
  },
]
