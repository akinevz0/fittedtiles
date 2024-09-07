import React from 'react'
import './MainSection.css'

interface MainSectionProps {
    children?: React.ReactNode[]
}

export default function MainSection({ children }: MainSectionProps) {
    return <section id='MainSection'>
        {children}
    </section>
}