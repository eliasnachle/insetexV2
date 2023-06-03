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

export const BudgetRecipeMail = () => (
  <Html>
    <Head />
    <Preview>Apple Receipt</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section>
          <Column>
            <Img src="/logo.png" width="auto" height="42" alt="Insetex" />
          </Column>
        </Section>
        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>E-mail:</Text>
                  <Link
                    style={{
                      ...informationTableValue,
                      color: '#15c',
                      textDecoration: 'underline',
                    }}
                  >
                    zeno.rocha@gmail.com
                  </Link>
                </Column>
              </Row>

              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>INVOICE DATE</Text>
                  <Text style={informationTableValue}>18 Jan 2023</Text>
                </Column>
              </Row>

              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>ORDER ID</Text>
                  <Link
                    style={{
                      ...informationTableValue,
                      color: '#15c',
                      textDecoration: 'underline',
                    }}
                  >
                    ML4F5L8522
                  </Link>
                </Column>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>DOCUMENT NO.</Text>
                  <Text style={informationTableValue}>186623754793</Text>
                </Column>
              </Row>
            </Column>
            <Column style={informationTableColumn} colSpan={2}>
              <Text style={informationTableLabel}>BILLED TO</Text>
              <Text style={informationTableValue}>
                Visa .... 7461 (Apple Pay)
              </Text>
              <Text style={informationTableValue}>Zeno Rocha</Text>
              <Text style={informationTableValue}>2125 Chestnut St</Text>
              <Text style={informationTableValue}>San Francisco, CA 94123</Text>
              <Text style={informationTableValue}>USA</Text>
            </Column>
          </Row>
        </Section>
        <Section style={productTitleTable}>
          <Text style={productsTitle}>App Store</Text>
        </Section>
        <Section>
          <Column style={{ width: '64px' }}>
            <Img
              src="/logo.png"
              width="64"
              height="64"
              alt="HBO Max"
              style={productIcon}
            />
          </Column>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>HBO Max: Stream TV &amp; Movies</Text>
            <Text style={productDescription}>HBO Max Ad-Free (Monthly)</Text>
            <Text style={productDescription}>Renews Aug 20, 2023</Text>
            <Link
              href="https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?cc=us&amp;id=1497977514&amp;o=i&amp;type=Subscription%20Renewal"
              style={productLink}
              data-saferedirecturl="https://www.google.com/url?q=https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?cc%3Dus%26id%3D1497977514%26o%3Di%26type%3DSubscription%2520Renewal&amp;source=gmail&amp;ust=1673963081204000&amp;usg=AOvVaw2DFCLKMo1snS-Swk5H26Z1"
            >
              Write a Review
            </Link>
            <span style={divisor}>|</span>
            <Link
              href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a=1497977514&amp;cc=us&amp;d=683263808&amp;o=i&amp;p=29065684906671&amp;pli=29092219632071&amp;s=1"
              style={productLink}
              data-saferedirecturl="https://www.google.com/url?q=https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a%3D1497977514%26cc%3Dus%26d%3D683263808%26o%3Di%26p%3D29065684906671%26pli%3D29092219632071%26s%3D1&amp;source=gmail&amp;ust=1673963081204000&amp;usg=AOvVaw3y47L06B2LTrL6qsmaW2Hq"
            >
              Report a Problem
            </Link>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>$14.99</Text>
          </Column>
        </Section>
        <Hr style={productPriceLine} />
        <Section align="right">
          <Column style={tableCell} align="right">
            <Text style={productPriceTotal}>TOTAL</Text>
          </Column>
          <Column style={productPriceVerticalLine} />
          <Column style={productPriceLargeWrapper}>
            <Text style={productPriceLarge}>$14.99</Text>
          </Column>
        </Section>
        <Hr style={productPriceLineBottom} />
        <Section>
          <Column align="center" style={block}>
            <Img src={'/logo.png'} width="auto" height="17" alt="Apple Card" />
          </Column>
        </Section>
        <Text style={footerCopyright}>
          Copyright © 2023 Insetex. <br />{' '}
          <Link href="http://insetex.com.br/">All rights reserved</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export default BudgetRecipeMail

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

const tableCell = { display: 'table-cell' }

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

const productIcon = {
  margin: '0 0 0 20px',
  borderRadius: '14px',
  border: '1px solid rgba(128,128,128,0.2)',
}

const productTitle = { fontSize: '12px', fontWeight: '600', ...resetText }

const productDescription = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  ...resetText,
}

const productLink = {
  fontSize: '12px',
  color: 'rgb(0,112,201)',
  textDecoration: 'none',
}

const divisor = {
  marginLeft: '4px',
  marginRight: '4px',
  color: 'rgb(51,51,51)',
  fontWeight: 200,
}

const productPriceTotal = {
  margin: '0',
  color: 'rgb(102,102,102)',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
}

const productPrice = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
}

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
}

const productPriceWrapper = {
  display: 'table-cell',
  padding: '0px 20px 0px 0px',
  width: '100px',
  verticalAlign: 'top',
}

const productPriceLine = { margin: '30px 0 0 0' }

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: 'rgb(238,238,238)',
}

const productPriceLargeWrapper = { display: 'table-cell', width: '90px' }

const productPriceLineBottom = { margin: '0 0 75px 0' }

const block = { display: 'block' }

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
}
