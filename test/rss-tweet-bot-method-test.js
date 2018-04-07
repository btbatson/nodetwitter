'use strict';

const chai = require('chai');
const expect = chai.expect;

const RssTweetBot = require('../lib/rss-tweet-bot');
const TwitStub = require('./stubs/twit-stub');
const feedReadStub = require('./stubs/feed-read-stub');

const options = {
  rss: {
    feeds: [
      'http://jobs254.com/rss/all/',
      'http://jobs254.com/rss/all/'
    ],
    daysBack: 90
  },
  twitter: {
    keys: {
      consumer_key:        'yKL857880t8dcqAX7eLEDiz8w',
      consumer_secret:     'C7Mj528JQ7I9aIxjojqqOKdtm0wGY05TgaG4i7kUAKSYk10kPa',
      access_token:        '982599053199532033-anq4h5dHZGJWJ4sWvzBknP5ryowQkNO',
      access_token_secret: 'cnyrhv81KxzZz87BHdx57hdgWVdPnhmVkHRTkUxUXnZH5'
    },
    tweet: {
      append: '#GoodRead'
    }
  }
};

const testBot = new RssTweetBot(options);

describe('RssTweetBot tweetRandomLink method', () => {
  it(`Should return a string`, () => {
    let result;
    testBot.feed = feedReadStub;
    testBot.twitter = new TwitStub(options);
    testBot.tweetRandomLink(data => result = data);
    expect(result).to.be.a('string');
  });
});
