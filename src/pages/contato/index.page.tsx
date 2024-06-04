import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from 'phosphor-react';

import {
  ContactButtonLink,
  ContactContainer,
  ContactContent,
  ContactContentTitle,
  ContactInformations,
  ContactDetailsInformations,
} from './styles';

export default function Contact() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Contato | Liga Escolar "
        description="Entre em contato com a Liga Escolar."
      />

      <ContactContainer>
        <Head>
          <title>Contato | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <ContactContent>
          <ContactContentTitle>
            <Heading size="4xl" color="gray-700">
              Entre em contato com a gente. {<br />} Será um prazer
              atendê-lo(a)!
            </Heading>
            <Text size="md" color="gray-700">
              Entre em contato com a Liga Escolar, queremos {<br />} tirar suas
              dúvidas, ouvir suas críticas e sugestões.
            </Text>

            <ContactButtonLink>
              <Link
                href="https://api.whatsapp.com/send?phone=+5581993139096&text=Olá! Gostaria de mais informações sobre a liga escolar."
                target="_blank"
              >
                <WhatsappLogo size={24} />
                Entrar em contato
              </Link>
            </ContactButtonLink>
          </ContactContentTitle>

          <ContactInformations>
            <ContactDetailsInformations>
              <Phone size={24} />
              <Text size="sm" color="gray-700">
                81 99313-9096
              </Text>
            </ContactDetailsInformations>

            <ContactDetailsInformations>
              <MapPin size={24} />
              <Text size="sm" color="gray-700">
                R. Pedro Lasserre de Vasconcelos, 81 - São Francisco {<br />}
                Caruaru - PE
              </Text>
            </ContactDetailsInformations>

            <ContactDetailsInformations>
              <EnvelopeSimple size={24} />
              <Text size="sm" color="gray-700">
                contato@example.com
              </Text>
            </ContactDetailsInformations>
          </ContactInformations>
        </ContactContent>

        <Footer />
      </ContactContainer>
    </>
  );
}
