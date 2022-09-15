import React from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header,
  Group,
  Text,
  Burger,
  Anchor,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { useRouter } from 'next/router';

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderWrapperProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function HeaderWrapper({ links }: HeaderWrapperProps) {
  const router = useRouter();
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Anchor
        component="a"
        className={classes.link}
        key={link.link}
        onClick={(e: React.SyntheticEvent) => {
          e.preventDefault();
          router.push(link.link);
        }}
      >
        {link.label}
      </Anchor>
    );
  });

  const UserMenuSections = [
    { title: 'Application',
      items: [
        { link: '', label: 'Profile' },
        { link: '', label: 'Settings' },
      ],
    },
    { title: 'Danger Zone',
      items: [
        { link: '', label: 'Logout' },
      ],
    },
  ];

  return (
    <Header height={HEADER_HEIGHT}>
      <Group grow className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          <Text size="lg">Wishes</Text>
        </Group>
        <Group position="center" spacing={15} className={classes.links}>
          {items}
        </Group>
      </Group>
    </Header>
  );
}
