import { Appliances, Reservations } from '@prisma/client';
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

interface EmployeeContactProps {
  appliance: Appliances;
  reservation: Reservations;
}

const EmployeeContact = ({ appliance, reservation }: EmployeeContactProps) => {
  return (
    <Html>
      <Preview>
        You requested {appliance.applianceName} to be reserved for you.
      </Preview>
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
                {reservation.firstName + ' ' + reservation.lastName} hass
                requested{' '}
                <Link
                  href={`https://jenkinselectric.llc/appliances/${appliance.id}`}
                >
                  {appliance.applianceName}
                </Link>{' '}
                to be reserved at {reservation.reservedAt.toLocaleString()}.
                Reach out at{' '}
                <Link href={`mailto:${reservation.email}`}>
                  {reservation.email}
                </Link>{' '}
                or call at{' '}
                <Link href={`tel:${reservation.phoneNumber}`}>
                  {reservation.phoneNumber}
                </Link>
              </Text>
            </Row>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default EmployeeContact;

EmployeeContact.PreviewProps = {
  appliance: { applianceName: 'Test Appliance 1' },
  reservation: {
    email: 'evandvance@gmail.com',
    phoneNumber: '7203237357',
    firstName: 'Evan',
    lastName: 'Vance',
    reservedAt: new Date(),
  },
} as EmployeeContactProps;
