import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ChevronUp } from 'tabler-icons-react';

export default function ScrollTopButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 30, right: 50 }}>
      <Transition transition="slide-up" duration={200} mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            variant="filled"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            sx={{ height: '36px', width: '42px' }}
            color="blue"
          >
            <ChevronUp />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}
