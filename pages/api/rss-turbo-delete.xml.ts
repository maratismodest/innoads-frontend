import {NextApiRequest, NextApiResponse} from "next";

const TR = require('turbo-rss');

const toDelete = ["https://innoads.ru/post/kurtka-s-kapyushonom-42-r-ra-78"
    , "https://innoads.ru/post/kurtka-13"
    , "https://innoads.ru/post/klining-magiya-chistoty-19"
    , "https://innoads.ru/post/prodam-matras-askona-78"
    , "https://innoads.ru/post/rgb-zakatnaya-lampa-k-34"
    , "https://innoads.ru/post/kniga-mechtat-ne-vredno-99"
    , "https://innoads.ru/post/muline-92"
    , "https://innoads.ru/post/bandazh-dlya-beremennyh-poslerodovoj-49"
    , "https://innoads.ru/post/priglashayu-zhenshin-v-b-24"
    , "https://innoads.ru/post/krossovki-puma-x-ray-speed-lite-93"
    , "https://innoads.ru/post/novogodnie-shary-75"
    , "https://innoads.ru/post/kruizer-yamba-900-24"
    , "https://innoads.ru/post/tachka-sadovaya-odnokolesnaya-90-kg65-l-3"
    , "https://innoads.ru/post/zhenskaya-banya-52"
    , "https://innoads.ru/post/nagrevatelnaya-sistema-ploom-model-s-23"
    , "https://innoads.ru/post/detskij-tyoplyj-kombinezon-mothercare-90"
    , "https://innoads.ru/post/planshet-samsung-galaxy-tab-s6-lite-128gb-wi-fi-grey-38"
    , "https://innoads.ru/post/bluzka-84"
    , "https://innoads.ru/post/shorty-dzhinsovye-jeans-17"
    , "https://innoads.ru/post/nintendo-ds-lite-33"
    , "https://innoads.ru/post/sdayu-odnokomnatnuyu-kvartiru-53-kvm-38"
    , "https://innoads.ru/post/deserty-99"
  , "https://innoads.ru/post/arkaduga-s-podvesnymi-igrushkami-40"
    , "https://innoads.ru/post/detskie-bosonozhki-12"
    , "https://innoads.ru/post/internet-magazin-nizhnego-belya-96"
    , "https://innoads.ru/post/priglashayu-zhenshin-v-b-73"
    , "https://innoads.ru/post/bluza-rubashka-mango-27"
    , "https://innoads.ru/post/posudomoechnaya-mashina-nastolnaya-mijia-internet-dishwasher-vdw0401m-21"
    , "https://innoads.ru/post/posuda-ikea-novaya-15"
    , "https://innoads.ru/post/meshok-batareek-65"
    , "https://innoads.ru/post/razer-nari-ultimate-overwatch-lucio-edition-19"
    , "https://innoads.ru/post/pamyat-ssd-crucial-1tb-mx500-sata-m2-43"
    , "https://innoads.ru/post/krovat-s-dopolnitelnym-vydvizhnym-spalnym-mestom-41"
    , "https://innoads.ru/post/plate-zara-xs-16"
    , "https://innoads.ru/post/predlagayu-procedury-74"
    , "https://innoads.ru/post/taburet-detskij-75"
    , "https://innoads.ru/post/kostyum-suvari-pidzhak-i-bryuki-rost-173-r-s-94"
    , "https://innoads.ru/post/sdam-kvartiru-80"
    , "https://innoads.ru/post/domashnie-pelmeni-22"
    , "https://innoads.ru/post/plate-kruzhevnoe-65"
    , "https://innoads.ru/post/pidzhak-61"
    , "https://innoads.ru/post/parikmaherskie-uslugi-13"
    , "https://innoads.ru/post/sabo-eva-37"
    , "https://innoads.ru/post/kontejnery-dlya-sypuchih-90"
    , "https://innoads.ru/post/gigabyte-radeon-rx-6800-gaming-oc-16g-49"
    , "https://innoads.ru/post/stol-ingu-75h75-11"
    , "https://innoads.ru/post/prodam-lampu-nastolnuyu-harte-ikea-15"
    , "https://innoads.ru/post/arenda-stroitelnogo-instrumenta-innopolis-49"
    , "https://innoads.ru/post/rubashka-belaya-muzhskaya-razmer-s-94"
    , "https://innoads.ru/post/sushilka-dlya-obuvi-de-77"
    , "https://innoads.ru/post/type-c-usb-20-hab-83"
    , "https://innoads.ru/post/prodam-zimnie-pokryshki-i-diski-49"
    , "https://innoads.ru/post/xbox-one-s-1tb-75"
    , "https://innoads.ru/post/zhenskuyu-odezhdu-35"
    , "https://innoads.ru/post/detskie-rezinovye-sapogi-crocs-69"
    , "https://innoads.ru/post/noutbuk-85"
    , "https://innoads.ru/post/armejskij-oficerskij-suhpaj-34"
    , "https://innoads.ru/post/otdam-darom-ofisnyj-stol-belyj-samovyvoz-91"
    , "https://innoads.ru/post/iskustvennaya-elka-1"
    , "https://innoads.ru/post/kupalnik-74"
    , "https://innoads.ru/post/planshet-samsung-galaxy-tab-s6-lite-128gb-wi-fi-grey-sm-p610-47"
    , "https://innoads.ru/post/prodam-kolyasku-trost-75"
    , "https://innoads.ru/post/myod-raznotrave-88"
    , "https://innoads.ru/post/stol-84"
    , "https://innoads.ru/post/ukulele-24-56"
    , "https://innoads.ru/post/velosiped-detskij-95"
    , "https://innoads.ru/prodam/plate-hampm-razmer-32_i991"
    , "https://innoads.ru/post/perkussionnyj-massazher-xiaomi-yunmai-gun-pro-basic-48"
    , "https://innoads.ru/prodam/vechernie-platya_i484"
    , "https://innoads.ru/post/prodam-detskoe-velok-45"
    , "https://innoads.ru/post/obedy-s-dostavkoj-v-innopolis-6"
    , "https://innoads.ru/prodam/xiaomi-mi-band-3_i506"
    , "https://innoads.ru/post/elektrogril-bork-4"
    , "https://innoads.ru/post/perehodnik-sata-dlya-38"
    , "https://innoads.ru/post/stolik-78"
    , "https://innoads.ru/post/kostyum-detskij-15"
    , "https://innoads.ru/post/yubka-37"
    , "https://innoads.ru/post/fermerskaya-kolbasa-89"
    , "https://innoads.ru/post/zimnyaya-shapka-s-krasnogo-cveta-87"
    , "https://innoads.ru/post/otdam-darom-banki-68"
    , "https://innoads.ru/post/podushka-dlya-detskogo-stula-15"
    , "https://innoads.ru/post/some-slug445"
    , "https://innoads.ru/post/maslenka-4"
    , "https://innoads.ru/post/pismennyj-stol-ikea-melltorp-9"
    , "https://innoads.ru/post/prodam-art-buk-mir-igry-cyberpunk-2077-37"
    , "https://innoads.ru/post/kreslo-avtomobilnoe-detskoe-espiro-15-36-kg-52"
    , "https://innoads.ru/post/shtany-zhenskie-10"
    , "https://innoads.ru/post/ochen-moshnyj-lazer-67"
    , "https://innoads.ru/post/kofevarka-elektricheskaya-9"
    , "https://innoads.ru/post/novye-bryuki-42"
    , "https://innoads.ru/post/ortopedicheskie-sandalii-v-sadik-orthoboom-60"
    , "https://innoads.ru/post/bluza-s-dlinnym-rukavom-reserved-30"
    , "https://innoads.ru/post/kreslo-vedbo-vedbu-55"
    , "https://innoads.ru/post/tufli-naturalnaya-kozha-20"
    , "https://innoads.ru/post/dzhogery-nike-jordan-56"
    , "https://innoads.ru/post/sinhrologistika-13"
    , "https://innoads.ru/post/sdaetsya-posutochno-i-na-dolgij-srok-uyutnaya-odnokomnatnaya-kvartira-vse-voprosy-v-lichku-88"
    , "https://innoads.ru/post/botinki-detskie-geox-57"
    , "https://innoads.ru/post/moyushij-pylesos-91"
    , "https://innoads.ru/post/ryukzak-kenguru-zaffiro-71"
    , "https://innoads.ru/post/prodam-pamyat-ssd-na-1tb-sata-m2-pokupal-dlya-noutbuka-no-tak-i-ne-ustanovil-za-nenadobnostyu-novaya-ne-polzovannaya-98"
    , "https://innoads.ru/post/prodayu-potolochnyj-svetilnik-52"
    , "https://innoads.ru/post/xiaomi-redmi-note-10s-664-49"
    , "https://innoads.ru/post/prodayu-podvesnye-svetilniki-40"
    , "https://innoads.ru/post/pomidory-12"
    , "https://innoads.ru/post/prodam-yagody-23"
    , "https://innoads.ru/post/cvetok-90"
    , "https://innoads.ru/post/iqos-10"
    , "https://innoads.ru/post/plate-s-dlinnym-rukavom-31"
    , "https://innoads.ru/post/prodam-novuyu-shvejnuyu-mashinku-janome-2323-7-tr-ili-za-vashu-cenu-85"
    , "https://innoads.ru/post/prodam-original-airpods-2-s-besprovodnym-kejsom-31"
    , "https://innoads.ru/post/pamyat-ssd-crucial-1tb-mx500-sata-m2-13000r-53"
    , "https://innoads.ru/post/detskie-gornye-lyzhi-1000-sm-s-botinkami-37"
    , "https://innoads.ru/post/myod-4"
    , "https://innoads.ru/post/prodam-myach-58"
    , "https://innoads.ru/post/trench-concept-club-65"
    , "https://innoads.ru/post/prodam-detskij-velos-14"
    , "https://innoads.ru/post/kartiny-na-holste-69"
    , "https://innoads.ru/post/provodnye-vkladyshi-naushniki-apple-earpods-35-mm-53"
    , "https://innoads.ru/post/sdayu-odnokomnatnuyu-kvartiru-55"
    , "https://innoads.ru/post/posudomoechnaya-mashina-nastolnaya-mijia-internet-dishwasher-vdw0401m-95"
    , "https://innoads.ru/post/galstuk-babochka-66"
    , "https://innoads.ru/post/domashnie-halyal-produkty-63"
    , "https://innoads.ru/post/balans-bord-54"
    , "https://innoads.ru/post/svechi-iz-ikei-77"
    , "https://innoads.ru/post/prodam-vannochku-dlya-kupaniya-19"
    , "https://innoads.ru/prodam/ryukzaki-dlya-mam-mom-bag_i514"
    , "https://innoads.ru/post/disko-svetilnik-71"
    , "https://innoads.ru/post/1-lampa-ikea-cena-79"
    , "https://innoads.ru/post/prodam-oculus-guest-77"
    , "https://innoads.ru/post/pomeranskij-shpic-4"
    , "https://innoads.ru/post/krossovki-zhenskie-23"
    , "https://innoads.ru/post/maj-sling-diva-essenza-5"
    , "https://innoads.ru/post/tennisnye-raketki-80"
    , "https://innoads.ru/post/pulovery-17"
    , "https://innoads.ru/post/prinimaem-zakazy-41"
    , "https://innoads.ru/post/rasporka-granta-kalina-kalina-2-95"
    , "https://innoads.ru/post/velokreslo-dlya-detej-42"
    , "https://innoads.ru/post/naturalnaya-myasnaya-produkciya-77"
    , "https://innoads.ru/post/kniga-23"
    , "https://innoads.ru/post/novyj-belyj-uteplennyj-zhilet-s-kapyushonom-razmer-xl-primerno-48-50-42"
    , "https://innoads.ru/post/4piv-23"
    , "https://innoads.ru/post/prodam-apple-macbook-air-2017-proizvodstvo-2020-11"
    , "https://innoads.ru/post/shapka-bannaya-20"
    , "https://innoads.ru/post/vypryamitel-dlya-volos-maxwell-11"
    , "https://innoads.ru/post/detskaya-krovatka-s-matrasom-99"
    , "https://innoads.ru/post/prodam-melenkij-utyug-sunbeam-43"
    , "https://innoads.ru/post/prodam-veshi-v-svyazi-s-pereezdom-60"
    , "https://innoads.ru/post/prodam-odnokomnatnuyu-kvartiru-20"
    , "https://innoads.ru/post/gornyj-velosiped-29"
    , "https://innoads.ru/post/darom-95"
    , "https://innoads.ru/post/mini-pech-bbk-oe3070m-23"
    , "https://innoads.ru/post/3453535-70"
    , "https://innoads.ru/post/shtany-dlya-beremennyh-6"
    , "https://innoads.ru/post/kalyan-i-ego-komplektuyushie-26"
    , "https://innoads.ru/post/prodam-procmatoperativku-80"
    , "https://innoads.ru/post/katalka-hodunki-fisher-price-58"
    , "https://innoads.ru/post/otdam-banki-50"
    , "https://innoads.ru/post/strahovanie-lyubye-vidy-44"
    , "https://innoads.ru/post/zimnie-shtanishki-93"
    , "https://innoads.ru/post/predlagayu-procedury-80"
    , "https://innoads.ru/post/rubshka-17"
    , "https://innoads.ru/post/velosipedki-10"
    , "https://innoads.ru/post/platya-zhaket-ryukzak-sumka-kosuha-vsyo-po-300-rublej-82"
    , "https://innoads.ru/post/1-umnaya-rozetka-al-93"
    , "https://innoads.ru/post/massazh-58"
    , "https://innoads.ru/post/gorodskoj-letnij-lager-dlya-detej-7-10-let-73"
    , "https://innoads.ru/post/kuplyu-vzroslyj-velosiped-82"
    , "https://innoads.ru/post/botilony-kozhanye-39-razmer-40"
    , "https://innoads.ru/post/gorshok-cvetochnyj-26"
    , "https://innoads.ru/post/zerkalnyj-fotoapparat-canon-1300d-26"
    , "https://innoads.ru/post/prodam-3d-pazl-chelovek-pauk-78"
    , "https://innoads.ru/post/airpods-2-with-wireless-charging-case-86"
    , "https://innoads.ru/post/otdam-rybok-guppi-8"
    , "https://innoads.ru/post/xbox-one-s-1tb-29"
    , "https://innoads.ru/post/naturalnaya-myasnaya-produkciya-69"
    , "https://innoads.ru/post/wi-fi-router-apple-time-capsule-3tb-10"
    , "https://innoads.ru/post/nakidka-zarina-85"
    , "https://innoads.ru/post/sumka-96"
    , "https://innoads.ru/post/novye-smart-chasy-amazfit-bip-u-pro-a2008-93"
    , "https://innoads.ru/post/krossovki-29"
    , "https://innoads.ru/post/odeyalo-5"
    , "https://innoads.ru/post/detskie-vesy-48"
    , "https://innoads.ru/post/3-podushki-99"
    , "https://innoads.ru/post/kniga-kompyuternye-seti-61"
    , "https://innoads.ru/post/prodayu-kovyor-65"
    , "https://innoads.ru/post/svetilnik-nastennyj-26"
    , "https://innoads.ru/post/xiaomi-redmi-note-10s-664-92"
    , "https://innoads.ru/post/macbook-pro-15-2013-early-65"
    , "https://innoads.ru/post/gitara-yamaha-eg-112-87"
    , "https://innoads.ru/post/knigi-39"
    , "https://innoads.ru/post/prodayu-braslet-novyj-14"
    , "https://innoads.ru/post/chasy-omega-x-swatch-missiya-na-pluton-98"
    , "https://innoads.ru/uslugi/perevod-tekstov-yslygi-perevodchika_i538"
    , "https://innoads.ru/post/bluza-rubashka-48"
    , "https://innoads.ru/post/akkamulyator-65"
    , "https://innoads.ru/post/apple-watch-series-3-38mm-48"
    , "https://innoads.ru/post/prodam-krovatku-63"
    , "https://innoads.ru/post/4p2v-90"
    , "https://innoads.ru/post/podstavka-etazherka-dlya-obuvipoddon-32"
    , "https://innoads.ru/post/monitor-aoc-72"
    , "https://innoads.ru/post/kovannye-izdeliya-62"
    , "https://innoads.ru/post/prodayom-dvushku-v-inn-68"
    , "https://innoads.ru/post/domashnyaya-naturalnaya-eda-65"
    , "https://innoads.ru/post/krop-top-v-rubchik-92"
    , "https://innoads.ru/post/sapogi-zhenskie-95"
    , "https://innoads.ru/post/1-zapasy-aptechki-4"
    , "https://innoads.ru/post/plate-22"
    , "https://innoads.ru/post/detskaya-krovatka-63"
    , "https://innoads.ru/post/gruzchik-79"
    , "https://innoads.ru/post/otparivatel-ginzzu-hg-202-87"
    , "https://innoads.ru/post/knigi-26"
    , "https://innoads.ru/post/prodam-54"
    , "https://innoads.ru/post/prodayu-pristavnuyu-detskuyu-krovatku-lyulku-carrello-luna-10"
    , "https://innoads.ru/post/televizor-sony-40d3500-stojka-84"
    , "https://innoads.ru/post/knigi-47"
    , "https://innoads.ru/post/podaryu-91"
    , "https://innoads.ru/post/utyug-braun-63"
    , "https://innoads.ru/post/svadebnoe-plate-v-vual-76"
    , "https://innoads.ru/post/dzhinsy-38"
    , "https://innoads.ru/post/prodam-nastennuyu-kogtetochku-58"
    , "https://innoads.ru/post/prodam-manezh-dlya-sobak-87"
    , "https://innoads.ru/post/prodam-shokoladnyj-fontan-98"
    , "https://innoads.ru/post/velopodnozhka-37"
    , "https://innoads.ru/post/3d-printer-creality-ender-3-pro-56"
    , "https://innoads.ru/post/zagorodnyj-otdyh-vsej-semej-44"
    , "https://innoads.ru/post/dni-rozhdeniya-svidaniya-i-korporativy-v-formate-art-vstrech-93"
    , "https://innoads.ru/post/apple-airpods-2-51"
    , "https://innoads.ru/post/prodam-knigi-100-ru-33"
    , "https://innoads.ru/post/asus-tuf-gaming-f15-80"
    , "https://innoads.ru/post/xbox-one-s-1tb-67"
    , "https://innoads.ru/post/kruizer-yamba-500-22"
    , "https://innoads.ru/post/raritetnye-tolstovki-s-simvolikoj-universiteta-7"
    , "https://innoads.ru/post/zelen-91"
    , "https://innoads.ru/post/novoe-menyu-v-ultramen-66"
    , "https://innoads.ru/post/prodam-iphone-x-64-21"
    , "https://innoads.ru/post/detskij-derevyannyj-stolik-i-detskij-stul-mishka-49"
    , "https://innoads.ru/post/vesennyaya-kurtka-88"
    , "https://innoads.ru/post/knigu-39"
    , "https://innoads.ru/post/zimnij-komplekt-83"
    , "https://innoads.ru/post/predlagaemye-procedury-94"
    , "https://innoads.ru/post/veshalka-napolnaya-30"
    , "https://innoads.ru/post/interernye-kartiny-na-zakaz-i-risunki-na-stenah-97"
    , "https://innoads.ru/post/prodam-mikrofonnuyu-stojku-s-pop-filtrom-92"
    , "https://innoads.ru/post/asus-x555l-2014-69"
    , "https://innoads.ru/post/repliki-carskih-monet-53"
    , "https://innoads.ru/post/novyj-0"
    , "https://innoads.ru/post/samsung-galaxy-tab-s6-lite-128gb-51"
    , "https://innoads.ru/post/kompyuternoe-kreslo-95"
    , "https://innoads.ru/post/dvuhyarusnaya-krovat-28"
    , "https://innoads.ru/post/plastmassovaya-bochka-75"
    , "https://innoads.ru/post/letnee-plate-mini-poppopl-xs-24"
    , "https://innoads.ru/post/yubka-reserved-23"
    , "https://innoads.ru/post/bodi-detskoe-s-vorotnichkom-39"
    , "https://innoads.ru/post/shkaf-detskij-65"
    , "https://innoads.ru/post/naushniki-edifier-w860nb-64"
    , "https://innoads.ru/post/solncezashitnye-ochki-lime-76"
    , "https://innoads.ru/post/fitbol-69"
    , "https://innoads.ru/post/prodayu-nastennye-svetilniki-51"
    , "https://innoads.ru/post/ps4-pro-51"
    , "https://innoads.ru/post/shezlong-34"
    , "https://innoads.ru/post/zhenskie-tancy-na-gvozdyah-98"
    , "https://innoads.ru/post/2-krop-topa-41"
    , "https://innoads.ru/post/odnorazovye-trusiki-shapochki-binty-elastichnye-dlya-obyortyvaniya-65"
    , "https://innoads.ru/post/personalnye-treniro-48"
    , "https://innoads.ru/post/limon-i-imbir-8"
    , "https://innoads.ru/post/ortopedicheskaya-podushka-na-sidene-58"
    , "https://innoads.ru/prodam/skatert_i521"
    , "https://innoads.ru/post/prodam-begovuyu-dorozhku-applegate-t30-adc-71"
    , "https://innoads.ru/post/prodayu-zerkalo-87"
    , "https://innoads.ru/post/cvetochnyj-myod-50"
    , "https://innoads.ru/post/plate-koktejlnoe-72"
    , "https://innoads.ru/post/podaryu-60"
    , "https://innoads.ru/post/wi-fi-router-tplink-91"
    , "https://innoads.ru/post/kniga-84"
    , "https://innoads.ru/post/kuplyu-belye-niti-sherstpoliester-segodnya-73"
    , "https://innoads.ru/post/mobilnyj-kondicioner-57"
    , "https://innoads.ru/post/prodayu-buket-i-vazu-42"
    , "https://innoads.ru/post/osvoj-anglijskij-yazyk-onlajn-4"
    , "https://innoads.ru/post/prodayu-hrustalnye-svetilniki-72"
    , "https://innoads.ru/post/segodnya-v-1900-efir-s-ortopedom-44"
    , "https://innoads.ru/post/kovriki-3"
    , "https://innoads.ru/post/skejtbord-33"
    , "https://innoads.ru/post/kniga-it-87"
    , "https://innoads.ru/post/1-goluboj-kovrik-d-19"
    , "https://innoads.ru/post/macbook-pro-13-2017-62"
    , "https://innoads.ru/post/myach-futbolnyj-55"
    , "https://innoads.ru/post/gorshochek-iz-ikei-36"
    , "https://innoads.ru/post/httpscrmtopnlab-83"
    , "https://innoads.ru/post/skovoroda-s-kryshkoj-26sm-49"
    , "https://innoads.ru/post/bu-shiny-maxxis-18560-r15-53"
    , "https://innoads.ru/post/sdam-dvushku-77"
    , "https://innoads.ru/post/naviforce-nf9089m-20"
    , "https://innoads.ru/post/zerkalnyj-fotoapparat-nikon-d5200-komplekt-89"
    , "https://innoads.ru/post/tyul-22"
    , "https://innoads.ru/post/yubka-28"
    , "https://innoads.ru/post/zimnij-kostyum-30-75"
    , "https://innoads.ru/prodam/silikonovaya-forma-regent-inox_i976"
    , "https://innoads.ru/post/perederzhka-86"
    , "https://innoads.ru/post/prodam-pomidory-17"
    , "https://innoads.ru/post/bluza-incity-31"
    , "https://innoads.ru/post/chehol-iphone-8se-27-81"
    , "https://innoads.ru/post/prodam-novyj-telefon-45"
    , "https://innoads.ru/post/cvetnaya-opletka-na-kabeli-40"
    , "https://innoads.ru/post/kedy-kozhanye-na-mal-61"
    , "https://innoads.ru/post/kedy-brenda-karlo-pazolini-material-verh-naturalnaya-kozha-lak-stelka-nat-kozha-37r-ochen-dorogie-nosila-odin-den-pol-chasa-v-ls-51"
    , "https://innoads.ru/post/prodam-60"
    , "https://innoads.ru/post/jbl-naushniki-t205vt-besprovodnye-naushniki-s-mikrofonom-16"
    , "https://innoads.ru/post/novaring-2"
    , "https://innoads.ru/post/solnechnye-ochki-70"
    , "https://innoads.ru/post/podguzniki-trusiki-pampers-5-26"
    , "https://innoads.ru/post/perchatki-10-oz-i-binty-35-m-65"
    , "https://innoads.ru/post/prodam-musornoe-vedro-fniss-ikea-8"
    , "https://innoads.ru/post/kurtka-redfox-zimnyaya-tinsulejt-r-46-54"
    , "https://innoads.ru/prodam/24-dyujmovyj-monitor-dell-ultrasharp-u2415_i891"
    , "https://innoads.ru/post/dobryj-den-51"
    , "https://innoads.ru/post/matras-92"
    , "https://innoads.ru/post/armejskaya-tushyonka-72"
    , "https://innoads.ru/post/rabochee-kreslo-26"
    , "https://innoads.ru/post/dejstvuyushij-biznes-v-tc-tandem-95"
    , "https://innoads.ru/post/arenda-stroitelnogo-instrumenta-innopolis-67"
    , "https://innoads.ru/post/xbox-one-s-1tb-23"
    , "https://innoads.ru/post/plataprocpamyat-86"
    , "https://innoads.ru/post/vok-skovoroda-ikea-46"
    , "https://innoads.ru/post/otkryta-zapis-na-spa-devichnik-v-innopolise-14"
    , "https://innoads.ru/post/smorodina-46"
    , "https://innoads.ru/post/bortovoj-kompyuter-37"
    , "https://innoads.ru/post/odeyala-2-43"
    , "https://innoads.ru/post/saharnica-ikea-17"
    , "https://innoads.ru/post/prodam-detskie-veshi-bu-47"
    , "https://innoads.ru/post/ochki-gornolyzhnye-95"
    , "https://innoads.ru/post/prodayu-3-k-kvartiru-v-zhk-biznes-klassa-richmond-28"
    , "https://innoads.ru/post/kompyuternoe-kreslo-37"
    , "https://innoads.ru/post/perenoska-kenguru-dlya-rebyonka-chicco-28"
    , "https://innoads.ru/post/ekskursii-vechernie-obzornye-po-kazani-raifskij-monastyrvselenskij-hram-joshkar-ola-elabuga-19"
    , "https://innoads.ru/post/prodam-taunhaus-v-zione-18"
    , "https://innoads.ru/post/tufli-naturalnaya-kozha-57"
    , "https://innoads.ru/post/shimmer-blestki-63"
    , "https://innoads.ru/post/polka-derevyannaya-58"
    , "https://innoads.ru/post/sumka-73"
    , "https://innoads.ru/post/plate-gloria-jeans-woman-22"
    , "https://innoads.ru/post/rasprodazha-odezhdy-30"
    , "https://innoads.ru/post/raskladnoj-stol-knizhka-59"
    , "https://innoads.ru/post/plastikovaya-karta-visa-ozan-supeercard-16"
    , "https://innoads.ru/post/wi-fi-router-tp-link-wr740n-65"
    , "https://innoads.ru/post/pampersy-62"
    , "https://innoads.ru/prodam/garazhnaya-rasprodazha_i962"
    , "https://innoads.ru/post/botforty-novye-brend-iren-vartik-57"
    , "https://innoads.ru/post/televizor-s-carapinoj-44"
    , "https://innoads.ru/post/pylesos-lg-vk76a02ntl-98"
    , "https://innoads.ru/post/sapogi-kuoma-61"
    , "https://innoads.ru/post/botinki-detskie-50"
    , "https://innoads.ru/post/kostyum-santaklausa-11"
    , "https://innoads.ru/post/httpstmeieco-27"
    , "https://innoads.ru/post/rabochij-stol-41"
    , "https://innoads.ru/post/ieco-13"
    , "https://innoads.ru/post/abonement-v-sk-5"
    , "https://innoads.ru/post/ipad-mini-2-retina-64-gb-lte-v-otlichnom-sostoyanii-ekran-i-korpus-celye-tach-i-vse-knopki-rabotayut-otvyazan-ot-vseh-akkauntov-v-komplekte-kabel-zaryadki-i-chehol-na-ekrane-zashitnaya-plyonka-32"
    , "https://innoads.ru/post/kovriki-dlya-vannoj-87"
    , "https://innoads.ru/post/novaya-yubka-81"
    , "https://innoads.ru/post/plate-10"
    , "https://innoads.ru/post/samsung-galaxy-tab-s6-lite-128gb-53"
    , "https://innoads.ru/post/primu-v-dar-velosipe-17"
    , "https://innoads.ru/post/massazh-96"
    , "https://innoads.ru/post/pylesos-samsung-sc885b-99"
    , "https://innoads.ru/post/zerkalo-na-velosiped-62"
    , "https://innoads.ru/post/otdam-90"
    , "https://innoads.ru/post/noutbuk-shuwi-lapbook-pro-97"
    , "https://innoads.ru/post/fermerskie-kolbasy-sosiski-i-sardelki-97"
    , "https://innoads.ru/post/prodayu-plate-44"
    , "https://innoads.ru/post/8jviekzke4jkyrw-60"
    , "https://innoads.ru/post/velosipedki-85"
    , "https://innoads.ru/post/abonement-v-skakvafitnes-55"
    , "https://innoads.ru/post/rubashki-75"
    , "https://innoads.ru/post/shlepki-na-malchika-r36-37-58"
    , "https://innoads.ru/post/klaviatura-diebold-49-201381-000a-33"
    , "https://innoads.ru/post/velosiped-89"
    , "https://innoads.ru/post/prodam-05-l-balzama-dlya-suhih-volos-moh-pod-nogami-ot-golodnogo-leshego-za-350-rublej-22"
    , "https://innoads.ru/post/sdayom-2h-komnatnuyu-kvartiru-31"
    , "https://innoads.ru/post/prodam-chasy-xiaomi-mi-band-5-kupil-poltora-goda-nazad-ponosil-polgoda-bolshe-ne-polzuyus-sostoyanie-otlichnoe-provod-dlya-zaryadki-v-nalichii-s-chasami-35"
    , "https://innoads.ru/post/uslugi-po-montazhu-polipropilenovyh-trub-56"
    , "https://innoads.ru/post/shlem-dlya-devochki-59"
    , "https://innoads.ru/post/besprovodnaya-klaviat-43"
    , "https://innoads.ru/post/prodam-knigu-tvoj-pervyj-bestseller-kristofer-edzh-2"
    , "https://innoads.ru/post/igra-manchkin-61"
    , "https://innoads.ru/prodam/plate-hampm-razmer-34_i992"
    , "https://innoads.ru/post/zavarochnyj-chajnik-ikea-21"
    , "https://innoads.ru/post/armejskij-oficerskij-suhpaj-86"
    , "https://innoads.ru/post/novye-bryuki-futurino-34"
    , "https://innoads.ru/post/otdam-magnitnye-lenty-v-futlyarah-i-bez-raznogo-diametra-zabirat-v-kazani-61"
    , "https://innoads.ru/post/dvuhspalnaya-krovat-28"
    , "https://innoads.ru/post/iphone-7-32gb-rostest-9000r-42"
    , "https://innoads.ru/post/kartiny-na-zakaz-61"
    , "https://innoads.ru/post/izognutyj-monitor-philips-27-61"
    , "https://innoads.ru/post/nabor-plastika-dlya-3d-ruchki-20"
    , "https://innoads.ru/post/iphone-7-32gb-rostest-11"
    , "https://innoads.ru/post/veb-kamera-shirokougolnaya-logitech-c930e-12"
    , "https://innoads.ru/post/dvd-player-supra-dvs-303xkll-82"
    , "https://innoads.ru/post/igrovoj-kovrik-95"
    , "https://innoads.ru/post/kontejnery-5sht-74"
    , "https://innoads.ru/post/pofiksili-ipotechnuyu-programmu-0"
    , "https://innoads.ru/post/poslednij-den-skidki-65"
    , "https://innoads.ru/post/airpods-65"
    , "https://innoads.ru/post/gladilnaya-doska-20"
    , "https://innoads.ru/post/nabor-podpisok-i-servisov-yandeksplyus-na-24-mesyacev-39"
    , "https://innoads.ru/post/fermerskie-kolbasy-i-sardelki-43"
    , "https://innoads.ru/post/derzhatel-dlya-telefona-navigatora-ajpada-4"
    , "https://innoads.ru/post/igry-na-ps4-96"
    , "https://innoads.ru/post/posudomoechnaya-mashina-nastolnaya-mijia-internet-dishwasher-vdw0401m-59"
    , "https://innoads.ru/post/ramu-ikea-81"
    , "https://innoads.ru/post/sani-pod-zakaz-58"
    , "https://innoads.ru/post/begovel-48"
    , "https://innoads.ru/post/vsem-privet-eto-ult-50"
    , "https://innoads.ru/post/kovyor-iz-ikei-13"
    ,"https://innoads.ru/prodam/plate_i499"
    , "https://innoads.ru/post/balzam-dlya-volos-89"
    , "https://innoads.ru/post/dizajn-interera-39"
    , "https://innoads.ru/post/bizhuteriya-kolca-seryozhki-cepi-3"
    , "https://innoads.ru/post/kletka-3-h-etazhnaya-v-idealnom-sostoyanii-s-poilkami-i-kormushkami-plastikovyj-poddon-1600-rub-40"
    , "https://innoads.ru/post/svechi-74"
    , "https://innoads.ru/post/zhenskaya-kofta-93"
    , "https://innoads.ru/post/plate-75"
    , "https://innoads.ru/post/monitor-85"
    , "https://innoads.ru/post/special-aromatice-guggul-58"
    , "https://innoads.ru/post/redmi-note-7-464-chyornyj-74"
    , "https://innoads.ru/post/samsung-galaxy-s20-fe-6128gb-61"
    , "https://innoads.ru/post/sony-play-station-3-s-gejmpadom-i-kinektom-62"
    , "https://innoads.ru/post/xiaomi-redmi-note-10s-664-70"
    , "https://innoads.ru/post/myod-71"
    , "https://innoads.ru/post/raskladnoj-stul-ikea-tere-3"
    , "https://innoads.ru/post/dobrogo-dnya-proda-39"
    , "https://innoads.ru/post/prodam-odnokomnatnuyu-kvartiru-46"
    , "https://innoads.ru/post/hdd-500-gb-35-sata2-samsung-hd502ij-8"
    , "https://innoads.ru/post/promokod-na-skidku-500-ot-2500-na-yandeks-market-88"
    , "https://innoads.ru/post/trenazher-ellipticheskij-essential-120-domyos-58"
    , "https://innoads.ru/post/noutbuk-hp-pavilion-15-69"
    , "https://innoads.ru/post/avtokreslo-9-18-kg-chicco-65"
    , "https://innoads.ru/post/arenda-stroitelnogo-instrumenta-innopolis-10"
    , "https://innoads.ru/post/igra-scrubble-83"
    , "https://innoads.ru/post/prodam-pazzly-74"
    , "https://innoads.ru/post/koshachij-rebyonok-v-poiskah-doma-66"
    , "https://innoads.ru/post/hp-probook-440-g3-i3-6100u8gb128-ssd500-hddr7-m340-28"
    , "https://innoads.ru/post/protochnyj-vodonagrevatel-electrolux-ne-mnogo-bu-v-komplekte-kabel-dlya-pitaniya-1500r-83"
    , "https://innoads.ru/post/zamiokulkas-90"
    , "https://innoads.ru/post/krossovki-detskie-34"
    , "https://innoads.ru/post/prodayu-samsung-galaxy-s9-256gb-71"
    , "https://innoads.ru/post/prodayu-kostyum-donatto-sinij-96"
    , "https://innoads.ru/post/razer-nari-ultimate-overwatch-lucio-edition-39"
    , "https://innoads.ru/post/uvlazhnitel-vozduha-deerma-dem-f327-39"
    , "https://innoads.ru/post/325r-tufli-shkolny-39"
    , "https://innoads.ru/post/monitor-75"
    , "https://innoads.ru/post/zimnee-palto-30"
    , "https://innoads.ru/post/prodam-ps4-pro-pamyat-1tb-dzhojstik-2-specialnaya-zaryadka-podstavka-5-igr-v-komplekte-cena-4499900-rub-torg-umesten-avtor-seyfedin05-34"
    , "https://innoads.ru/post/prodam-knigu-7-navykov-vysokoeffektivnyh-lyudej-v-myagkom-pereplete-16"
    , "https://innoads.ru/post/prodam-macbook-air-2-38"
    , "https://innoads.ru/post/stolovyj-nabor-novyj-86"
    , "https://innoads.ru/post/osvoj-anglijskij-yazyk-onlajn-2"
    , "https://innoads.ru/post/dvuhyarusnaya-krovat-58"
    , "https://innoads.ru/post/krem-57"
    , "https://innoads.ru/post/shlem-zashita-2-longa-88"
    , "https://innoads.ru/post/cvety-33"
    , "https://innoads.ru/post/rolikovye-konki-muzhskik-roces-ymir-42-razmer-76"
    , "https://innoads.ru/post/ishu-specialista-prolozhit-ethernet-kabel-v-komnatu-70"
    , "https://innoads.ru/post/doska-s-krepleniem-4"
    , "https://innoads.ru/post/shourum-innopolisa-v-telegramm-33"
    , "https://innoads.ru/post/prodam-monitor-67"
    , "https://innoads.ru/yslygi/izgotovlenie-domofonnye-klyuchej-i-kvartirnyx-klyuch-kart_i298"
    , "https://innoads.ru/post/prodam-knigi-21"
    , "https://innoads.ru/post/tri-kartiny-i-girlyanda-5"
    , "https://innoads.ru/post/velosiped-10"
    , "https://innoads.ru/post/robot-pylesos-ilife-v50-97"
    , "https://innoads.ru/post/plate-40"
    , "https://innoads.ru/prodam/utyug-philips-azur-performer-plus_i494"
    , "https://innoads.ru/post/prodam-21"
    , "https://innoads.ru/post/prodayotsya-pismennyj-stol-94"
    , "https://innoads.ru/post/prodayu-nastennye-svetilniki-4"
    , "https://innoads.ru/post/knigi-86"
    , "https://innoads.ru/post/plate-na-vypusknojmeropriyatie-11"
    , "https://innoads.ru/post/zhenskaya-kofta-24"
    , "https://innoads.ru/post/mini-pech-bbk-oe3070m-99"
    , "https://innoads.ru/post/kostyum-karter-dvojka-muzhskoj-45"
    , "https://innoads.ru/post/bmx-95"
    , "https://innoads.ru/post/kuplyu-standartnyj-televizor-32-dyujma-31"
    , "https://innoads.ru/post/tufli-bosonozhki-20"
    , "https://innoads.ru/post/noutbuk-asus-tuf-gaming-f15-78"
    , "https://innoads.ru/post/prodayu-shtory-i-tyul-53"
    , "https://innoads.ru/post/pidzhak-1"
    , "https://innoads.ru/post/butylochka-dlya-masel-34"
    , "https://innoads.ru/post/prodam-detskie-razdvizhnye-konki-78"
    ,"https://innoads.ru/prodam/plate-yubka-bluzka_i513"
    , "https://innoads.ru/post/dobrogo-dnya-proda-0"
    , "https://innoads.ru/post/krovatka-ikeya-gulliver-s-matrasom-i-namatrasnikom-56"
    , "https://innoads.ru/post/podat-obuyavlenie-60"
    , "https://innoads.ru/post/kuplyu-bas-gitaru-25"
    , "https://innoads.ru/post/prodayu-nastennye-svetilniki-88"
    , "https://innoads.ru/post/chuzhoj-91"
    , "https://innoads.ru/post/velosiped-detskij-14-dyujmov-radius-38"
    , "https://innoads.ru/post/prodam-knigu-dom-v-kotorom-mariam-petrosyan-14"
    , "https://innoads.ru/post/shenyata-nemeckoj-ovcharki-76"
    , "https://innoads.ru/post/zagotovka-dlya-rukodeliya-60"
    , "https://innoads.ru/post/lampa-nastolnaya-19"
    , "https://innoads.ru/prodam/kabel-pitaniya_i682", "https://innoads.ru/post/mangal-75"
    , "https://innoads.ru/post/sumka-chyornaya-97"
    , "https://innoads.ru/post/igrovoj-pk-3070ti-32gb-i5-4"
    , "https://innoads.ru/post/plate-79"
    , "https://innoads.ru/post/kombinezon-letnij-reserved-10"
    , "https://innoads.ru/post/kalyan-42"
    , "https://innoads.ru/post/napolnoj-zerkalo-40"
    , "https://innoads.ru/post/sportivnyj-kostyum-65"
    , "https://innoads.ru/post/zamiokulkas-52"
    , "https://innoads.ru/prodam/prodam-sumku-temnosinego-cveta_i501"
    , "https://innoads.ru/post/prodayutsya-yajca-domashniesvezhij-privoz-ostalos-vsego-40-shtuk-cena-za-1-desyatok-100-rublej-70"
    , "https://innoads.ru/post/shkaf-detskij-60"
    , "https://innoads.ru/post/shourum-inopolis-70"
    , "https://innoads.ru/post/kniga-14"
    , "https://innoads.ru/post/sbor-deneg-93"
    , "https://innoads.ru/post/stol-knizhka-16"
    , "https://innoads.ru/post/otdam-darom-ofisnyj-stol-korichnevyj-samovyvoz-60"
    , "https://innoads.ru/post/botinki-55"
    , "https://innoads.ru/post/ipad-mini-2-retina-6-1"
    , "https://innoads.ru/post/prodayu-pazl-4"
    , "https://innoads.ru/post/lukum-aphrodite-delights-kipr-70"
    , "https://innoads.ru/post/odnorazovye-trusiki-shapochki-binty-elastichnye-dlya-obyortyvaniya-22"
    , "https://innoads.ru/post/puhovik-zhenskij-38"
    , "https://innoads.ru/post/rasprodazha-elementov-dlya-diy-v-chastnosti-umnogo-doma-9"
    , "https://innoads.ru/post/sdaetsya-2-h-komnatnaya-kvartira-v-salavat-kupere-9"
    , "https://innoads.ru/post/xiaomi-redmi-note-10s-664-98"
    , "https://innoads.ru/post/zerkalo-napolnoe-99"
    , "https://innoads.ru/post/kedy-uniseks-malomerki-8"
    , "https://innoads.ru/post/kovriki-48"
    , "https://innoads.ru/post/ssd-crucial-1tb-mx500-sata-m2-60"
    , "https://innoads.ru/post/gitarnyj-perenosnoj-kombousilitel-roland-micro-cube-95"
    , "https://innoads.ru/post/bolmen-bolmen-taburet-lestnica-belyj-90"
    , "https://innoads.ru/post/botforty-zimnie-paolo-conte-68"
    , "https://innoads.ru/post/zhenskie-bryuki-56"
    , "https://innoads.ru/post/chyornyj-top-na-novyj-god-26"
    , "https://innoads.ru/post/airpods-2-41"
    , "https://innoads.ru/post/domashnie-polufabrikaty-51"
    , "https://innoads.ru/post/wi-fi-router-asus-rt-n12-vp-b1-15"
    , "https://innoads.ru/post/prodam-315-monitor-98"
    , "https://innoads.ru/post/prodam-posudomoechnuyu-mashinu-hansa-20"
    , "https://innoads.ru/post/videokarta-msi-geforce-gtx-1060-3gt-oc-74"
    , "https://innoads.ru/post/sdam-2h-komnatnuyu-kvartiru-v-zione-7"
    , "https://innoads.ru/post/chehol-na-iphone-11-38"
    , "https://innoads.ru/post/nepolnyj-rulon-oboev-62"
    , "https://innoads.ru/post/prodam-3d-printer-anet-et5x-84"
    , "https://innoads.ru/post/shkolnaya-parta-reguliruemaya-38"
    , "https://innoads.ru/post/molbert-5"
    , "https://innoads.ru/post/sushilka-ikea-21"
    , "https://innoads.ru/post/kofemolka-58"
    , "https://innoads.ru/post/domashnij-kinoteatr-s-45"
    , "https://innoads.ru/post/muzhskie-rubashki-r-s-24"
    , "https://innoads.ru/post/prodayu-knigu-56"
    , "https://innoads.ru/post/1-sprosi-mamu-est-15"
    , "https://innoads.ru/post/naushniki-edifier-w860nb-23"
    , "https://innoads.ru/post/elektrosamokat-xiaomi-m365-42"
    , "https://innoads.ru/post/it-specialist-28"
    , "https://innoads.ru/post/fotoapparat-43"
    , "https://innoads.ru/prodam/sistemnyj-blok-pk-lga-1151-8gb-ddr4-rx570-4gb-ssd_i515"
    , "https://innoads.ru/post/kacheli-detskie-59"
    , "https://innoads.ru/post/prodam-utyug-philips-gc-4420-92"
    , "https://innoads.ru/prodam/plate-kira-plastinina-razmer-xs_i995"
    , "https://innoads.ru/post/dvuhuyarusnaya-metallicheskaya-krovat-s-dvumya-matracami-18"]

const RSSTurbo = async (req: NextApiRequest, res: NextApiResponse) => {
    // const posts: PostInterface[] = await getDynamicPaths(999)

    const feed = new TR({
        title: 'Доска объявлений города Иннополиса',
        description: 'Доска объявлений – объявления города Иннополис о продаже и покупке товаров всех категорий. Самый простой способ продать или купить вещи',
        link: 'https://innoads.ru'
    });

    // feed.item({
    //     url: 'https://innoads.ru',
    //     turboEnabled: false
    // })

  toDelete.forEach((post) => {
        feed.item(
            {
                url: 'https://innoads.ru/post/' + post,
                turboEnabled: false
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
