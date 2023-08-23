import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotes() {
  const [myQuote, setMyQuote] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError] = useState(null);

  useEffect(() => {
    const fetchMyQuote = async () => {
      try {
        const res = await axios.get(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'X-Api-Key': '/WT9nS4fJNWE5b+Te7Ad4A==4O7GwNEnyVzeNcgj',
            },
          },
        );
        setMyQuote(res.data[0].quote);
        setQuoteLoading(false);
      } catch (error) {
        setQuoteLoading(false);
        setQuoteError(error.message);
      }
    };
    fetchMyQuote();
  }, []);

  if (quoteLoading) {
    return <div className="quotes">Loading...</div>;
  }

  if (quoteError !== null) {
    return <div className="quotes">{quoteError}</div>;
  }

  return (
    <div className="quotes">{myQuote}</div>
  );
}

export default Quotes;
