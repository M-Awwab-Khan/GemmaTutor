'use client'
import { useState, useEffect, useSyncExternalStore } from "react"
import { Hero } from "@/components/component/hero";
import { ChatInterface } from "@/components/component/chat-interface";

export default function Home() {
    const [topic, setTopic] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [sources, setSources] = useState([]);
    const [isLoadingSources, setIsLoadingSources] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    return !showResult ? (
        <Hero
            topic={topic}
            setTopic={setTopic}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            setShowResult={setShowResult}
        />
    ) : (
        <ChatInterface
            messages={messages}
            disabled={loading}
            promptValue={userMessage}
            setPromptValue={setUserMessage}
            setMessages={setMessages}
            topic={topic}
        />
    );

}
