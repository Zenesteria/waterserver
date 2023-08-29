import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
 import { Formik, Form, Field, ErrorMessage } from "formik";
import VerifyIp from '@/services/VerifyEspIp';
import {useDispatch} from 'react-redux'
import { setOnline } from '@/redux/infoSlice';



export default function Verify() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
  return (
    <div className="mt-auto">
      <div
        onClick={onOpen}
        className="w-full flex items-center justify-center rounded-xl duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer font-bold text-white tracking-wider p-3 bg-green-400"
      >
        <h1 style={{ fontSize: "calc(1rem + 0.25vw)" }}>Connect</h1>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your ESP32 IP Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ ip: "" }}
              validate={(values:any) => {
                // const errors:any = {};
                // if (!values.email) {
                //   errors.email = "Required";
                // } else if (
                //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //   errors.email = "Invalid email address";
                // }
                // return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                const verified:boolean = await VerifyIp({IP:values.ip});

                if(verified){
                    dispatch(setOnline({
                        IP:values.ip,
                        status:1
                    }))
                    setSubmitting(false);
                    onClose();
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className='flex flex-col items-center'>
                  <Field className='border-2 rounded-lg p-3 mb-2 outline-none' placeholder='e.g. 192.168.93.1' type="text" name="ip" />
                  <ErrorMessage name="ip" component="div" />
                  <button className='w-fit px-4 py-2 rounded-xl' type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
