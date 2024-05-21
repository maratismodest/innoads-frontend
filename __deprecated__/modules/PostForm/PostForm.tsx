'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Spinner from '@/components/ui/Spinner';
import useApp from '@/hooks/useApp';
import useAuth from '@/hooks/useAuth';
import useValidation from '@/hooks/useValidation';
import inputValidation from '@/__deprecated__/modules/PostForm/inputValidation';
import { CreatePostDTO, EditPostDTO } from '@/types';
import { Option } from '@/types/global';
import postAd from '@/utils/api/prisma/postPost';
import updatePostPrisma from '@/utils/api/prisma/updatePost';
import { routes } from '@/utils/constants';
import slug from '@/utils/slug';
import { Post } from '@prisma/client';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { messages, postDefaultValues, PostFormValues } from './utils';

export interface PostFormProps {
  defaultValues?: PostFormValues;
  post?: Post;
  additionalAction?: () => void;
}

export type PostOptions = Record<string, string | number | boolean>;

interface FormField {
  type: 'select' | 'number' | 'text' | 'textarea';
  value: any;
  label: string;
  options: PostOptions;
}

interface Form {
  categoryId: FormField;
  price: FormField;
  title: FormField;
  description: FormField;
}

const digitsRegex = /[^0-9]+/g;
const SUCCESS_MESSAGE = 'Ваше объявление создано!';
export default function PostForm({
  defaultValues = postDefaultValues,
  post,
  additionalAction = () => {},
}: PostFormProps) {
  const { categories } = useApp();
  const [data, setData] = useState<Form>({
    categoryId: {
      type: 'select',
      value: defaultValues?.categoryId,
      label: 'Выберите категорию',
      options: {
        required: true,
      },
    },
    price: {
      type: 'number',
      value: defaultValues?.price ?? '',
      label: 'Цена',
      options: { required: true, min: 1 },
    },
    title: {
      type: 'text',
      value: defaultValues?.title,
      label: 'Заголовок',
      options: { required: true, minLength: 5, maxLength: 50 },
    },
    description: {
      type: 'textarea',
      value: defaultValues?.body,
      label: 'Описание',
      options: { required: true, minLength: 10, maxLength: 800 },
    },
  });

  const textAreaError = useValidation(data.description.value, data.description.options);
  const categoryError = useValidation(data.categoryId.value, data.categoryId.options);

  const [images, setImages] = useState<string[]>(() => (post ? post.images.split('||') : []));
  const router = useRouter();

  const { user } = useAuth();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push(routes.profile);
      return;
    }
  }, [user]);

  if (!user) {
    return <Spinner />;
  }

  const handleCreate = async (formData: CreatePostDTO) => {
    try {
      setSending(true);
      const post = await postAd(formData);
      // await postTelegram(post, user, categories);
      additionalAction();
      alert(SUCCESS_MESSAGE);
      return router.push(routes.profile);
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        return alert(e.response?.data);
      }
      return;
    } finally {
      setSending(false);
    }
  };

  const handleEdit = async (formData: EditPostDTO) => {
    try {
      setSending(true);
      // console.log('formData', formData);
      await updatePostPrisma(formData);
      alert(messages.postUpdated);
      return router.push(routes.profile);
    } catch (e) {
      console.log(e);
      alert(messages.somethingWentWrong);
      return;
    } finally {
      setSending(false);
    }
  };

  const handleChange = (name: keyof Form, value: any) =>
    setData(prev => ({ ...prev, [name]: { ...prev[name], value } }));

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (images.length === 0) {
      return;
    }

    const isValidCategory = inputValidation(data.categoryId.value, data.categoryId.options);
    const isValidPrice = inputValidation(data.price.value, data.price.options);
    const isValidTitle = inputValidation(data.title.value, data.title.options);
    const isValidBody = inputValidation(data.description.value, data.description.options);

    if (!isValidCategory || !isValidPrice || !isValidTitle || !isValidBody) {
      return;
    }

    const form = {
      title: data.title.value.trim(),
      body: data.description.value.trim(),
      price: data.price.value,
      categoryId: data.categoryId.value,
    };

    if (post) {
      const editPostDto: EditPostDTO = {
        id: post.id,
        categoryId: form.categoryId,
        price: form.price,
        title: form.title,
        body: form.body,
        preview: images[0],
        images: images.join('||'),
        userId: Number(user.id),
        slug: post.slug,
      };
      await handleEdit(editPostDto);
      return;
    }

    const createPostDto: CreatePostDTO = {
      categoryId: form.categoryId,
      price: form.price,
      title: form.title,
      body: form.body,
      preview: images[0],
      images: images.join('||'),
      slug: slug(form.title) + '-' + Math.floor(Math.random() * 100),
      userId: user.id,
    };
    await handleCreate(createPostDto);
    return;
  };

  return (
    <form onSubmit={onSubmit} className="form" name={post ? 'Редактировать' : 'Добавить'}>
      <h1>Добавить объявление</h1>
      {Object.entries(data).map(([name, { label, value, type, options }]) => {
        switch (type) {
          case 'select': {
            return (
              <div key={name} className="grid">
                <label htmlFor={name}>{label}</label>
                <Select
                  options={categories}
                  onChange={(option: Option) => {
                    handleChange(name as keyof Form, Number(option.value));
                  }}
                  value={categories.find(x => x.value === value)}
                />
                {categoryError && <span className="text-red">{categoryError}</span>}
              </div>
            );
          }
          case 'number':
            return (
              <Input
                type="text"
                label={label}
                name={name}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(
                    name as keyof Form,
                    Number(event.target.value.replace(digitsRegex, ''))
                  );
                }}
                options={options}
                key={name}
              />
            );
          case 'text':
            return (
              <Input
                type="text"
                name={name}
                label={label}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(name as keyof Form, event.target.value);
                }}
                options={options}
                key={name}
              />
            );
          case 'textarea':
            return (
              <div className="grid" key={name}>
                <label htmlFor={name}>{label}</label>
                <textarea
                  rows={5}
                  cols={5}
                  name={name}
                  data-testid={name}
                  value={value}
                  {...options}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(name as keyof Form, event.target.value);
                  }}
                  // key={name}
                />
                {textAreaError && <span className="text-red">{textAreaError}</span>}
              </div>
            );
          default:
            return null;
        }
      })}
      {/*<PostFormImages images={images} setImages={setImages} />*/}
      {/*<label>*/}
      {/*  <input type="checkbox" checked /> Соглашаюсь с&nbsp;*/}
      {/*  <a href="/blog/rules" className="underline" target="_blank" rel="noopener noreferrer">*/}
      {/*    правилами и условиями*/}
      {/*  </a>*/}
      {/*</label>*/}

      <Button type="submit" disabled={sending} className="mx-auto">
        {post ? 'Редактировать' : 'Подать'}
      </Button>
    </form>
  );
}