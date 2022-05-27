import {PostInterface} from "../../interfaces";
import {getDynamicPaths} from "./rss.xml";

// @ts-ignore
const TR = require('turbo-rss');


export default async (req: any, res: any) => {
    const posts: PostInterface[] = await getDynamicPaths()

    // const related = posts.map((post) => ({
    //     link: 'https://innoads.ru/post/' + post.slug,
    //     image_url: post.preview,
    //     text: post.title,
    //     content: post.body
    // }))

    const feed = new TR({
        title: 'Доска объявлений города Иннополиса',
        description: 'Доска объявлений – объявления города Иннополис о продаже и покупке товаров всех категорий. Самый простой способ продать или купить вещи',
        link: 'https://innoads.ru'
    });

    feed.item({
        title: 'InnoAds - доска объявлений города Иннополис',
        image_url: 'https://innoads.ru/icons/icon-512x512.png',
        url: 'https://innoads.ru',
        author: 'InnoAds',
        date: new Date().toString(),
        content: '<p>hello</p>',
        goals: [{
            type: "yandex",
            id: "turbo-goal-id",
            counter_id: "88487475",
            name: "post",
        }],
        menu: [{
            link: 'https://innoads.ru/',
            text: 'Главная'
        }, {
            link: 'https://innoads.ru/add',
            text: 'Подать объявление'
        }],
    })

    posts.forEach((post) => {
        feed.item(
            {
                link: 'https://innoads.ru/post/' + post.slug,
                image_url: post.preview,
                text: post.title,
                content: post.body
            }
        )
    })

    var xml = feed.xml();

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    res.end(xml);
}
