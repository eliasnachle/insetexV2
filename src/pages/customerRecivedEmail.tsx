import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';

  export const CustomerRecivedEmail = () => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="/logo.png"
            width="auto"
            height="50"
            alt="Insetex"
            style={logo}
          />
          <Text style={paragraph}>Olá Elias,</Text>
          <Text style={paragraph}>
          Estamos comprometidos em atender às suas necessidades e oferecer as melhores soluções, ficamos à disposição para esclarecer dúvidas adicionais.
          </Text>
          <Section style={btnContainer}>
          </Section>
          <Text style={paragraph}>
            Atenciosamente,
            <br />
            Equipe Insetex
          </Text>
          <Hr style={hr} />
          <Text style={footer}> © 2023 Insetex Controle Tecnologico de Insetos</Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default CustomerRecivedEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };
  