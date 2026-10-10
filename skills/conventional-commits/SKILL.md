---
name: conventional-commits
description: Write git commit messages in the Conventional Commits format. Use when committing changes or when asked to write a commit message.
---

# Conventional Commits

Write every commit message as:

```
<type>(<optional scope>): <summary>

<optional body>
```

- `type` is one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- `summary` is imperative, lowercase, has no trailing period, and stays under 72 characters.
- The body explains why the change was made, not what the diff shows. Wrap it at 72 characters.
- Mark breaking changes with `!` after the type (`feat!: ...`) and a `BREAKING CHANGE:` footer.

Examples:

```
fix(auth): refresh the token before it expires
feat!: drop support for Node 18
```
