import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero(props) {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">

            {/* left column */}
            <div
                className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24">
                <div className="flex flex-col">
                    <header className="flex flex-col mb-5">
                        <div className="inline-flex items-center">
                            <img src="/logo.png" className="w-6" />
                            <span className="ml-3 text-md font-bold text-orange-500">GemmaTutor</span>
                        </div>
                    </header>
                    <Badge
                        className="size-fit	flex items-center px-4 py-1 rounded-full mb-2 mt-7 bg-orange-500 space-x-2">
                        <SparkleIcon className="w-4 h-4 text-white" />
                        <span className="text-white">Powered by Gemma-2 27B and Nvidia NIM</span>
                    </Badge>
                    <main className="flex flex-col">
                        <h1 className="text-4xl font-bold">
                            Your Personal <span className="text-primary">Tutor</span>
                        </h1>
                        <p className="mt-4 mb-8 text-lg text-gray-600">
                            Enter a topic you want to learn about along with the education level you want to be taught at and generate
                            a personalized tutor tailored to you!
                        </p>
                        <div className="flex items-center justify-center w-full mt-5 space-x-4">
                            <Input
                                type="text"
                                placeholder="Teach me about..."
                                className="w-full max-w-sm"
                                value={props.topic}
                                onChange={(event) => { props.setTopic(event.target.value) }}
                            />

                            <Select
                                value={props.ageGroup}
                                onValueChange={(value) => { props.setAgeGroup(value) }}
                            >
                                <SelectTrigger id="education-level" className="w-40">
                                    <SelectValue placeholder="Middle School" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="middle-school">Middle School</SelectItem>
                                    <SelectItem value="high-school">High School</SelectItem>
                                    <SelectItem value="college">College</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button
                                className="ml-2 bg-orange-500"
                                onClick={() => { props.handleInitialChat() }}
                                disabled={!props.topic} // Disable button if topic is empty
                            >
                                <ArrowRightIcon className="h-5 w-5" />
                            </Button>

                        </div>
                        <div
                            className="flex flex-wrap w-full mt-8 space-x-2">
                            <Badge variant="outline" className="flex items-center px-4 py-2 rounded-lg cursor-pointer" onClick={() => props.setTopic('Basketball')}>
                                <ShoppingBasketIcon className="mr-2 h-4 w-4 text-orange-500" />
                                Basketball
                            </Badge>
                            <Badge variant="outline" className="flex items-center px-4 py-2 rounded-lg cursor-pointer" onClick={() => props.setTopic('Machine Learning')}>
                                <BrainIcon className="mr-2 h-4 w-4 text-orange-500" />
                                Machine Learning
                            </Badge>
                            <Badge variant="outline" className="flex items-center px-4 py-2 rounded-lg cursor-pointer" onClick={() => props.setTopic('Personal Finance')}>
                                <DollarSignIcon className="mr-2 h-4 w-4 text-orange-500" />
                                Personal Finance
                            </Badge>
                            <Badge variant="outline" className="flex items-center px-4 py-2 rounded-lg cursor-pointer" onClick={() => props.setTopic('Pakistan History')}>
                                <FlagIcon className="mr-2 h-4 w-4 text-orange-500" />
                                Pakistan History
                            </Badge>
                        </div>
                    </main>
                    <footer className="mt-8 text-sm text-gray-600">
                        Fully open source!{" "}
                        <a href="#" className="text-orange-500 underline">
                            Star it on github.
                        </a>
                    </footer>
                </div>
                <div className="relative">
                    <img
                        src="/placeholder.svg"
                        alt="Hero Image"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-lg shadow-lg z-10 relative"
                        style={{ aspectRatio: "800/600", objectFit: "cover" }} />
                    <div
                        className="absolute -bottom-12 -right-12 w-3/4 h-3/4 rounded-lg shadow-lg  bg-orange-500" />
                </div>
            </div >



            {/* right column */}
            < section
                className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12 md:py-24" >
                <div className="flex flex-col items-center justify-center text-center">
                    <LightbulbIcon className="w-12 h-12  mb-4 text-orange-500" />
                    <h3 className="text-2xl font-bold mb-2">Personalized Tutoring</h3>
                    <p className="text-gray-600">Get a tutor tailored to your specific needs and learning style.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <RocketIcon className="w-12 h-12 mb-4 text-orange-500" />
                    <h3 className="text-2xl font-bold mb-2">Accelerated Learning</h3>
                    <p className="text-gray-600">Learn faster and more efficiently with our expert tutors.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <SmileIcon className="w-12 h-12 mb-4 text-orange-500" />
                    <h3 className="text-2xl font-bold mb-2">Enjoyable Experience</h3>
                    <p className="text-gray-600">Make learning fun and engaging with our interactive lessons.</p>
                </div>
            </section >
        </div >
    )
}

function ArrowRightIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>)
    );
}


function BrainIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path
                d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
        </svg>)
    );
}


function DollarSignIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>)
    );
}


function FlagIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>)
    );
}


function LightbulbIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>)
    );
}


function RocketIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path
                d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>)
    );
}


function ShoppingBasketIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 11-1 9" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="M4.5 15.5h15" />
            <path d="m5 11 4-7" />
            <path d="m9 11 1 9" />
        </svg>)
    );
}


function SmileIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>)
    );
}


function SparkleIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        </svg>)
    );
}
