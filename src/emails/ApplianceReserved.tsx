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

interface ApplianceReservedProps {
  appliance: Appliances;
  reservation: Reservations;
}

const ApplianceReserved = ({
  appliance,
  reservation,
}: ApplianceReservedProps) => {
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
                    width={50}
                    height={50}
                  />
                </Link>
              </Column>
              <Column>
                <Text className="text-5xl">Jenkins Electric LLC.</Text>
              </Column>
            </Row>
            <Row>
              <Text>
                You requested{' '}
                <Link
                  href={`https://jenkinselectric.llc/appliances/${appliance.id}`}
                >
                  {appliance.applianceName}
                </Link>{' '}
                to be reserved for you. Someone will be reaching out soon to
                discuss your reservation with you!
              </Text>
            </Row>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default ApplianceReserved;

ApplianceReserved.PreviewProps = {
  appliance: { applianceName: 'Test Appliance 1' },
  reservation: {},
} as ApplianceReservedProps;
