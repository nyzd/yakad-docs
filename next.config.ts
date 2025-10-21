import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

