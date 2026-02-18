import createMDX from '@next/mdx';
import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone', // TypeScript now knows this is valid
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
