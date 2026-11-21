# claude-mods

Mods for Claude Code: themes and other changes to how Claude looks and behaves. Each mod lives in its own folder under `plugins/`, and this repository is a marketplace that lists them all, so any of them installs with one line.

## Mods

| Mod | What it does |
| --- | --- |
| [reef-life](plugins/reef-life) | An animated backdrop for the desktop app: a glowing night reef with a turtle and a manta ray, jellyfish, two fish schools, kelp, anemones, a clownfish, starfish, a crab, a seahorse and rising bubbles. Run `/reef-life` to apply it. |

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install reef-life --marketplace jalapenotim/claude-mods
```

Answer `y` to add the marketplace, then pick a scope (user scope loads it in every session).

The short `owner/repo` form clones over SSH. If you get `Host key verification failed` (a machine whose SSH has never connected to GitHub), use the HTTPS address instead. It needs no SSH setup:

```
/plugin install reef-life --marketplace https://github.com/jalapenotim/claude-mods.git
```

From a shell:

```bash
claude plugin install reef-life --marketplace jalapenotim/claude-mods
```

```bash
claude plugin install reef-life --marketplace https://github.com/jalapenotim/claude-mods.git
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `jalapenotim/claude-mods`, then Add plugin.

Backdrops draw in the Claude desktop and mobile apps, not in the terminal.

## Credits

Reef Life's scene is built on Night Reef from Anthropic's `theme-examples` plugin (Apache-2.0), with new creatures added on top.

## License

Apache-2.0. See [LICENSE](LICENSE).
