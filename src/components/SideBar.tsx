import { ReactNode } from 'react'
import './SideBar.css'

interface Props {
    children?: ReactNode[] | ReactNode
}

export default function SideBar({ children }: Props): ReactNode {

    return <section id="SideBar">
        {children}
    </section>
}