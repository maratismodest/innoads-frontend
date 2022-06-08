import axios from "axios";
import {orderBy} from "lodash";
import type {NextPage} from 'next'
import {useRouter} from "next/router";
import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import InfiniteScroll from 'react-infinite-scroller';
import {options} from "../assets/options";
import {Input} from "../components/Input/Input";
import Item from "../components/Item/Item";
import {MainLayout} from "../components/MainLayout/MainLayout";
import SelectInno from "../components/Select/Select";
import Spinner from "../components/Spinner/Spinner";
import useDebounce from "../hooks/useDebounce";
import {PostInterface} from "../interfaces";
import classes from '../styles/classes.module.scss'

const SearchPage: NextPage = () => {
    const router = useRouter();
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [infinite, setInfinite] = useState([])
    const [input, setInput] = useState("");
    const [category, setCategory] = useState(Number(router.query['category']) || 1);
    const debouncedValue = useDebounce<string>(input, 500)

    const loadFunc = useCallback(async (currentPage: number = page) => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post?page=${currentPage}&category=${category}&text=${debouncedValue}&size=10`)
        const posts: PostInterface[] = orderBy(response.data.content, ['createdAt'], ['desc'])
        setPage(prevState => prevState + 1)
        // @ts-ignore
        setInfinite((prevState: PostInterface[]) => currentPage === 0 ? posts : [...prevState, ...posts])
        setHasMore((currentPage + 1) < response.data.totalPages)
    }, [page, category, debouncedValue])


    useEffect(() => {
        loadFunc(0)
    }, [debouncedValue, category])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    useEffect(() => {
        const res = router.query['keyword']
        if (res && typeof res === 'string') {
            setInput(res)
        }

    }, [router.query]);

    return (
        <MainLayout title="Доска объявлений города Иннополис">
            <h1 className={classes.title}>Поиск</h1>
            <hr/>
            <SelectInno
                options={options}
                name="category"
                required={true}
                // defaultValue={options[0]}
                onChange={(event: any) => {
                    setCategory(event.value);
                }}
                value={options.find(x => x.value === category)}
            />
            <Input
                type="text"
                placeholder="поиск"
                name="search"
                required={true}
                defaultValue={router.query.keyword}
                value={input}
                onChange={handleChange}
                style={{marginTop: 10, width: "-webkit-fill-available"}}
            />
            <hr/>
            <div className={classes.magicWrapper}>
                <InfiniteScroll
                    pageStart={page}
                    loadMore={loadFunc}
                    hasMore={hasMore}
                    initialLoad={false}
                    threshold={100}
                    loader={<div key={0}><Spinner/></div>}
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
        </MainLayout>
    );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post?category=1`)
//     const posts = orderBy(response.data.content, ['createdAt'], ['desc'])
//     if (!posts) {
//         return {
//             notFound: true,
//         };
//     }
//
//     return {
//         props: {
//             posts
//         },
//         revalidate: 10,
//     };
// }

export default SearchPage