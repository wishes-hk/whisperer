import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Text, Group, Button, createStyles, MantineTheme, useMantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, MIME_TYPES } from '@mantine/dropzone';
import { CloudUpload } from 'tabler-icons-react';

interface CustomDropzoneProp {
  onFileChange: Dispatch<SetStateAction<File | undefined>>;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));

function getActiveColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
      ? theme.colors.red[6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black;
}

export function CustomDropzone({ onFileChange }: CustomDropzoneProp) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const openRef = useRef<() => void>();

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef as unknown as React.ForwardedRef<() => void | undefined>}
        multiple={false}
        onDrop={(files: File[]) => onFileChange(files[0])}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg, MIME_TYPES.gif]}
        maxSize={5 * 1024 ** 2}
      >
        {(status) => (
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <CloudUpload size={50} color={getActiveColor(status, theme)} />
            </Group>
            <Text
              align="center"
              weight={700}
              size="lg"
              mt="xl"
              sx={{ color: getActiveColor(status, theme) }}
            >
              {status.accepted
                ? 'Drop files here'
                : status.rejected
                  ? 'Image less than 10mb'
                  : 'Upload Your Base Image'}
            </Text>
            <Text align="center" size="sm" mt="xs" color="dimmed">
              Drag and drop file here to upload. We accept only <i>.jpeg, .png, .svg, .gif</i>
              &nbsp;file that are less than 10mb in size.
            </Text>
          </div>
        )}
      </Dropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current && openRef.current()}>
        Select file
      </Button>
    </div>
  );
}
