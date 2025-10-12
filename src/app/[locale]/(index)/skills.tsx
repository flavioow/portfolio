import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getScopedI18n } from "@/locales/server"
import { Icon } from "@iconify/react"
import Image from "next/image"

export async function Skills() {
    const t = await getScopedI18n("home")

    return (
        <section>
            <div className="border-grid border-b bg-primary" id="skills">
                <div className="container-wrapper">
                    <div className="container py-3 lg:py-6">
                        <p className="text-gray-100 font-bold">
                            {t("skills.subtitle")}
                        </p>
                        <h2 className="text-gray-100">{t("skills.title")}</h2>

                        <div className="flex gap-8 mt-4 flex-wrap">
                            <Icon
                                icon="devicon-plain:html5-wordmark"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="html"
                            />
                            <Icon
                                icon="devicon-plain:css3-wordmark"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="css"
                            />
                            <Icon
                                icon="devicon-plain:javascript"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="javascript"
                            />
                            <Icon
                                icon="devicon-plain:typescript"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="typescript"
                            />
                            <Icon
                                icon="devicon-plain:figma"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="figma"
                            />
                            <Icon
                                icon="devicon-plain:nodejs"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="node"
                            />
                            <Icon
                                icon="devicon-plain:nextjs"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="next"
                            />
                            <Icon
                                icon="file-icons:tailwind"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="tailwind"
                            />
                            <Icon
                                icon="devicon-plain:biome-wordmark"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="biome"
                            />
                            <Icon
                                icon="devicon-plain:python"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="python"
                            />
                            <Icon
                                icon="devicon-plain:git"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="git"
                            />
                            <Icon
                                icon="devicon-plain:githubcodespaces"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="github"
                            />
                            <Icon
                                icon="devicon-plain:bun"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="bun"
                            />
                            <Icon
                                icon="devicon-plain:mysql-wordmark"
                                className="size-[3rem] text-gray-100 transition-colors duration-200 ease-in-out"
                                aria-label="mysql"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-grid border-b">
                <div className="container-wrapper">
                    <div className="container">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="flex lg:grid flex-col-reverse py-2 lg:py-4 lg:grid-cols-2 gap-2 lg:justify-between">
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <p className="font-bold">
                                                    {t("skills.where")}
                                                </p>
                                                <h3 className="font-courier">
                                                    {t(
                                                        "skills.responsive.title",
                                                    )}
                                                </h3>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.responsive.firstParagraph",
                                                    )}
                                                </p>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.responsive.secondParagraph",
                                                    )}
                                                </p>
                                            </div>

                                            <div className="flex justify-between flex-wrap items-end">
                                                <div className="w-1/4 flex flex-col justify-center">
                                                    <p className="text-primary text-2xl font-bold text-center">
                                                        69.4%
                                                    </p>
                                                    <a
                                                        href="https://datareportal.com/reports/digital-2024-global-overview-report"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <small className="text-primary underline text-center">
                                                            {t(
                                                                "skills.responsive.link",
                                                            )}{" "}
                                                            ↗
                                                        </small>
                                                    </a>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Icon
                                                        icon="devicon-plain:html5-wordmark"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="html"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:css3-wordmark"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="css"
                                                    />
                                                    <Icon
                                                        icon="file-icons:tailwind"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="tailwind"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:figma"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="figma"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative aspect-5/4 w-full max-w-md self-center lg:ml-auto">
                                            <Image
                                                src="/assets/mobile-mokup-high.webp"
                                                alt="Website in mobile device example"
                                                fill
                                                loading="lazy"
                                                className="object-cover transition-opacity duration-1000 ease-in-out high-image"
                                            />
                                            <Image
                                                src="/assets/mobile-mokup-low.avif"
                                                alt="Loading..."
                                                fill
                                                className="object-cover transition-opacity duration-700 low-image"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className=" flex lg:grid flex-col-reverse py-2 lg:py-4 lg:grid-cols-2 gap-2 lg:justify-between">
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <p className="font-bold">
                                                    {t("skills.where")}
                                                </p>
                                                <h3 className="font-courier">
                                                    {t("skills.planning.title")}
                                                </h3>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.planning.firstParagraph",
                                                    )}
                                                </p>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.planning.secondParagraph",
                                                    )}
                                                </p>
                                            </div>

                                            <div className="flex justify-between flex-wrap items-end">
                                                <div className="w-1/4 flex flex-col justify-center">
                                                    <p className="text-primary text-2xl font-bold text-center">
                                                        Biome.js
                                                    </p>
                                                    <a
                                                        href="https://vinniciusgomes.dev/articles/biome-js-um-novo-lint-e-formatter-para-javascript-e-typescript"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <small className="text-primary underline text-center">
                                                            {t(
                                                                "skills.planning.link",
                                                            )}{" "}
                                                            ↗
                                                        </small>
                                                    </a>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Icon
                                                        icon="devicon-plain:biome-wordmark"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="biome"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:git"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="git"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:nodejs"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="node"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:bun"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="bun"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative aspect-5/4 w-full max-w-md self-center lg:ml-auto">
                                            <Image
                                                src="/assets/vscode-high.webp"
                                                alt="Website in mobile device example"
                                                fill
                                                loading="lazy"
                                                className="object-cover transition-opacity duration-1000 ease-in-out high-image"
                                            />
                                            <Image
                                                src="/assets/vscode-low.avif"
                                                alt="Loading..."
                                                fill
                                                className="object-cover transition-opacity duration-700 low-image"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className=" flex lg:grid flex-col-reverse py-2 lg:py-4 lg:grid-cols-2 gap-2 lg:justify-between">
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <p className="font-bold">
                                                    {t("skills.where")}
                                                </p>
                                                <h3 className="font-courier">
                                                    {t("skills.timing.title")}
                                                </h3>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.timing.firstParagraph",
                                                    )}
                                                </p>
                                                <p className="my-2">
                                                    {t(
                                                        "skills.timing.secondParagraph",
                                                    )}
                                                </p>
                                            </div>

                                            <div className="flex justify-between flex-wrap items-end">
                                                <div className="w-1/4 flex flex-col justify-center">
                                                    <p className="text-primary text-2xl font-bold text-center">
                                                        MadeIt
                                                    </p>
                                                    <a
                                                        href="https://www.npmjs.com/package/madeit"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <small className="text-primary underline text-center">
                                                            {t(
                                                                "skills.timing.link",
                                                            )}{" "}
                                                            ↗
                                                        </small>
                                                    </a>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Icon
                                                        icon="devicon-plain:nodejs"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="node"
                                                    />
                                                    <Icon
                                                        icon="devicon-plain:typescript"
                                                        className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out"
                                                        aria-label="typescript"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative aspect-5/4 w-full max-w-md self-center lg:ml-auto">
                                            <Image
                                                src="/assets/madeit-high.webp"
                                                alt="Website in mobile device example"
                                                fill
                                                loading="lazy"
                                                className="object-cover transition-opacity duration-1000 ease-in-out high-image"
                                            />
                                            <Image
                                                src="/assets/madeit-low.avif"
                                                alt="Loading..."
                                                fill
                                                className="object-cover transition-opacity duration-700 low-image"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
