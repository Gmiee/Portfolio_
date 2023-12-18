'use client'
import { useRef } from 'react';
import Link from 'next/link';
import { VStack } from '@chakra-ui/react';
import { IoMenu } from "react-icons/io5";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button m="2" ref={btnRef} colorScheme="gray" onClick={onOpen}>
      <IoMenu size='30px' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" borderBottomWidth="1px">
            J E N I S H
          </DrawerHeader>

          <DrawerBody p="4"  m="auto">
            <VStack>
            <Link className='text-xl' href="/" onClick={onClose}>Home</Link>
            <Link className='text-xl' href="/Contact" onClick={onClose}>Contact</Link>
            {/* <Link className='text-xl' href="/Blog" onClick={onClose}>Blog</Link> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
