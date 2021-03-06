const dayjs = require('dayjs')
import {getDynamicPaths} from "functions/getDynamicPaths";
import {PostInterface} from "interfaces";

const TR = require('turbo-rss');

const RSSTurbo = async (req: any, res: any) => {
    const posts: PostInterface[] = await getDynamicPaths(1000)

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
        content: 'Доска объявлений – объявления города Иннополис о продаже и покупке товаров всех категорий. Самый простой способ продать или купить вещи',
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
                title: post.title,
                image_url: post.preview,
                url: 'https://innoads.ru/post/' + post.slug,
                author: 'https://t.me/' + post.telegram,
                date: dayjs(post.createdAt).toDate(),
                content: post.body,
            }
        )
    })

    const xml = feed.xml();

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    res.end(xml);
}

export default RSSTurbo
