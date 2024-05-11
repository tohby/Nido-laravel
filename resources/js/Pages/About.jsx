import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

const About = () => {
    return (
        <Guest>
            <Head title="About us" />
            <header>
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                    <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                        <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                            Get going with Agent OS.
                        </h1>
                        <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-300">
                            In the age of conversational AI, every company needs
                            an agent. Agent OS makes it easy.
                        </p>
                    </div>
                    <div className="relative mt-12 aspect-[3/4] w-full md:aspect-[16/7]">
                        <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 [transform:translateZ(0)] theme-tech:bg-gray-700 theme-platform:bg-gray-100 md:rounded-4xl">
                            <img
                                alt="Person using a laptop"
                                fetchpriority="high"
                                decoding="async"
                                data-nimg="fill"
                                className="block h-auto w-full object-cover"
                                sizes="95vw"
                                srcSet="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=640&quality=90 640w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=750&quality=90 750w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=828&quality=90 828w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=1080&quality=90 1080w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=1200&quality=90 1200w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=1920&quality=90 1920w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=2048&quality=90 2048w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=3840&quality=90 3840w"
                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff08db6e7358cbf1780c8f2a6dddf6d20484811d9-4500x1888.jpg&width=3840&quality=90"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    objectPosition: "72.2114% 50.2778%",
                                    color: "transparent",
                                }}
                            />
                            <div style={{ opacity: 1 }}>
                                <div className="absolute overflow-hidden rounded-2xl bottom-2 left-2 md:bottom-6 md:left-6 w-[calc((2/3)*100%)] md:w-48 lg:w-80 2xl:w-96">
                                    <img
                                        alt="Examples features of Agent OS, such as Summaries, Alerts, Knowledge and Integrations"
                                        loading="lazy"
                                        width={4000}
                                        height={2600}
                                        decoding="async"
                                        data-nimg={1}
                                        className="block h-auto w-full"
                                        sizes="(min-width: 1025px) 320px, 192px"
                                        srcSet="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=16&quality=90 16w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=32&quality=90 32w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=48&quality=90 48w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=64&quality=90 64w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=96&quality=90 96w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=128&quality=90 128w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=256&quality=90 256w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=384&quality=90 384w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=640&quality=90 640w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=750&quality=90 750w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=828&quality=90 828w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=1080&quality=90 1080w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=1200&quality=90 1200w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=1920&quality=90 1920w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=2048&quality=90 2048w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=3840&quality=90 3840w"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdcfe752d08c53374820a842afa4eee7c5b0945bf-4000x2600.png&width=3840&quality=90"
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </header>
        </Guest>
    );
};

export default About;
