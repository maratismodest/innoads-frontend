'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React from 'react';

import withAdminCheck from '@/hoc/withAdminCheck';
import withAuth from '@/hoc/withAuth';
import AdminPosts from '@/pages-lib/admin/AdminPosts/admin-posts';
import AdminUsers from '@/pages-lib/admin/AdminUsers/admin-users';
import { handleDeleteAllArchived } from '@/pages-lib/admin/utils';
import buttonStyles from '@/styles/buttonStyles';

async function AdminPage() {
  const t = useTranslations();

  return (
    <>
      <div className="mb-2 flex justify-between">
        <h1>{t('Панель администрирования')}</h1>
        <button className={buttonStyles()} onClick={() => handleDeleteAllArchived()}>
          {t('Удалить все архивные посты')}
        </button>
      </div>
      <TabGroup>
        <TabList className="flex gap-2">
          <Tab
            className={clsx(
              buttonStyles({ size: 'small' }),
              '!rounded-full data-[selected]:underline'
            )}
          >
            {t('Пользователи')}
          </Tab>
          <Tab
            className={clsx(
              buttonStyles({ size: 'small' }),
              '!rounded-full data-[selected]:underline'
            )}
          >
            {t('Объявления')}
          </Tab>
        </TabList>
        <TabPanels className="mt-3">
          <TabPanel>
            <AdminUsers />
          </TabPanel>
          <TabPanel>
            <AdminPosts />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default withAuth(withAdminCheck(AdminPage));
