import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      title: 'How to Use the Watchlist',
      content: 'Learn how to add and manage stocks in your Watchlist. You can track the performance of your chosen stocks and keep an eye on market trends.',
    },
    {
      title: 'Stock Details Overview',
      content: 'View detailed information about any stock, including its current price, historical performance, and relevant statistics. You can also access options to buy or sell.',
    },
    {
      title: 'Buying and Selling Stocks',
      content: 'Understand how to purchase and sell stocks in the app. Keep track of your transactions and make informed decisions based on real-time data.',
    },
    {
      title: 'Managing Your Portfolio',
      content: 'Learn how to manage your stock portfolio by monitoring stock values, performance trends, and adjusting your holdings as needed to optimize your investments.',
    },
    {
      title: 'Setting Up Alerts',
      content: 'Set price alerts for specific stocks in your Watchlist. Receive notifications when stocks reach your desired price point to make timely investment decisions.',
    },
    {
      title: 'Understanding Stock Charts',
      content: 'Get an overview of the stock charts provided for each stock. Learn how to interpret stock price movements and trends to make smarter investment choices.',
    },
    {
      title: 'Troubleshooting Common Issues',
      content: 'If you are encountering any issues with the app, check here for solutions to common problems, such as loading errors or issues with stock data updates.',
    },
    {
      title: 'Account Settings and Preferences',
      content: 'Manage your account details and preferences. Update your notification settings, change your password, and manage other account-specific options.',
    },
    {
      title: 'Security and Privacy',
      content: 'Understand the security measures taken to protect your data and how your privacy is maintained within the app. Learn about encryption and data storage practices.',
    },
    {
      title: 'Contact Support',
      content: 'If you need further assistance, you can reach out to our support team. Visit the Contact page to get in touch with us directly via email or chat.',
    },
    {
      title: 'Getting Started with the App',
      content: 'New to the app? Start here! This guide will take you through the process of setting up your account, adding stocks to your Watchlist, and understanding the main features.',
    },
    {
      title: 'Stock Market Terminology',
      content: 'Not familiar with the jargon? Learn the basic terms used in stock trading, like "bull market," "bear market," "dividends," and more.',
    },
    {
      title: 'How to Read Stock Reports',
      content: 'Stock reports provide valuable data on a stock’s performance. Learn how to read these reports, including financial statements, price-to-earnings ratios, and other key indicators.',
    },
    {
      title: 'Understanding Risk and Diversification',
      content: 'Get tips on diversifying your stock portfolio and understanding the risks involved in stock trading. Learn how to balance your investments for long-term growth.',
    },
    {
      title: 'Frequently Asked Questions (FAQs)',
      content: `Here are some of the most common questions users have:
        1. How do I reset my password?
        2. Can I add multiple Watchlists?
        3. How do I cancel an ongoing trade?
        4. Are there any fees for buying or selling stocks?
        5. Why is my stock data not updating?`,
    },
    {
      title: 'Advanced Trading Strategies',
      content: 'Once you’re comfortable with basic stock trading, explore advanced strategies like short selling, options trading, and margin investing. Learn the risks and rewards associated with these strategies.',
    },
    {
      title: 'Understanding Market Hours',
      content: 'Stocks are traded during specific market hours. Learn about the opening and closing hours of major exchanges like the NYSE and NASDAQ, and how to plan your trades accordingly.',
    },
    {
      title: 'Understanding Dividends and Earnings',
      content: 'What are dividends? How do earnings reports affect stock prices? This guide explains how dividends work and how quarterly earnings affect stock performance.',
    },
    {
      title: 'How to Avoid Common Investment Mistakes',
      content: 'Every investor makes mistakes. Learn about common pitfalls like chasing trends, panic selling, and overtrading, and how to avoid them for smarter investing.',
    },
    {
      title: 'Investment Psychology',
      content: 'Explore the psychological aspects of investing. Learn how emotions like fear and greed can impact investment decisions, and how to stay calm during market volatility.',
    },
    {
      title: 'Understanding Financial Statements',
      content: 'Learn how to read financial statements like balance sheets, income statements, and cash flow statements to assess a company’s health and stock potential.',
    },
    {
      title: 'Long-Term vs Short-Term Investing',
      content: 'Learn the difference between long-term and short-term investing strategies. Discover the benefits of holding stocks over time and how to decide when to make short-term trades.',
    },
    {
      title: 'Using Technical Analysis in Stock Trading',
      content: 'Discover the basics of technical analysis, including tools like moving averages, RSI, and MACD, to help you make informed decisions based on price movements and patterns.',
    },
    {
      title: 'Understanding ETFs and Mutual Funds',
      content: 'Exchange-Traded Funds (ETFs) and mutual funds allow you to invest in a group of stocks. Learn the differences, benefits, and how to choose the right fund for your portfolio.',
    },
    {
      title: 'Tax Implications of Stock Trading',
      content: 'Understand how buying and selling stocks affects your taxes. Learn about capital gains taxes, dividend taxes, and how to report stock transactions for tax purposes.',
    },
    {
      title: 'Investing for Retirement',
      content: 'Learn how to invest for retirement using stocks, bonds, and other assets. Explore strategies for building a retirement portfolio that balances risk and growth over time.',
    },
    {
      title: 'How to Use Margin Trading',
      content: 'Understand the concept of margin trading, where you borrow money to trade stocks. Learn the risks involved and when it might be appropriate for advanced traders.',
    },
    {
      title: 'Stock Splits and Reverse Stock Splits',
      content: 'What is a stock split, and how does it affect your shares? Learn how stock splits and reverse stock splits impact stock prices and your investment portfolio.',
    },
  ];

  const handleTopicClick = (index) => {
    setSelectedTopic(index === selectedTopic ? null : index); // Toggle the content visibility
  };

  return (
    <div className="help-center">
      <h2>Help Center</h2>
      <div className="topics">
        {topics.map((topic, index) => (
          <div key={index} className="topic">
            <h3 onClick={() => handleTopicClick(index)}>{topic.title}</h3>
            {selectedTopic === index && <p>{topic.content}</p>} {/* Show content only when selected */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
