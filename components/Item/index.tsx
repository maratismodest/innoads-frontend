'use client';
import ItemButtons from '@/components/Item/item-buttons';
import ItemLike from '@/components/Item/ItemLike';
import Price from '@/components/Price';
import Popup from '@/components/ui/Popup';
import useApp from '@/hooks/useApp';
import useAuth from '@/hooks/useAuth';
import useToast from '@/hooks/useToast';
import updatePostPrisma from '@/utils/api/prisma/updatePost';
import postTelegram from '@/utils/api/telegram/postTelegram';
import { NO_IMAGE } from '@/utils/constants';
import { Post, Role } from '@prisma/client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import { checkIsOld, handleArchive, handleEdit, ItemModalText } from './utils';

const DAYS = 1;

type ItemProps = {
  post: Post;
  edit?: boolean;
};

export default function Item({ post, edit = false }: ItemProps) {
  const t = useTranslations();
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const { categories } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState<ItemModalText | undefined>();
  const { title, preview, price } = post;

  const showModal = (text: ItemModalText) => {
    setModalText(text);
    setIsOpen(true);
  };

  const hideModal = useCallback(() => setIsOpen(false), []);

  const handleFunction = async () => {
    try {
      if (modalText === ItemModalText.edit) {
        await handleEdit(post, router);
        return;
      }
      if (modalText === ItemModalText.republish) {
        if (user) {
          const isOldEnough = checkIsOld(post.updatedAt, DAYS);
          if (isOldEnough) {
            await updatePostPrisma({ ...post, updatedAt: new Date() });
            await postTelegram(post, user, categories);
            alert('Объявление подано в канал повторно!');
          } else {
            alert(`Объявление подано меньше чем ${DAYS} день назад!`);
          }
        } else {
          alert('Кажется, вы не авторизованы!');
        }
        return;
      }
      if (modalText === ItemModalText.archive) {
        await handleArchive(post, toast);
        return;
      }
    } catch (e) {
      console.error(modalText, e);
      toast(t('Что-то пошло не так'));
    } finally {
      setIsOpen(false);
    }
  };

  const buttons = useMemo(
    () => [
      { text: 'Да', onClick: handleFunction },
      { text: 'Нет', onClick: hideModal },
    ],
    [handleFunction, hideModal]
  );

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl shadow dark:border">
      <div className="relative block aspect-square transition-all hover:scale-105">
        <Image
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 128px"
          alt={title}
          src={preview}
          placeholder="blur"
          blurDataURL={NO_IMAGE}
          title={title}
        />
      </div>

      <div className="relative mx-3 my-1 overflow-hidden whitespace-nowrap font-bold lg:mx-4 lg:my-2">
        <Price price={price} />
        <h2 className="mt-auto truncate font-normal">{title}</h2>
        <ItemLike post={post} className="absolute right-0 top-0" />
      </div>
      {user && (user.role === Role.ADMIN || user.id === post.userId) && edit && (
        <>
          <Popup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            text={modalText ?? 'InnoAds'}
            buttons={buttons}
          />
          <ItemButtons showModal={showModal} />
        </>
      )}
    </div>
  );
}
