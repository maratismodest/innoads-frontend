import {useState} from 'react';
import type {NextPage, GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link';
import axios from "axios";
import {orderBy} from "lodash";
import InfiniteScroll from 'react-infinite-scroller';
import classes from './../styles/Home.module.scss'
import Item from '../components/Item/Item';
import Search from '../components/Search/Search';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import {PostInterface} from '../interfaces';


interface HomeProps {
    posts: PostInterface[]
}

const Home: NextPage<HomeProps> = ({posts}) => {
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const [infinite, setInfinite] = useState(posts)
    const [input, setInput] = useState("");

    const loadFunc = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post?page=${page + 1}`)
        const posts = orderBy(response.data.content, ['createdAt'], ['desc'])
        setPage(prevState => prevState + 1)
        setInfinite(prevState => [...prevState, ...posts])
        setHasMore((page + 1) < response.data.totalPages)
        return posts
    }
    return (
        <>
            <Head>
                <title>Доска объявлений города Иннополис</title>
                <meta name="description"
                      content="Доска объявлений – объявления города Иннополис о продаже и покупке товаров всех категорий. Самый простой способ продать или купить вещи."/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="keywords" content="innoads Иннополис"/>
                <meta name="robots"/>
                <meta name="image" content='/icons/icon-192x192.png'/>
                <meta name="language" content="ru"/>
                <meta charSet="utf-8"/>
            </Head>
            <Header/>
            <main>
                <form className={classes.search}
                >
                    <Search
                        type="text"
                        placeholder="Поиск"
                        name="search"
                        required={true}
                        input={input}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
                        style={{marginRight: 16}}
                    />
                    <Link href={{pathname: "/search", query: {keyword: input}}}>
                        <a>
                            <Button>Поиск</Button>
                        </a>
                    </Link>
                </form>
                <h1 className={classes.title}>Последние объявления</h1>
                <div className={classes.magicWrapper}>
                    <InfiniteScroll
                        pageStart={page}
                        loadMore={loadFunc}
                        hasMore={hasMore}
                        initialLoad={false}
                        threshold={100}
                        loader={<div key={0}>Loading ...</div>}
                    >
                        <ul className={classes.items}>
                            {infinite.map((post: PostInterface) => {
                                return (
                                    <Item post={post} key={post.slug}/>
                                );
                            })}
                        </ul>
                    </InfiniteScroll>
                </div>

            </main>

        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post`)
    const posts = orderBy(response.data.content, ['createdAt'], ['desc'])
    if (!posts) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            posts
        },
        revalidate: 10,
    };
}

export default Home
