import { ContactFormData } from '@/interfaces/ContactFormSchema';
import {
  Html,
  Body,
  Link,
  Container,
  Text,
  Preview,
  Tailwind,
  Img,
  Row,
  Column,
} from '@react-email/components';

interface CustomerContactProps {
  formData: ContactFormData;
}

const CustomerContact = ({ formData }: CustomerContactProps) => {
  return (
    <Html>
      <Preview>Someone will reach out to you soon.</Preview>
      <Body>
        <Tailwind>
          <Container>
            <Row>
              <Column className="w-1/4">
                <Link href="https://jenkinselectric.llc">
                  <Img
                    alt="Image of JELLC logo"
                    src="https://mediacdn.jenkinselectric.llc/images/logo.jpg"
                    width={70}
                    height={70}
                  />
                </Link>
              </Column>
              <Column>
                <Text className="text-5xl">Jenkins Electric LLC.</Text>
              </Column>
            </Row>
            <Row>
              <Text>
                Thank you {formData.name} for contacting us! Somone will reach
                out to you soon to help you with your needs.
              </Text>
            </Row>

            <Row>
              <Text>You said: {formData.comments}</Text>
            </Row>

            <Row>
              <Text>
                With contact information: {formData.email}{' '}
                {formData.phoneNumber}
              </Text>
            </Row>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default CustomerContact;

CustomerContact.PreviewProps = {
  formData: {},
} as CustomerContactProps;
