import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function Header() {
    const IsWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
          as="header"
          w="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
            <Logo />

            { IsWideVersion && <SearchBox /> }

            <Flex align="center" ml="auto" >
                <NotificationsNav />
                <Profile showProfileData={IsWideVersion}/>
            </Flex>
        </Flex>
    )
}