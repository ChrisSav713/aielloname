import { useTheme } from '../../hooks/useTheme'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { MoonIcon } from '@heroicons/react/24/solid'

import './ThemeSelector.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  const [enabled, setEnabled] = useState(false)

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
    setEnabled(!enabled)
  }
  return (
    <div className='theme-selector'>
      <div className='flex mode-toggle'>
        <MoonIcon className='w-6 h-6 mr-3 text-yellow-500' />
        <Switch
          checked={enabled}
          onChange={toggleMode}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
          )}
        >
          <span className='sr-only'>Use setting</span>
          <span
            aria-hidden='true'
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
