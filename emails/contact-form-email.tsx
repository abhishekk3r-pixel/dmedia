import React from 'react'
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr } from "@react-email/components"
import { Tailwind } from '@react-email/tailwind'
import sendEmail from '@/actions/sendEmail'

type ContactFormEmailProps = {
  message: string,
  sender: string
}

function ContactFormEmail({ message, sender }: ContactFormEmailProps) {

 

  return (

    <Html>
      <Head />
      <Preview >A new message received</Preview>
      <Tailwind>
        <Body className=' bg-gray-900 text-white'>
          <Container>
            <Section className=''>
              <Heading className=' leading-tight'>You received the follwing message</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail