'use client';
import RedHeart from '@/assets/svg/heart-red.svg';
import TransparentHeart from '@/assets/svg/heart.svg';
import Price from '@/components/Price';
import Button from '@/components/ui/Button';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import favouritesAtom from '@/state';
import type { PostDTO } from '@/types';
import deleteAd from '@/utils/api/deleteAd';
import postTelegram from '@/utils/api/postTelegram';
import { NO_IMAGE, routes } from '@/utils/constants';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useMemo } from 'react';
import { errors, ItemModalText, success } from './utils';

type Props = {
  post: PostDTO;
  edit?: boolean;
};

export default function Item({ post, edit = false }: Props) {
  const { toast, setToast } = useToast();
  const { setModal, setModalValue } = useModal();
  const [favourites, setFavourites] = useAtom(favouritesAtom);
  const { user } = useAuth();
  const { id, slug, title, preview, price, categoryId, body, images } = post;

  const router = useRouter();
  const liked = useMemo(() => !!favourites.find(x => x.id === id), [favourites, id]);

  const hideModal = () => {
    setModalValue(null);
    setModal(false);
  };

  const showModal = (text: ItemModalText) => {
    setModalValue(
      <div className="flex flex-col text-center">
        <h4>{text}</h4>
        <hr />
        <div className="mt-12 flex justify-around">
          <Button onClick={async () => await handleFunction(text)}>Да</Button>
          <Button onClick={hideModal}>Нет</Button>
        </div>
      </div>
    );
    setModal(true);
  };

  const handleFunction = async (modalText: string) => {
    // try {
    switch (modalText) {
      case ItemModalText.edit: {
        router.push(routes.edit + '/' + slug);
        hideModal();
        break;
      }
      case ItemModalText.telegram: {
        await postTelegram({
          title,
          body,
          price,
          slug,
          username: user?.username as string,
          categoryId,
          images,
        });
        alert(success.telegram);
        hideModal();
        router.push(routes.profile);
        break;
      }
      case ItemModalText.delete: {
        await deleteAd(id);
        hideModal();
        setModal(false);
        setToast(true);
        revalidatePath('/profile');
        break;
      }
      default:
        alert(errors.noCase);
    }
    // }
    /*    catch (e) {
          console.log(e);
          alert(errors.wentWrong);
        }*/
  };

  const handleFavourite = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const currentList = liked ? favourites.filter(x => x.id !== id) : [...favourites, post];
      setFavourites(currentList);
    },
    [id, favourites, liked, post, setFavourites]
  );

  useEffect(() => {
    return () => {
      setModalValue(null);
      setModal(false);
    };
  }, [setModalValue, setModal]);

  return (
    <Link
      href={`${routes.post}/${slug}`}
      title={title}
      className="relative flex flex-col overflow-hidden rounded-2xl shadow"
      data-testid={`item-${id}`}
      data-category={categoryId}
      // itemScope
      // itemType="https://schema.org/Product"
    >
      <div className="relative aspect-square transition-all hover:scale-105">
        <Image
          fill
          style={{ objectFit: 'cover' }}
          sizes={'(max-width: 768px) 45vw,(max-width: 1024px) 25vw, 200px'}
          alt={title}
          src={preview}
          placeholder="blur"
          blurDataURL={NO_IMAGE}
          title={title}
          // itemProp="image"
        />
      </div>

      <div className="relative mx-3 my-1 overflow-hidden whitespace-nowrap font-bold lg:mx-4 lg:my-2">
        <Price price={price} />
        <h2
          className="mt-auto truncate font-normal"
          // itemProp="name"
        >
          {title}
        </h2>
        <button
          className="absolute right-0 top-0 z-10 cursor-pointer"
          onClick={handleFavourite}
          aria-label="add to favorites"
        >
          {liked ? <RedHeart /> : <TransparentHeart />}
        </button>
      </div>
      {user && edit && (
        <>
          <Button
            className={clsx('absolute z-10', 'right-0 top-0')}
            onClick={event => {
              event.preventDefault();
              showModal(ItemModalText.delete);
            }}
          >
            &#10008;
          </Button>
          <Button
            title="Редактировать"
            className={clsx('absolute z-10', 'left-0 top-0')}
            onClick={event => {
              event.preventDefault();
              showModal(ItemModalText.edit);
            }}
          >
            &#10000;
          </Button>
          <Button
            title="Telegram"
            className={clsx('absolute z-10', 'bottom-0 right-0')}
            onClick={event => {
              event.preventDefault();
              showModal(ItemModalText.telegram);
            }}
          >
            &#8482;
          </Button>
        </>
      )}
    </Link>
  );
}
