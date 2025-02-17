import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Caio Leto</Text>
                    <Text color="gray.300" fontSize="small">
                        caioleto10@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Caio Leto" src="https://github.com/Caio-Leto.png" />
        </Flex>
    )
}