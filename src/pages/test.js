import React from 'react';
import Layout from '@theme/Layout';

// cyynb!!
export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          佬太强啦 QAQ
        </p>
      </div>
    </Layout>
  );
}