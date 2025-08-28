import { useEffect, useRef, useState } from "react"

export const HowtoIntersectionObserver = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // use viewport
                rootMargin: '0px',
                threshold: 0.6, // trigger when n% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                padding: '.5rem',
                width: '12rem',
                height: '8rem',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                backgroundColor: isVisible ? 'lightgreen' : 'lightcoral',
                transition: 'background-color 0.3s ease',
            }}
        >
            {isVisible ? 'I am visible ✅' : 'Scroll to see me 👀'}
        </div>
    )
}