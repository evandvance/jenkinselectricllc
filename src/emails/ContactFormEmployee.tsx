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

interface ContactFormEmployeeProps {
  formData: ContactFormData;
}

const ContactFormEmployee = ({ formData }: ContactFormEmployeeProps) => {
  return (
    <Html>
      <Preview>{formData.name} has reached out to you.</Preview>
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
                {formData.name} has reached out using your websites contact
                form.
              </Text>
            </Row>

            <Row>
              <Text>They said: </Text>
            </Row>
            <Row>&quot;{formData.comments}&quot;</Row>

            <Row>
              <Text>
                Reach out to them at{' '}
                <Link href={`tel:${formData.phoneNumber}`}>
                  {formData.phoneNumber}
                </Link>
              </Text>
            </Row>
            <Row>
              {' '}
              <Text>
                Or email them at{' '}
                <Link href={`mailto:${formData.email}`}>{formData.email}</Link>
              </Text>
            </Row>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default ContactFormEmployee;

ContactFormEmployee.PreviewProps = {
  formData: {},
} as ContactFormEmployeeProps;
