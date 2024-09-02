/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kTEICDqXa46
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ChatInterface() {
    return (
        <>
            <div className="sticky top-0 z-10 flex h-14 items-center justify-center	 border-b bg-background px-4">
                <div className="flex items-center justify-center gap-2">
                    <Avatar className="w-7 h-7">
                        <AvatarImage src="/logo.png" alt="logo" />
                        <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="font-medium text-orange-500">GemmaTutor</div>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_300px] min-h-screen w-full bg-background">
                <div className="flex flex-col border-r">
                    <div className="flex-1 overflow-auto">
                        <div className="grid gap-4 p-4">
                            <div className="flex items-center mb-2">
                                <span className="text-sm font-medium text-muted-foreground">Topic: Machine Learning</span>
                            </div>
                            <div className="bg-background shadow-md rounded-lg p-4 border">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="/logo.png" alt="User Avatar" />
                                        <AvatarFallback>AI</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1 rounded-lg">
                                        <div className="font-medium">GemmaTutor</div>
                                        <div>
                                            Hey there! I'm looking for some resources to help me understand the latest React features. Do you
                                            have any recommendations?
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="grid gap-1 rounded-lg bg-orange-500 p-3 text-primary-foreground">
                                        <div className="font-medium">You</div>
                                        <div>Sure, I'd be happy to share some helpful resources! Let me put together a list for you.</div>
                                    </div>
                                    <Avatar className="w-8 h-8 border">
                                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                        <AvatarFallback>YO</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky bottom-0 z-10 border-t bg-background px-4 py-2">
                        <div className="relative">
                            <Textarea
                                placeholder="Type your query..."
                                name="message"
                                id="message"
                                rows={1}
                                className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                            />
                            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3 bg-orange-500">
                                <ArrowUpIcon className="w-4 h-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-l">
                    <div className="sticky top-0 z-10 flex h-14 items-center justify-between bg-background px-4">
                        <div className="font-medium">Sources</div>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <div className="grid gap-4 p-4">
                            <Card className="bg-background shadow-lg">
                                <CardHeader className="p-2">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                                            <FileTextIcon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-md">React Hooks</CardTitle>
                                            <CardDescription>Lorem ipsum</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="bg-background shadow-lg">
                                <CardHeader className="p-2">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                                            <FileTextIcon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-md">React Hooks</CardTitle>
                                            <CardDescription>Lorem ipsum</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="bg-background shadow-lg">
                                <CardHeader className="p-2">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                                            <FileTextIcon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-md">React Hooks</CardTitle>
                                            <CardDescription>Lorem ipsum</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ArrowUpIcon(props) {
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
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


function MoveHorizontalIcon(props) {
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
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    )
}
