import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import Image from "next/image"
export function Sources(props) {
    return (
        <div className="flex flex-col border-l h-full w-[400px] overflow-y-auto">
            <div className="flex h-14 items-center justify-between bg-background px-4">
                <div className="font-medium">Sources</div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <div className="grid gap-4">
                    {props.sources.map((source, index) => (
                        <Card key={index} className="bg-background shadow-sm truncate">
                            <CardHeader className="p-2">
                                <div className="flex items-center gap-4">
                                    <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                                        <Image
                                            unoptimized
                                            src={`https://www.google.com/s2/favicons?domain=${source.url}&sz=128`}
                                            alt={source.url}
                                            className="rounded-full p-1"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <a href={source.url} target="_blank">
                                        <div className="truncate w-full">
                                            <h6 className="font-medium truncate text-sm">{source.name}</h6>
                                            <CardDescription className="text-xs truncate">{source.url}</CardDescription>
                                        </div>
                                    </a>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

function FileTextIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
        </svg>
    )
}
