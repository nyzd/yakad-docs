import { Button } from "@yakad/ui";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    button: () => <Button>Btn</Button>,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
