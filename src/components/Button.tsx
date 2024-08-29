import { createContext, useContext } from 'react'

import clsx from 'clsx'
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Variants = 'primary' | 'secondary'

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants
  isLoading?: boolean
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button({ variant = 'primary', children, isLoading, className, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        'h-11 flex-row items-center justify-center rounded-xl gap-2 px-2',
        {
          'bg-green-50': variant === 'primary',
          'bg-green-900': variant === 'secondary',
        },
        className
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className="text-white" /> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  )
}

function Title({ children, className }: TextProps) {
  const { variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx(
        'text-base font-semibold',
        {
          'text-white': variant === 'primary',
          'text-green-500': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </Text>
  )
}

Button.Title = Title

export { Button }
