import './RenderingSection.css'

interface RenderingSectionProps {
    childNodes?: React.ReactNode[]
}

export default function RenderingSection({ childNodes }: RenderingSectionProps) {

    return <section id="RenderingSection">
        rendering section
        {childNodes}
    </section>
}