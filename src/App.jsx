import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Footer,
  Anchor,
  Center,
} from "@mantine/core";
import Card from "./Card";

const data = [
  {
    name: "Vyseart Project",
    img: "/240675995_3085994138191961_5753548231486970785_n.jpg",
    url: "https://www.instagram.com/vyseart.projekt/",
  },
  {
    name: "kundycrew",
    img: "/185128157_492882418713090_2184351288063370096_n.jpg",
    url: "https://www.instagram.com/kundycrew/",
  },
];

function App() {
  return (
    <Container my="xl" size="xs">
      <Title>Vyseart Projekt</Title>
      <Text display="inline-block" mt="xl" fz="lg">
        Hello fellow traveller,
      </Text>
      <Text mt="xs">
        if you, like me, found this site via a QR code in Prague (CZ), you'll be
        disappointed to know that the Vyseart Projekt website expired sometimes
        in 2022.
      </Text>

      <Text my="xs">
        I'm just a random person who decided to register the domain and link
        back to the project instagram profile – and other Czech art projects as
        I come across them, so this connection between physical and digital
        world does not become a dead end.
      </Text>

      <SimpleGrid
        mt="lg"
        mb="xl"
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {data.map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </SimpleGrid>

      <Footer>
        <Center pt="xl">
          <Text fz="sm">
            If you want your project listed please{" "}
            <Anchor
              target="_blank"
              href="https://github.com/cedmax/vyseart/issues"
            >
              get in touch
            </Anchor>
          </Text>
        </Center>
      </Footer>
    </Container>
  );
}

export default App;
