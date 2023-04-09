import { Card, Image, Group, createStyles, rem, Anchor } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

export default function BadgeCard({ data: { name, img, url } }) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={img} alt={name} height={240} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Anchor href={url} fz="lg" fw={500} target="_blank">
            {name}
          </Anchor>
        </Group>
      </Card.Section>
    </Card>
  );
}
