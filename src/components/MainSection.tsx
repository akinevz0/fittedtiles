import React, { ReactNode } from 'react'
import './MainSection.css'

interface Props {
    children?: React.ReactNode[]
}

export default function MainSection({ children }: Props): ReactNode {
    return <section id='MainSection'>
        {children}
    </section>
}