import Image from "next/image";

interface typeList {
    img: string,
    title: string,
    tips: string
}

interface groupList {
    id: number,
    title: string,
    ls?: string[]
}

const list: typeList[] = [
    {
        img: "https://s3-alpha.figma.com/hub/file/6197688148/a3d27945-a70c-4042-9cac-d0da4fd16e6d-cover.png",
        title: "iOS 18 and iPadOS 18",
        tips: "by Apple"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/6069801451/1912cde5-1bdb-4f09-abf9-7ee9d81c79fa-cover.png",
        title: "Material 3 Design Kit",
        tips: "by Material Design"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/6174705843/7673d9aa-7e55-480f-81e9-7d86164bff34-cover.png",
        title: "Simple Design System",
        tips: "by Figma"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/6197398878/c9b8235e-c02a-43af-9312-79ecbb2140e2-cover.png",
        title: "iOS 17 and iPadOS 17",
        tips: "by Apple"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/2981095355/79132815-7823-45c4-bb41-03ad87259f09-cover.png",
        title: "@shadcn/ui - Design System",
        tips: "by Pietro Schirano"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/2403780110/bd68c2c9-90df-4997-9a05-f697585ef9e6-cover.png",
        title: "Ant Design Open Source",
        tips: "by Mr.Biscuit"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/3078157498/17be5ff9-f97f-4c3b-945a-46651ebdc45e-cover.png",
        title: "Instagram UI Kit 1.0",
        tips: "by Ashley Gaunt-Seo"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/4049592692/f059860b-ba07-4fb7-90db-6bea41f6a2e0-cover.png",
        title: "❖ Base Gallery",
        tips: "by Uber and 1 other"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/6171232726/abe82125-d4e5-4f1a-a48b-0605a08fb222-cover.png",
        title: "❖ Untitled UI – FREE Figma UI kit and design system v2.0",
        tips: "by Jordan Hughes"
    },
    {
        img: "https://s3-alpha.figma.com/hub/file/5845086419/3ac01787-71fd-4868-bdd9-8dc8eb3431ba-cover.png",
        title: "Bootstrap 5 UI Kit",
        tips: "by jitu chauhan"
    }
]

const data: groupList[] = [
    {
        id: 0,
        title: "Filter by"
    },
    {
        id: 1,
        title: "All products",
        ls: ["All products", "Figma Design", "Figma: Dev Mode", "FigJam", "Figma Slides"]
    },
    {
        id: 2,
        title: "All resources",
        ls: ["All resources", "Files", "Plugins", "Widgets"]
    },
    {
        id: 3,
        title: "Paid + free",
        ls: ["Paid + free", "Paid", "Free"]
    },
]

export default function MyApp() {
    return (
        <div className="mx-16">
            <div className="py-16 border-b-[1px] border-[#e6e6e6]">
                <div className="flex items-center mb-2 text-2xl">
                    <span className="text-black/30">Libraries</span>
                    <Image
                        src="/greater.svg"
                        alt="左箭头"
                        className="dark:invert"
                        width={32}
                        height={32}
                    />
                    <span>UI kits</span>
                </div>
                <div className="text-[13px]/6 text-black/50">Streamline your workflow and ignite your creative process with these UI kits.</div>
            </div>
            <div className="my-6">
                <div className="py-[14px] flex items-center gap-x-4 text-[14px]/6 text-black/80 sticky top-0 bg-white z-10">
                    {
                        data.map(item => {
                            return(
                                <div className={`${item.id == 1 ? 'max-[530px]:hidden' : ''} group/item cursor-pointer relative`} key={item.id}>
                                    <div className="flex items-center gap-x-1">
                                        <span className="truncate">{item.title}</span>
                                        {
                                            item.id != 0 ? <Image
                                                src="/down.svg"
                                                alt="下箭头"
                                                className="dark:invert"
                                                width={12}
                                                height={7}
                                            /> : null
                                        }
                                    </div>
                                    <div className="group-hover/item:scale-100 absolute top-6 py-[6px] bg-[#1e1e1e] text-white text-[1em] rounded-sm z-20 scale-0">
                                        {
                                            item.ls?.map((ele, num) => {
                                                return (
                                                    <div className="group/ele hover:bg-[#0d99ff] flex items-center min-w-[180px] h-8 pr-[6px] whitespace-nowrap" key={num}>
                                                        <Image
                                                            src="/yes.svg"
                                                            alt="左箭头"
                                                            className="dark:invert px-[10px] scale-0 group-hover/ele:scale-100"
                                                            width={36}
                                                            height={16}
                                                        />
                                                        <div className="pr-[10px] max-w-60">{ele}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 auto-cols-fr">
                    {
                        list.map((item, index) => {
                            return (
                                <div className="flex flex-col" key={index}>
                                    <div className="pt-[56.25%] relative">
                                        <div className="absolute top-0 w-full h-full rounded-xl overflow-hidden">
                                            <img src={item.img} className="w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3 gap-x-2">
                                        <div className="min-w-0 text-[13px]/6 flex-1">
                                            <p className="truncate">{item.title}</p>
                                            <span className="text-black/50 text-[11px]">{item.tips}</span>
                                        </div>
                                        <div className="flex items-center gap-[10px] text-black/50 text-[11px] ml-auto">
                                            <div className="flex items-center gap-1">
                                                <Image
                                                    src="/love.svg"
                                                    alt="点赞"
                                                    className="dark:invert"
                                                    width={12}
                                                    height={7}
                                                />
                                                <span>1.4k</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Image
                                                    src="/user.svg"
                                                    alt="用户"
                                                    className="dark:invert"
                                                    width={12}
                                                    height={7}
                                                />
                                                <span>1.4k</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center mt-9">
                    <button className="flex justify-center items-center h-8 px-3 border-[1px] border-[rgba(0,0,0,.8)] text-[11px]/6 text-[#333] rounded-md focus:border-[#0d99ff]">Load more</button>
                </div>
                <div className="flex items-center mt-8 py-16 pl-6 border-y-[1px] border-[#e6e6e6]">
                    <div className="flex-[0_0_40%]">
                        <span className="block text-2xl mb-[10px]">About</span>
                    </div>
                    <div className="flex-[0_0_60%] max-w-[640px] text-[13px]/6 text-black/80">
                        Elevate your designs with our extensive collection of both paid and free UI kits.From sleek interfaces to comprehensive design systems, UI kits are crafted to streamline your workflow and empower creativity. Whether you're designing websites, mobile apps, or desktop software, our UI kits offer a variety of components and elements for whatever you need. Our UI kits provide the building blocks you need to create stunning user experiences, whether it’s minimalist designs to vibrant interfaces. Explore now and bring your designs to life. Templates are paid or free, per template creator choice.
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 max-[640px]:grid-cols-2 gap-8 auto-cols-fr pt-8 px-6 mb-12">
                    {
                        [1,2,3,4].map(item => {
                            return <div className="flex flex-col text-[13px]/6" key={item}>
                                <div className="font-semibold">Popular searches</div>
                                <span className="mt-2 text-black/80 hover:underline">Resume templates</span>
                                <span className="mt-2 text-black/80 hover:underline">Mobile apps</span>
                                <span className="mt-2 text-black/80 hover:underline">Presentation templates</span>
                                <span className="mt-2 text-black/80 hover:underline">UI kits</span>
                                <span className="mt-2 text-black/80 hover:underline">Standup templates</span>
                            </div>
                        })
                    }
                </div>
                <div className="px-6 pb-8">
                    <Image
                        src="/figma.svg"
                        alt="figma"
                        className="dark:invert"
                        width={73}
                        height={26}
                    />
                    <p className="mt-4 text-[13px]/6 text-black/80">© 2024 Figma, Inc.<span className="p-2">•</span>Site map<span className="p-2">•</span>Community guidelines<span className="p-2">•</span>Terms of service</p>
                </div>
            </div>
        </div>
    );
}
