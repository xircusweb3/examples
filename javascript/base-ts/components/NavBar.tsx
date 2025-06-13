import { HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { useHaptic } from "@xw3/maki-ts"
import { useRouter } from "next/router"
import React from "react"

interface RouteProps {
  path: string,
  label: string,
  theme?: any,
  urls?: [],
  renderIcon?: (active?: boolean) => React.ReactNode | null
}

interface NavLinkProps {
  theme?: any, 
  onClick?: any, 
  active: boolean,
  route: RouteProps
}

interface NavBarProps {
  theme?: any, 
  routes?: RouteProps[]
}

export const NavLink = ({ route, theme, active, ...rest }: NavLinkProps) => (
  <VStack flex={1} pb={5} {...rest} {...theme?.nav} {...(active && theme?.navActive)}>
    { route?.renderIcon && <Icon fontSize={30} {...theme?.navIcon}>{route?.renderIcon(active)}</Icon> }
    <Text display="none" {...theme?.navLabel}>{route?.label}</Text>
  </VStack>
)

const isActive = (url: string, path: string, urls: string[] = []) => {
  if (urls.length > 0) {
    return urls.indexOf(path) > -1
  }
  return url == path
}

export const NavBar = ({ routes = [], theme }: NavBarProps) => {
  const router = useRouter()
  const haptic = useHaptic()

  const handleRoute = (route: RouteProps) => {
    haptic()
    router.push(route?.path)
  }

  return (
    <HStack gap={0} w="full" {...theme?.navs}>
      {
        (routes || []).map((route: RouteProps)  => 
          <NavLink 
            route={route} 
            key={route?.path}
            theme={theme}
            active={isActive(route?.path, router?.asPath, route?.urls || [])}            
            onClick={() => handleRoute(route)}
            />
        )
      }
    </HStack>
  )
}

  // <Button flex={1} onClick={() => route('/')}>Apps</Button>
  // <Button flex={1} onClick={() => route('/graphs')}>Graphs</Button>      
  // <Button flex={1} onClick={() => route('/projects')}>Projects</Button>      
  // <Button flex={1} onClick={() => route('/settings')}>Settings</Button>