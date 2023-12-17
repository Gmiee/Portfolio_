'use client'
import { useRef } from 'react';
import Link from 'next/link';
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

          <DrawerBody p="4" m="auto">
            <Link href="/Contact">Contact</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
