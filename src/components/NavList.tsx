"use client";

import { useRouter } from "next/navigation";
import { XmenuList } from "@yakad/x";

export default function NavList() {
    const router = useRouter();

    const menuItems = [
        {
            name: "Overview",
            onClick: () => {
                router.push("/docs");
            },
        },
        {
            name: "Yakad UI",
            childs: [
                {
                    name: "AppBar",
                    onClick: () => router.push("/docs/ui/appbar"),
                },
                {
                    name: "Button",
                    onClick: () => router.push("/docs/ui/button"),
                },
                { name: "Card", onClick: () => router.push("/docs/ui/card") },
                {
                    name: "InputField",
                    onClick: () => router.push("/docs/ui/inputfield"),
                },
                {
                    name: "CodeField",
                    onClick: () => router.push("/docs/ui/codefield"),
                },
                {
                    name: "Container",
                    onClick: () => router.push("/docs/ui/container"),
                },
                { name: "Radio", onClick: () => router.push("/docs/ui/radio") },
                {
                    name: "CheckBox",
                    onClick: () => router.push("/docs/ui/checkBox"),
                },
                { name: "Grid", onClick: () => router.push("/docs/ui/grid") },
                { name: "Hr", onClick: () => router.push("/docs/ui/hr") },
                {
                    name: "ClickOusideListiner",
                    onClick: () => router.push("/docs/ui/clickoutsidelistiner"),
                },
                {
                    name: "Footer",
                    onClick: () => router.push("/docs/ui/footer"),
                },
                {
                    name: "Row",
                    onClick: () => router.push("/docs/ui/row"),
                },
                { name: "Stack", onClick: () => router.push("/docs/ui/stack") },
                { name: "Table", onClick: () => router.push("/docs/ui/table") },
                { name: "Theme", onClick: () => router.push("/docs/ui/theme") },
                {
                    name: "Loading",
                    onClick: () => router.push("/docs/ui/loading"),
                },
                {
                    name: "SvgIcon",
                    onClick: () => router.push("/docs/ui/svgIcon"),
                },
            ],
        },

        {
            name: "Yakad X",
            childs: [
                {
                    name: "Xbackground",
                    onClick: () => router.push("/docs/X/Xbackground"),
                },
                {
                    name: "XgetStart",
                    onClick: () => router.push("/docs/X/XgetStart"),
                },
                {
                    name: "XloginBox",
                    onClick: () => router.push("/docs/X/XloginBox"),
                },
                {
                    name: "XmenuList",
                    onClick: () => router.push("/docs/X/Xmenu"),
                },
                {
                    name: "Xpanel",
                    onClick: () => router.push("/docs/X/Xpanel"),
                },
                {
                    name: "XdataMap",
                    onClick: () => router.push("/docs/X/XdataMap"),
                },
                {
                    name: "Xtable",
                    onClick: () => router.push("/docs/X/Xtable"),
                },
            ],
        },
        { name: "Yakad Symbol", onClick: () => router.push("/docs/symbol") },
        {
            name: "Yakad Lib",
        },
    ];

    return <XmenuList items={menuItems} />;
}
