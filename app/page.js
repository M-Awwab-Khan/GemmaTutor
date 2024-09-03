'use client'
import { useState, useEffect, useSyncExternalStore } from "react"
import { Hero } from "@/components/component/hero";
import { ChatInterface } from "@/components/component/chat-interface";
import { getSystemPrompt } from "./utils/utils";

export default function Home() {
    const [topic, setTopic] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [sources, setSources] = useState([]);
    const [isLoadingSources, setIsLoadingSources] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    const handleInitialChat = async () => {
        setShowResult(true);
        setLoading(true);
        setUserMessage('');

        const initialMessage = [
            { role: "system", content: getSystemPrompt(ageGroup) },
            { role: "user", content: `${topic}` },
        ];
        setMessages(initialMessage);
        await fetchSources();
        await handleSubmit(initialMessage);

    }

    const fetchSources = async () => {
        setIsLoadingSources(true);
        let sourcesResponse = await fetch("/api/sources", {
            method: "POST",
            body: JSON.stringify({ query: topic }),
        });
        let sources;
        if (sourcesResponse.ok) {
            sources = await sourcesResponse.json();

            setSources(sources);
        } else {
            setSources([]);
        }
        setIsLoadingSources(false);
    }

    const handleSubmit = async (messages) => {
        const responseStream = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messages)
        });

        const reader = responseStream.body.getReader();
        const decoder = new TextDecoder();

        let currentContent = '';
        let done = false;

        // Add a new message with role 'assistant' for streaming content
        setMessages(prevMessages => [
            ...prevMessages,
            { role: 'assistant', content: '' } // Placeholder for the streaming content
        ]);

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
                const chunk = decoder.decode(value, { stream: !done });
                currentContent += chunk;

                // Update the latest assistant message with the new content
                setMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[updatedMessages.length - 1] = {
                        role: 'assistant',
                        content: currentContent
                    };
                    return updatedMessages;
                });
            }
        }
    };


    return !showResult ? (
        <Hero
            topic={topic}
            setTopic={setTopic}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            setShowResult={setShowResult}
            handleInitialChat={handleInitialChat}
        />
    ) : (
        <ChatInterface
            messages={messages}
            disabled={loading}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            setMessages={setMessages}
            topic={topic}
            handleSubmit={handleSubmit}
            sources={sources}
            isLoadingSources={isLoadingSources}
        />
    );

}
