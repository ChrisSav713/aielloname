import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeComboBox from '../themeCombobox/ThemeComboBox'
import ThemeSelector from '../themeSelector/ThemeSelector'
import styles from './Navbar.module.css'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { Flyout } from '../flyout/Flyout'

export default function Navbar() {
  let navigate = useNavigate()
  const [selected, setSelected] = useState('blue')
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const routeChange = (path_in) => {
    navigate(path_in)
  }

  const aboutItems = [
    {
      name: 'About Us',
      description: 'Learn about the practice',
      href: '/about'
    },
    {
      name: 'Contact Us',
      description: 'Get in touch with us',
      href: '/contact'
    },
    {
      name: 'Location',
      description: 'How to find us',
      href: '/location'
    },
    {
      name: 'Staff',
      description: 'Meet the staff',
      href: '/staff'
    }
  ]

  const philosophyItems = [
    {
      name: 'Our Practice Philosophy',
      description: 'Our Mission',
      href: '/philosophy'
    },
    {
      name: 'Future Projects',
      description: 'What we are working on',
      href: '/future-projects'
    }
  ]

  const resourceItems = [
    {
      name: 'Resources',
      description: 'Patient Resources',
      href: '/resources'
    },
    {
      name: 'Guidance',
      description: 'Help for patients',
      href: '/guidance'
    },
    {
      name: 'Tools',
      description: 'Tools to help you out',
      href: '/tools'
    }
  ]

  const trendItems = [
    {
      name: 'Trends',
      description: 'Trends in the industry',
      href: '/trends'
    },
    {
      name: 'News',
      description: 'News in the industry',
      href: '/news'
    },
    {
      name: 'Blog',
      description: 'What leaders in the industry are saying',
      href: '/blog'
    }
  ]

  const testimonialItems = [
    {
      name: 'Testimonials',
      description: 'Our patients in their own words',
      href: '/testimonials'
    }
  ]
  const handleclick = () => {
    navigate('/')
  }
  return (
    <>
      {/* <li>
          <ThemeComboBox {...{ selected, setSelected }} />
        </li> */}
      <Disclosure as='nav' className='bg-white shadow'>
        {({ open }) => (
          <>
            <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='relative flex justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className='flex items-center content-center justify-center flex-grow-1'>
                  <div className='flex items-center content-between justify-between center flex-grow-1'>
                    <a href='/'>
                      <img
                        className='w-auto h-8 px-5'
                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                        alt='Logo'
                        onClick={handleclick}
                      />
                    </a>
                    <Flyout
                      className='flex items-center pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent flex-grow-1 px-9 hover:border-gray-300 hover:text-gray-700'
                      title={'About'}
                      menuItems={aboutItems}
                    />

                    <Flyout
                      className='flex items-center pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent flex-grow-1 px-9 hover:border-gray-300 hover:text-gray-700'
                      title={'Philosophy'}
                      menuItems={philosophyItems}
                    />

                    <Flyout
                      className='flex items-center pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent flex-grow-1 px-9 hover:border-gray-300 hover:text-gray-700'
                      title={'Resources'}
                      menuItems={resourceItems}
                    />

                    <Flyout
                      className='flex items-center pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent flex-grow-1 px-9 hover:border-gray-300 hover:text-gray-700'
                      title={'Trends'}
                      menuItems={trendItems}
                    />

                    <Flyout
                      className='flex items-center pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent flex-grow-1 px-9 hover:border-gray-300 hover:text-gray-700'
                      title={'Testimonials'}
                      menuItems={testimonialItems}
                    />
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center content-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <div className='pr-6'>
                    <ThemeSelector />
                  </div>
                  {!user && (
                    <>
                      <button
                        className='px-1 py-1 mr-5 text-white bg-blue-500 rounded hover:bg-blue-700'
                        onClick={() => routeChange('/login')}
                      >
                        Login
                      </button>

                      <button
                        className='px-1 py-1 text-white bg-blue-500 rounded hover:bg-blue-700'
                        onClick={() => routeChange('/signup')}
                      >
                        Signup
                      </button>
                    </>
                  )}

                  {user && (
                    <>
                      <li className='flex items-center content-center align-middle'>
                        <span className='flex items-center content-center pr-5 align-middle'>
                          Hello, {user.displayName}!
                        </span>
                      </li>
                      <li>
                        <button
                          className='px-1 py-1 text-white bg-blue-500 rounded hover:bg-blue-700'
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='pt-2 pb-4 space-y-1'>
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50'
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                >
                  Calendar
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
