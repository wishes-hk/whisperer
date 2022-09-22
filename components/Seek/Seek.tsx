import { useState } from 'react';
import { LockOpen } from 'tabler-icons-react';
import { Avatar, Button, Container, Group, Title, Text } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { CustomDropzone } from '../CustomDropzone/CustomDropzone';

export default function Seek() {
  const form = useForm({
    initialValues: {},
  });

  const apiBase = `http://${process.env.NEXT_PUBLIC_API_BASE || 'localhost:5000'}`;

  const [selectedFile, setSelectedFile] = useState<File>();

  function handleSubmit(file: File | undefined) {
    const formData = new FormData();
    if (file !== undefined) {
      formData.append('image', file);
    }

    fetch(`${apiBase}/api/seek`, {
      method: 'POST',
      mode: 'cors',
      body: formData,
    }).then(resp => resp.json())
      .then(data => {
      const downloadUrl = window.URL.createObjectURL(new Blob([data.message]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'message.txt');
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  return (
    <Container size="xs">
      <div>
        <Avatar>
          <LockOpen />
        </Avatar>
        <Title order={6}>
          Extract Your Secret
        </Title>
        <form onSubmit={form.onSubmit(() => handleSubmit(selectedFile))}>
          <Text size="md">
            Altered Image:
          </Text>
          <CustomDropzone onFileChange={setSelectedFile} />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </div>
    </Container>
  );
}
