import { ReactNode } from 'react'
import './BottomBar.css'

interface Props {
    children?: React.ReactNode[]
}

export default function BottomBar({ children }: Props): ReactNode {
    return <section id='BottomBar'>
        {children}
    </section>
}