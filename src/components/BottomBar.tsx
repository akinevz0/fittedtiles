import './BottomBar.css'

interface BottomBarProps {
    childNodes?: React.ReactNode[]
}

export default function BottomBar({ childNodes }: BottomBarProps) {

    return <section id='BottomBar'>
        bottom bar
        {childNodes}
    </section>
}