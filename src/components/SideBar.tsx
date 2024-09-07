import './SideBar.css'

interface SideBarProps {
    childNodes?: React.ReactNode[]
}

export default function SideBar({ childNodes }: SideBarProps) {

    return <section id="SideBar">
        sidebar
        {childNodes}
    </section>
}