import { Avatar, Button, Container, Group, Textarea, Title, Text } from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Lock } from 'tabler-icons-react';
import { CustomDropzone } from '../CustomDropzone/CustomDropzone';

export default function HideSection() {
  const form = useForm({
    initialValues: {
      msg: '',
    },
  });

  const [selectedFile, setSelectedFile] = useState<File>();

  function handleSubmit(file: File | undefined, msg: string) {
    const formData = new FormData();
    if (file !== undefined) {
      formData.append('image', file);
    }
    formData.append('message', msg);

    console.log(formData);

    fetch('http://localhost:5000/api/hide', {
      method: 'POST',
      mode: 'cors',
      body: formData,
    }).then(resp => resp.blob())
      .then(blob => {
        const downloadUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'altered_image.png'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }

  return (
    <Container size="xs">
      <div>
        <Avatar>
          <Lock />
        </Avatar>
        <Title order={6}>
          Insert Your Secret
        </Title>
        <form onSubmit={form.onSubmit((values) => handleSubmit(selectedFile, values.msg))}>
          <Text size="md">
            Base Image:
          </Text>
          <CustomDropzone onFileChange={setSelectedFile} />
          <br />
          <Text size="md">
            Message to be inserted:
          </Text>
          <Textarea
            minRows={5}
            maxRows={5}
            placeholder="Insert your message here"
            {...form.getInputProps('msg')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </div>
    </Container>
  );
}
