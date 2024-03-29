import './Footer.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';

import { constaTelegram, email, gazPromNeft, mailTo } from '@/modules/api/links';
import { cn } from '@/utils/bem';

const cnFooter = cn('Footer');

export const Footer: React.FC = () => {
  return (
    <section className={cnFooter(null, ['Section_space_small'])}>
      <div className="Container">
        <Text
          className={cnFooter('Title', ['decorator decorator_indent-t_3xl decorator_indent-b_2xl'])}
          size="3xl"
          weight="bold"
          as="h2"
          lineHeight="2xs"
        >
          Остались вопросы?
        </Text>
        <div className="tpl-grid tpl-grid_m-columns_8 tpl-grid_l-columns_12 tpl-grid_col-gap_full decorator decorator_indent-b_6xl">
          <form
            className={cnFooter('Form', ['tpl-grid__fraction_m-col_5 tpl-grid__fraction_l-col_7'])}
          >
            <TextField
              size="l"
              type="textarea"
              minRows={3}
              maxRows={5}
              placeholder="Здесь можно задать вопрос о дизайн-системе или просто написать её разработчикам"
              className={cnFooter('Textarea', ['decorator decorator_indent-b_m'])}
            />
            <div className={cnFooter('EmailPlusSubmit')}>
              <TextField
                size="l"
                placeholder="Эл. почта"
                form="defaultClear"
                className={cnFooter('Email', ['decorator decorator_indent-b_m'])}
              />
              <Button size="l" form="brickDefault" iconRight={IconForward} label="Отправить" />
            </div>
          </form>
          <div
            className={cnFooter('Text', ['tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_5'])}
          >
            <Text className="decorator decorator_indent-b_m" size="xl" view="secondary" as="p">
              А ещё нам можно писать по электронной почте{' '}
              <Text as="a" href={mailTo} size="xl" view="link">
                {email}
              </Text>
              .
            </Text>
            <Text size="xl" view="secondary" as="p">
              Следите за нашими обновлениями в нашем{' '}
              <Text as="a" href={constaTelegram} size="xl" view="link" target="_blank">
                Телеграм-канале
              </Text>
              .
            </Text>
          </div>
        </div>
        <div className={cnFooter('Copyright')}>
          <Text
            className={cnFooter('Text', ['tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_5'])}
            size="m"
            view="secondary"
            as="p"
          >
            © 2020-2021{' '}
            <Text as="a" href={gazPromNeft} size="m" view="link">
              ПАО «Газпром нефть»
            </Text>
          </Text>
        </div>
      </div>
    </section>
  );
};
