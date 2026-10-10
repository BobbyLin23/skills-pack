# @bobbylin23/skills

bobbylin23's curated [agent skills](https://agentskills.io): skills I wrote myself plus hand-picked skills from across the ecosystem, declared in one package so a project gets all of them with a single install.

Powered by [skills-npm](https://github.com/antfu/skills-npm), modeled on [antfu/skills-pack](https://github.com/antfu/skills-pack).

## Use in a project

Install [skills-npm](https://github.com/antfu/skills-npm) and this pack as dev dependencies straight from GitHub, then let skills-npm wire itself into your `prepare` script:

```bash
pnpm add -D skills-npm github:bobbylin23/skills-pack
pnpm exec skills-npm setup
```

(npm: `npm i -D skills-npm github:bobbylin23/skills-pack && npx skills-npm setup`.)

`setup` adds `"prepare": "skills-npm"` to your `package.json` and runs the first sync. From then on every install keeps the skills in sync:

```json
{
  "scripts": {
    "prepare": "skills-npm"
  },
  "devDependencies": {
    "@bobbylin23/skills": "github:bobbylin23/skills-pack",
    "skills-npm": "^4.0.0"
  }
}
```

What you get:

- Every skill listed below lands in `.agents/skills/<name>` and is linked into the skill directories of the agents detected on your machine (Claude Code, Cursor, OpenCode, Codex, Amp, ...). Pass `--agents claude-code,cursor` to choose explicitly.
- `skills-npm-lock.json` and `skills-lock.json` record what came from where. Commit them.
- Removing `@bobbylin23/skills` from your dependencies removes the skills on the next sync.

To pick up a newer version of this pack, update the dependency (`pnpm update @bobbylin23/skills`, or pin a release with `github:bobbylin23/skills-pack#v0.2.0`) and run `pnpm exec skills-npm`. Skills from other repositories track their default branch; pull their latest content with `pnpm dlx skills update`.

## Skills

<!-- skills:start -->

### My Skills

| Skill | Description | Source |
| --- | --- | --- |
| [conventional-commits](skills/conventional-commits/SKILL.md) | Write git commit messages in the Conventional Commits format. | This pack |

### Workflow

| Skill | Description | Source |
| --- | --- | --- |
| [find-skills](https://github.com/vercel-labs/skills/blob/HEAD/skills/find-skills/SKILL.md) | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. | [vercel-labs/skills](https://github.com/vercel-labs/skills) |

### Design & UI

| Skill | Description | Source |
| --- | --- | --- |
| [frontend-design](https://github.com/anthropics/skills/blob/HEAD/skills/frontend-design/SKILL.md) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. | [anthropics/skills](https://github.com/anthropics/skills) |

<!-- skills:end -->

## Maintaining this pack

- **Your own skill:** create `skills/<name>/SKILL.md` with `name` (matching the folder) and `description` frontmatter.
- **A skill from another repo:** add it to [`meta.ts`](./meta.ts).

Then run `pnpm gen` to sync the `skills` field in `package.json` and the table above, and `pnpm test` to install the pack into a temporary project and check every skill lands.

## License

[MIT](./LICENSE) License © bobbylin23
