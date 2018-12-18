BEGIN;

DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    recipe TEXT NOT NULL,
    img_url TEXT NOT NULL,
    type BOOLEAN NOT NULL
);


INSERT INTO recipes (name, img_url, recipe, type)
VALUES
(
    'Ceasar Salad',
    'https://imgix.bustle.com/uploads/image/2018/11/16/6360eba1-0760-42e0-89e0-d843cceee450-burger-king.png?w=945&h=574&fit=crop&crop=faces&auto=format&q=70',
    'Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous. His merit end means widow songs linen known. Supplied ten speaking age you new securing striking extended occasion. Sang put paid away joy into six her. Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.',
    TRUE
),
(
    'Beef Burger',
    'https://imgix.bustle.com/uploads/image/2018/11/16/6360eba1-0760-42e0-89e0-d843cceee450-burger-king.png?w=945&h=574&fit=crop&crop=faces&auto=format&q=70',
    'In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.',
    FALSE
),
(
    'Pasta',
    'https://imgix.bustle.com/uploads/image/2018/11/16/6360eba1-0760-42e0-89e0-d843cceee450-burger-king.png?w=945&h=574&fit=crop&crop=faces&auto=format&q=70',
    'Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous. His merit end means widow songs linen known. Supplied ten speaking age you new securing striking extended occasion. Sang put paid away joy into six her. Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.',
    TRUE
),
(
    'Grilled Chicken',
    'https://imgix.bustle.com/uploads/image/2018/11/16/6360eba1-0760-42e0-89e0-d843cceee450-burger-king.png?w=945&h=574&fit=crop&crop=faces&auto=format&q=70',
    'In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon. ',
    FALSE
);

COMMIT;
