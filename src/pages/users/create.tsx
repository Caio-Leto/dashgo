import { Box, Button, Divider, Flex, Heading, HStack, Input, FormControl, FormLabel, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel>Nome completo</FormLabel>
                                <Input name="name" />
                            </FormControl>

                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input name="email" type="email" />
                            </FormControl>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel>Senha</FormLabel>
                                <Input name="password" type="password" />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Confirmação da senha</FormLabel>
                                <Input name="password_confirmation" type="password" />
                            </FormControl>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
