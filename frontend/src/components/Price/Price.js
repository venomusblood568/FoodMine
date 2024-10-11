import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

// Set default props for Indian Rupee
Price.defaultProps = {
  locale: 'en-IN',   // Indian English locale
  currency: 'INR',   // Indian Rupee
};
