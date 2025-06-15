import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Img,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

interface OrderProduct {
  productId: string;
  name?: string;
  image?: string;
  size?: string;
  qty?: number;
  price?: number;
}

interface ShippingAddress {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

interface OrderConfirmationEmailProps {
  orderId: string;
  customerName: string;
  orderDate: string;
  products: OrderProduct[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  orderStatus: string;
  subtotal: number;
  discount?: number;
  shippingPrice: number;
  taxPrice?: number;
  total: number;
}

export const OrderConfirmationEmail = ({
  orderId,
  customerName,
  orderDate,
  products,
  shippingAddress,
  paymentMethod,
  orderStatus,
  subtotal,
  discount = 0,
  shippingPrice,
  taxPrice = 0,
  total,
}: OrderConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your VibeCart Order Confirmation - Order #{orderId}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Order Confirmation</Heading>
          <Text style={text}>Dear {customerName},</Text>
          <Text style={text}>
            Thank you for your order! We're excited to confirm that your order
            has been received and is being processed.
          </Text>

          {/* Order Details Section */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              Order Details
            </Heading>
            <Text style={orderDetail}>
              Order Number: <span style={orderValue}>{orderId}</span>
            </Text>
            <Text style={orderDetail}>
              Order Date: <span style={orderValue}>{orderDate}</span>
            </Text>
            <Text style={orderDetail}>
              Order Status: <span style={statusBadge}>{orderStatus}</span>
            </Text>
            <Text style={orderDetail}>
              Payment Method: <span style={orderValue}>{paymentMethod}</span>
            </Text>
          </Section>

          {/* Products Table */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              Ordered Items
            </Heading>
            {products.map((product, index) => (
              <Row key={index} style={productRow}>
                <Column style={imageColumn}>
                  <Img
                    src={product.image}
                    alt={product.name}
                    width="80"
                    height="80"
                    style={productImage}
                  />
                </Column>
                <Column style={productDetailsColumn}>
                  <Text style={productName}>{product.name}</Text>
                  <Text style={productMeta}>
                    Size: {product.size} • Qty: {product.qty}
                  </Text>
                  <Text style={productPrice}>
                    ₹{(product.price || 0).toFixed(2)}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          {/* Shipping Address */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              Shipping Address
            </Heading>
            <Text style={address}>
              {shippingAddress.firstName} {shippingAddress.lastName}
              <br />
              {shippingAddress.address1}
              {shippingAddress.address2 && (
                <>
                  <br />
                  {shippingAddress.address2}
                </>
              )}
              <br />
              {shippingAddress.city}, {shippingAddress.state}{" "}
              {shippingAddress.zipCode}
              <br />
              {shippingAddress.country}
              <br />
              Phone: {shippingAddress.phoneNumber}
            </Text>
          </Section>

          {/* Order Summary */}
          <Section style={section}>
            <Heading as="h2" style={h2}>
              Order Summary
            </Heading>
            <Row style={summaryRow}>
              <Column style={summaryLabel}>Subtotal:</Column>
              <Column style={summaryValue}>₹{subtotal.toFixed(2)}</Column>
            </Row>
            {discount > 0 && (
              <Row style={summaryRow}>
                <Column style={summaryLabel}>Discount:</Column>
                <Column style={summaryValue}>-₹{discount.toFixed(2)}</Column>
              </Row>
            )}
            <Row style={summaryRow}>
              <Column style={summaryLabel}>Shipping:</Column>
              <Column style={summaryValue}>₹{shippingPrice.toFixed(2)}</Column>
            </Row>
            {taxPrice > 0 && (
              <Row style={summaryRow}>
                <Column style={summaryLabel}>Tax:</Column>
                <Column style={summaryValue}>₹{taxPrice.toFixed(2)}</Column>
              </Row>
            )}
            <Hr style={divider} />
            <Row style={totalRow}>
              <Column style={summaryLabel}>Total:</Column>
              <Column style={summaryValue}>₹{total.toFixed(2)}</Column>
            </Row>
          </Section>

          <Text style={footer}>
            If you have any questions about your order, please contact our
            customer service team.
          </Text>

          <Text style={footer}>
            Best regards,
            <br />
            The VibeCart Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "5px",
  margin: "0 auto",
  padding: "45px",
  width: "600px",
};

const h1 = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 15px",
  textAlign: "center" as const,
};

const h2 = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 15px",
};

const text = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "24px 0",
};

const section = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "5px",
  margin: "24px 0",
  padding: "24px",
};

const orderDetail = {
  color: "#666666",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "12px 0",
};

const orderValue = {
  color: "#000",
  fontWeight: "bold",
};

const statusBadge = {
  backgroundColor: "#e5f6fd",
  borderRadius: "4px",
  color: "#0284c7",
  display: "inline-block",
  fontWeight: "bold",
  padding: "4px 12px",
};

const productRow = {
  borderBottom: "1px solid #f0f0f0",
  margin: "12px 0",
  padding: "12px 0",
};

const imageColumn = {
  width: "80px",
  paddingRight: "16px",
};

const productImage = {
  borderRadius: "4px",
  objectFit: "cover" as const,
};

const productDetailsColumn = {
  verticalAlign: "top",
};

const productName = {
  color: "#000",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const productMeta = {
  color: "#666666",
  fontSize: "12px",
  margin: "0 0 8px",
};

const productPrice = {
  color: "#000",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const address = {
  color: "#666666",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0",
};

const summaryRow = {
  margin: "8px 0",
};

const summaryLabel = {
  color: "#666666",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  padding: "4px 0",
};

const summaryValue = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "4px 0",
  textAlign: "right" as const,
};

const divider = {
  borderTop: "1px solid #f0f0f0",
  margin: "16px 0",
};

const totalRow = {
  fontSize: "16px",
  fontWeight: "bold",
};

const footer = {
  color: "#666666",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "24px",
  margin: "48px 0 0",
  textAlign: "left" as const,
};
