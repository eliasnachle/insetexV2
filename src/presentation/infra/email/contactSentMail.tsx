import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export const ContactSentMail = (name: string) => (
  <Html>
    <Head />
    <Preview>Recebemos sua mensagem!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://www.insetex.com.br/logo.png"
          width="auto"
          height="50"
          alt="Insetex"
          style={logo}
        />
        <Text style={paragraph}>Olá {name},</Text>
        <Text style={paragraph}>
          Recebemos sua mensagem e nossa equipe está trabalhando para responder
          o mais breve possível.
        </Text>
        <Section style={btnContainer} />
        <Text style={paragraph}>
          Atenciosamente,
          <br />
          Equipe Insetex
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          © 2023 Insetex Controle Tecnologico de Insetos
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ContactSentMail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const logo = {
  margin: '0 auto',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const btnContainer = {
  textAlign: 'center' as const,
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
