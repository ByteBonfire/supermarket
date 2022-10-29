import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div class="agileits_header">
        <div class="container">
          <div class="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <a href="products.html">SHOP NOW</a>
            </p>
          </div>
          <div class="agile-login">
            <ul>
              <li>
                <a href="/signup"> Create Account </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/contactUs">Help</a>
              </li>
            </ul>
          </div>
          <div class="product_list_header">
            {/* <form action="#" method="post" class="last"> */}
            <div>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <button
                class="w3view-cart"
                type="submit"
                name="submit"
                value=""
                onClick={onOpen}
              >
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  {/* <ModalHeader>Modal Title</ModalHeader> */}
                  <ModalCloseButton />
                  <ModalBody>
                    <p>there is no item in cart</p>
                  </ModalBody>

                  <ModalFooter>
                    {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button> */}
                    {/* <Button variant="ghost">Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
