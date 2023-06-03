import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ICustomerData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactRecipeMail = (customerData: ICustomerData) => (
  <Html>
    <Head />
    <Preview>Mensagem recebida!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Column>
            <Img
              src="/logo.png"
              width="auto"
              height="42"
              alt="Insetex"
            />
          </Column>
        </Section>
        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
              <Row>
              <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Nome:</Text>
                  <Text style={informationTableLabel}>{customerData.name}</Text>
                </Column>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>E-mail:</Text>
                  <Text style={informationTableValue}>{customerData.email}</Text>
                </Column>
              </Row>

              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Telefone:</Text>
                  <Text style={informationTableLabel}>{customerData.phone}</Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>
        <Section style={productTitleTable}>
          <Text style={productsTitle}>Mensagem</Text>
        </Section>
        <Section>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={informationTableValue}>{customerData.message}</Text>
          </Column>
        </Section>
        <Hr style={productPriceLine} />
        <Hr style={productPriceLineBottom} />
        <Section>
          <Column align="center" style={block}>
            <Img
              src={`/logo.png`}
              width="auto"
              height="17"
              alt="Apple Card"
            />
          </Column>
        </Section>                             
        <Text style={footerCopyright}>
          Copyright © 2023 Insetex. <br />{' '}
          <Link href="http://insetex.com.br/">All rights reserved</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactRecipeMail;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
};

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
};

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
};

const informationTableRow = {
  height: '46px',
};

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
};

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
};

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: '10px 0 15px 0',
  height: '24px',
};

const productsTitle = {
  background: '#fafafa',
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const productIcon = {
  margin: '0 0 0 20px',
  borderRadius: '14px',
  border: '1px solid rgba(128,128,128,0.2)',
};

const productTitle = { fontSize: '12px', fontWeight: '600', ...resetText };

const productDescription = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  ...resetText,
};

const productLink = {
  fontSize: '12px',
  color: 'rgb(0,112,201)',
  textDecoration: 'none',
};

const divisor = {
  marginLeft: '4px',
  marginRight: '4px',
  color: 'rgb(51,51,51)',
  fontWeight: 200,
};

const productPriceTotal = {
  margin: '0',
  color: 'rgb(102,102,102)',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
};

const productPrice = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
};

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
};

const productPriceWrapper = {
  display: 'table-cell',
  padding: '0px 20px 0px 0px',
  width: '100px',
  verticalAlign: 'top',
};

const productPriceLine = { margin: '30px 0 0 0' };

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: 'rgb(238,238,238)',
};

const productPriceLargeWrapper = { display: 'table-cell', width: '90px' };

const productPriceLineBottom = { margin: '0 0 75px 0' };

const block = { display: 'block' };

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};