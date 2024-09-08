import { ReactNode } from 'react'
import './RenderingSection.css'

interface Props {
    children?: React.ReactNode[]
}

export default function RenderingSection({ children }: Props): ReactNode {

    return <section id="RenderingSection">
        {children}
    </section>
}