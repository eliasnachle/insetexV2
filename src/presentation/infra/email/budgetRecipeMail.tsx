import { BudgetState, IService } from '@/domain/types/budget/budgetTypes'
import typeClient from '@/presentation/components/contact/budget/addressMap'
import servicesMap from '@/presentation/components/contact/budget/servicesMap'
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
} from '@react-email/components'

export default function BudgetRecipeMail(budgetData: BudgetState) {
  return (
    <Html>
      <Head />
      <Preview>Orcamento Recebido</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Column>
              <Img src="https://www.insetex.com.br/logo.png" width="auto" height="42" alt="Insetex" />
            </Column>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Nome:</Text>
                    <Text style={informationTableValue}>{budgetData.userData.name.inputValue}</Text>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Telefone:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.userData.phone.inputValue}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>E-mail:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.userData.phone.inputValue}
                    </Text>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Mensagem:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.userData.message.inputValue}
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
          <Section style={productTitleTable}>
            <Text style={productsTitle}>Endereço</Text>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Tipo de cliente:</Text>
                    <Text style={informationTableValue}>
                      {typeClient.find((it) => it.name === budgetData.addressData.typeClient.inputValue)?.label}
                    </Text>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Complemento:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.addressData.complement.inputValue}
                    </Text>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Referência:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.addressData.reference.inputValue}
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>Endereço:</Text>
                    <Text style={informationTableValue}>
                      {budgetData.addressData.address.inputValue}, {budgetData.addressData.addressNumber.inputValue} - {budgetData.addressData.zipCode.inputValue}
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
          <Section style={productTitleTable}>
            <Text style={productsTitle}>Serviços</Text>
          </Section>
          <Section>
            {budgetData.serviceData.services
              .filter((it: IService) => it.checked)
              .map((it: IService, index: number) => (
                <Row key={index} style={{ marginLeft: '30px', marginTop: '10px' }}>
                  <Text style={productTitle}>{servicesMap.find((c) => c.name === it.name)?.label}</Text>
                  <Text style={productDescription}>{servicesMap.find((c) => c.name === it.name)?.description}</Text>
                </Row>
              ))}
          </Section>
          <Hr style={productPriceLine} />
          <Hr style={productPriceLineBottom} />
          <Section>
            <Column align="center" style={block}>
              <Img src={'https://www.insetex.com.br/logo.png'} width="auto" height="17" alt="Apple Card" />
            </Column>
          </Section>
          <Text style={footerCopyright}>
            Copyright © 2024 Insetex. <br />{' '}
            <Link href="http://insetex.com.br/">All rights reserved</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
}

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
}

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
}

const informationTableRow = {
  height: '46px',
}

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
}

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
}

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const productTitleTable = {
  ...informationTable,
  margin: '30px 0 15px 0',
  height: '24px',
}

const productsTitle = {
  background: '#fafafa',
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
}

const productTitle = { fontSize: '12px', fontWeight: '600', ...resetText }

const productDescription = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  ...resetText,
}

const productPriceLine = { margin: '30px 0 0 0' }

const productPriceLineBottom = { margin: '0 0 75px 0' }

const block = { display: 'block' }

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
}
