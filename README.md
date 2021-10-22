# URL Sharpener

Sharpen your long urls into short ones! Built with JavaScript, Express.js, MongoDB, and HTML/CSS. 

## Getting Started
1. Clone this repository to your local computer
2. Create a MongoDB shard
3. Make a `.env` file that contains the MongoURI for your MongoDB shard as well as the base URL for all shortened URLs. Look in `.env.example` for an example.
4. Run `node .\index.js` to start the back-end server.
5. Open `index.html` in the `routes` folder and shorten your URLs!

## Features
* Shorten a URL into a custom shortened URL.
* All created shortened URLs are stored in a MongoDB database!
* Simple, no hassle URL Shortener for all purposes

## Motivation
Sometimes I just wanted to share a link with friends, for example a Google search, however, due to how Google designed their search engine, the links become really long. With URL Sharpener, it is extremely easy to shorten a URL that you can then share to others.

## License

MIT License (c) 2021 Brian Lam
