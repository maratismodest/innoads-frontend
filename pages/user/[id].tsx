import axios from 'axios';
import Button from 'components/Button/Button';
import Item from 'components/Item/Item';
import MainLayout from 'components/MainLayout/MainLayout';
import {getDictionary} from 'functions/getDictionary';
import {getUrl} from 'functions/getUrl';
import {PostInterface} from 'interfaces';
import {orderBy} from 'lodash';
import {useTranslation} from "next-i18next";
import Link from 'next/link';
import {GetServerSideProps, NextPage} from 'next/types';
import React from 'react';
import classes from 'styles/classes.module.scss'
import {tgLink} from '../../constants';


interface PersonProps {
    posts: PostInterface[]
}

const Person: NextPage<PersonProps> = ({posts}) => {
    const {t} = useTranslation('post')
    return (
        <MainLayout>
            <h1>{t('userProfile')}</h1>
            <p>{t('adsCount')}: <span>{posts.length}</span></p>
            <div className={classes.mt40}/>
            <ul className={classes.items}>
                {posts.map((post: PostInterface) => {
                    return (
                        <Item post={post} key={post.slug}/>
                    );
                })}
            </ul>
            <div className={classes.mt40}/>
            <Link href={tgLink + '/' + posts[0].telegram} passHref>
                <Button>
                    {t('textAuthor')}
                </Button>
            </Link>
        </MainLayout>
    );
};

export default Person;

export const getServerSideProps: GetServerSideProps = async ({locale, query}) => {
    const response = await axios.get(getUrl(0, 0, 10, '', +(query.id as string)))
    if (!response) {
        return {
            notFound: true,
        };
    }
    const posts = orderBy(response.data.content, ['createdAt'], ['desc'])
    return {
        props: {
            posts,
            ...(await getDictionary(locale, ['post'])),
        }
    };
}
