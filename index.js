const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const slownik = [
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-a',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-b',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-c',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-%C4%87',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-d',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-e',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-f',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-g',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-h',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-i',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-j',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-k',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-l',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-%C5%82',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-m',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-n',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-o',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-%C3%B3',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-p',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-r',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-s',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-%C5%9B',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-t',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-u',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-w',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-Z',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=5-literowe-na-litere-%C5%BA',
    },
    {
        address: 'https://polski-slownik.pl/wszystkie-slowa-jezyka-polskiego.php?id=na-litere-%C5%BC',
    }
]

const slowa = []

slownik.forEach(slownik => {
    axios.get(slownik.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('[class="mbr-text mbr-fonts-style align-center display-7"]', html).each(function () {
                const slowo = $(this).text().replace(/(\r\n|\n|\r)/gm, "")

                slowa.push({
                    slowo
                })
            })

        })
})

app.get('/', (req, res) => {
    res.json('Welcome To My Polish 5-letter Words API')
})

app.get('/slowa', (req, res) => {
    res.json(slowa)
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
