import React, { useState } from 'react';
import { Button, Text, Group, Modal, Title } from '@mantine/core';
import { getCookie, setCookies } from 'cookies-next';

export function CookieBanner() {
  const isAcknowledged = () => getCookie('consent-token') === undefined;

  const [opened, setOpened] = useState(isAcknowledged);

  const acceptCookies = () => {
    setCookies('consent-token', 'all');
    setOpened(false);
  };

  return (
    <Modal
      centered
      size="xl"
      opened={opened}
      onClose={acceptCookies}
      title={
        <Title order={3}>
          Welcome to Wishes Application
        </Title>
      }
    >
      <Text color="dimmed" size="md" mb="xs">
        Wishes use cookies or equivalent technologies to ensure the proper functioning and security
        of the site, to improve your experience, to personalise and improve the performance of
        advertisements and content, to compile traffic and browsing statistics, and to enable
        you to share content on social networks.
      </Text>
      <Text color="dimmed" size="md">
        Some of these cookies are subject to your consent. You can set your preferences
        by cookie purpose. You can change these choices at any time.
      </Text>
      <Group position="right" mt="sm">
        <Button variant="default" size="sm">
          Cookies preferences
        </Button>
        <Button
          variant="filled"
          size="sm"
          onClick={acceptCookies}
        >
          Accept all
        </Button>
      </Group>
    </Modal>
  );
}
