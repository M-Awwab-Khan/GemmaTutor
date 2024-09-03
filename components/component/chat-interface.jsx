import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ReactMarkdown from "react-markdown"
import { Sources } from "./sources"

export function ChatInterface(props) {

    const onSubmit = () => {
        const latestMessages = [...props.messages, { role: "user", content: props.userMessage }]
        props.setUserMessage("");
        props.setMessages(latestMessages);
        props.handleSubmit(latestMessages);
    }
    return (
        <>
            <div className="sticky top-0 z-10 flex h-14 items-center justify-center border-b bg-background px-4">
                <div className="flex items-center justify-center gap-2">
                    <Avatar className="w-7 h-7">
                        <AvatarImage src="/logo.png" alt="logo" />
                        <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="font-medium text-orange-500">GemmaTutor</div>
                </div>
            </div>
            <div className="flex flex-row h-[calc(100vh-56px)]"> {/* Adjusted height to fit the viewport height minus the header */}
                <div className="flex flex-row w-full">
                    <div className="flex flex-col border-r h-full w-full max-w-[calc(100%_-_400px)]"> {/* Adjust width and height for messages */}
                        <div className="flex-1 overflow-hidden flex flex-col">
                            <div className="flex-1 overflow-y-auto p-4">
                                <div className="grid gap-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground">Topic: {props.topic}</span>
                                    </div>

                                    {/* messages  */}
                                    <div className="bg-background shadow-md rounded-lg p-4 border overflow-y-auto h-full prose-sm lg:prose lg:max-w-full">
                                        {props.messages.length > 2 &&
                                            props.messages.slice(2).map((message, index) => (
                                                <div key={index} className="mb-4">
                                                    {/* Assistant Message */}
                                                    {message.role === 'assistant' && (
                                                        <div className="flex items-start gap-4">
                                                            <Avatar className="w-6 h-6 not-prose">
                                                                <AvatarImage src="/logo.png" alt="Assistant Avatar" />
                                                                <AvatarFallback>AI</AvatarFallback>
                                                            </Avatar>
                                                            <div className="grid gap-1 rounded-lg">
                                                                <ReactMarkdown>{message.content}</ReactMarkdown>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {/* User Message */}
                                                    {message.role === 'user' && (
                                                        <div className="flex items-start gap-4 justify-end">
                                                            <div className="grid gap-1 rounded-lg bg-orange-500 p-3 text-primary-foreground">
                                                                <div className="font-medium">You</div>
                                                                <div>{message.content}</div>
                                                            </div>
                                                            <Avatar className="w-8 h-8 border">
                                                                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                                                <AvatarFallback>YO</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </div>

                                </div>
                            </div>

                            {/* submit button  */}
                            <div className="border-t bg-background px-4 py-2">
                                <div className="relative">
                                    <Textarea
                                        placeholder="Type your query..."
                                        name="message"
                                        id="message"
                                        rows={1}
                                        value={props.userMessage}
                                        onChange={(event) => { props.setUserMessage(event.target.value) }}
                                        className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                                    />
                                    <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3 bg-orange-500" onClick={onSubmit}>
                                        <ArrowUpIcon className="w-4 h-4" />
                                        <span className="sr-only">Send</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* sources  */}
                    <Sources sources={props.sources} isLoadingSources={props.isLoadingSources} />
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
