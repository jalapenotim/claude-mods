import type { Register, ThemeSetArgs } from 'claude-code'

import { reefLifeSvg } from './scene'

const SCENE = 'reef-life'
const COMMAND = 'reef-life'

// Night Reef's glass and dark window, so panels read the same over the busier water.
const LOOK: ThemeSetArgs = {
  backdrop: { scene: SCENE, glass: { blur: 14, tint: '#0a1430', opacity: 0.4 } },
  overrideColorScheme: 'dark',
}

// Built once per load: the scene is pure string building, the same on every call.
let source: string | undefined

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    try {
      await $.command.register({ name: COMMAND, description: 'Apply the Reef Life backdrop (a busier Night Reef).' })
    } catch (error) {
      void $.ui.toast(`reef-life: /${COMMAND} is not available (${String(error)})`)
    }

    await $.theme.set(LOOK)

    return next(e)
  })

  on('command.run', { command: COMMAND }, async $ => {
    const set = await $.theme.set(LOOK)

    return { text: set.isDrawn ? 'Reef Life applied.' : `Reef Life set, but nothing draws it here: ${set.reason}` }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.scene !== SCENE || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)
    source ??= reefLifeSvg()

    return (
      <Svg
        isInteractive
        alt="Reef Life: a glowing night reef full of jellyfish, fish, kelp, a crab and a seahorse"
        source={source}
      />
    )
  })
}
