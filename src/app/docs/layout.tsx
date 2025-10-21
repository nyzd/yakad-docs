import { Container } from "@yakad/ui";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return <Container size="md">{children}</Container>;
}
