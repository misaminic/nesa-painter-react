import { useState } from 'react';
import styled from 'styled-components';

const RoundedButton = () => {
  return (
    <button type="submit">
      signup
      <style jsx>{`
        padding: 0.8rem 2.2rem;
        color: var(--third-color);
        background: var(--primary-color);
        font-size: 1rem;
        font-weight: 600;
        line-height: 1rem;
        letter-spacing: 0.01rem;
        border-radius: 2rem;
        cursor: pointer;
      `}</style>
    </button>
  );
};

// const Button = styled.button`
//   padding: 0.8rem 2.2rem;
//   color: var(--third-color);
//   background: var(--primary-color);
//   font-size: 1rem;
//   font-weight: 600;
//   line-height: 1rem;
//   letter-spacing: 0.01rem;
//   border-radius: 2rem;
// `;

export default RoundedButton;
